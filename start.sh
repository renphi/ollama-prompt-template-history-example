#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}    Ollama JSON Application Launcher    ${NC}"
echo -e "${GREEN}=========================================${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed${NC}"
    echo -e "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}Error: npm is not installed${NC}"
    echo -e "Please install npm, which usually comes with Node.js"
    exit 1
fi

# Check if Ollama is installed
if ! command -v ollama &> /dev/null; then
    echo -e "${RED}Error: Ollama is not installed${NC}"
    echo -e "Please install Ollama from https://ollama.ai/"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to install dependencies${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}Dependencies installed successfully${NC}"
fi

# Check if Ollama is running
if ! curl -s "http://localhost:11434/api/version" &> /dev/null; then
    echo -e "${YELLOW}Ollama is not running. Starting Ollama...${NC}"
    
    # Start Ollama in the background
    ollama serve &
    OLLAMA_PID=$!
    
    # Wait for Ollama to start
    echo -e "${YELLOW}Waiting for Ollama to start...${NC}"
    for i in {1..10}; do
        if curl -s "http://localhost:11434/api/version" &> /dev/null; then
            echo -e "${GREEN}Ollama started successfully${NC}"
            break
        fi
        
        if [ $i -eq 10 ]; then
            echo -e "${RED}Failed to start Ollama${NC}"
            echo -e "Please start Ollama manually with 'ollama serve'"
            exit 1
        fi
        
        sleep 1
    done
fi

# Get list of available models
echo -e "${YELLOW}Checking available models...${NC}"
MODELS=$(curl -s "http://localhost:11434/api/tags" | grep -o '"name":"[^"]*' | sed 's/"name":"//g')

if [ -z "$MODELS" ]; then
    echo -e "${YELLOW}No models found. Pulling default model (llama3)...${NC}"
    ollama pull llama3
    
    if [ $? -ne 0 ]; then
        echo -e "${RED}Failed to pull model${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}Available models:${NC}"
    echo "$MODELS" | sed 's/^/  - /'
fi

# Get topic from command line or prompt user
TOPIC="$1"
if [ -z "$TOPIC" ]; then
    echo -e "${YELLOW}What topic would you like information about?${NC}"
    read -p "> " TOPIC
    
    if [ -z "$TOPIC" ]; then
        TOPIC="artificial intelligence"
        echo -e "${YELLOW}Using default topic: ${TOPIC}${NC}"
    fi
fi

# Get model from command line or prompt user
MODEL="$2"
if [ -z "$MODEL" ]; then
    # Try to get from .env file
    if [ -f ".env" ] && grep -q "OLLAMA_MODEL" .env; then
        MODEL=$(grep "OLLAMA_MODEL" .env | cut -d= -f2)
    fi
    
    # If still empty, prompt user
    if [ -z "$MODEL" ]; then
        echo -e "${YELLOW}Which model would you like to use? (default: llama3)${NC}"
        read -p "> " MODEL
        
        if [ -z "$MODEL" ]; then
            MODEL="llama3"
        fi
    fi
fi

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}Starting application with:${NC}"
echo -e "${GREEN}- Topic: ${TOPIC}${NC}"
echo -e "${GREEN}- Model: ${MODEL}${NC}"
echo -e "${GREEN}=========================================${NC}"

# Run the application
node src/index.js "$TOPIC" "$MODEL"

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}  Application finished execution  ${NC}"
echo -e "${GREEN}=========================================${NC}"
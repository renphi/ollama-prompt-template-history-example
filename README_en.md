# LLM JSON App

NodeJS application for generating structured JSON data about historical figures using Ollama LLM.

## Features

- Uses Ollama for local LLM execution
- Generates structured JSON data with a defined schema
- Supports historical information like life dates and career milestones

## Requirements

- Node.js
- Ollama with installed model (default: qwen2.5-coder:14b)

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file with the following options:

```
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5-coder:14b
```

## Usage

### Standard Mode

Without parameters (generates info about Albert Einstein):
```bash
npm start
```

With specification of a historical figure:
```bash
npm start "Marie Curie"
npm start "Leonardo da Vinci"
npm start "Winston Churchill"
```

### Streaming Mode

Shows the LLM tokens live during generation:

```bash
npm run stream
```

With specification of a historical figure:
```bash
npm run stream "Marie Curie"
```

The application generates structured information about the specified historical figure in JSON format.
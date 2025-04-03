# Installation Guide

This guide walks you through installing all necessary components to run the LLM JSON App.

## 1. Node.js Installation

### Windows
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version
3. Run the installer and follow the instructions

### macOS
**With Homebrew:**
```bash
brew install node
```

**Without Homebrew:**
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version
3. Run the installer

### Linux
**Ubuntu/Debian:**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Fedora:**
```bash
sudo dnf module install nodejs:lts
```

## 2. Ollama Installation

### Windows
1. Visit [ollama.com](https://ollama.com/download)
2. Download the Windows installer
3. Run the installer and follow the instructions

### macOS
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Linux
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

## 3. Download the LLM Model

After installing Ollama, you need to download the required model. Open a terminal and run:

```bash
ollama pull qwen2.5-coder:14b
```

This downloads the default model for this application. Depending on your internet connection, this process might take several minutes as the model is several GB in size.

## 4. Install the Application

1. Clone or download the repository
2. Navigate to the project directory in your terminal
3. Run the following command to install dependencies:

```bash
npm install
```

## 5. Configuration

Create a `.env` file in the root directory of the project with the following content:

```
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5-coder:14b
```

You can use a different model by changing the value of `OLLAMA_MODEL` and making sure you've downloaded the corresponding model using `ollama pull` beforehand.

## 6. Start the Application

After everything is installed and configured, start the application with:

```bash
npm start
```

Or in streaming mode:

```bash
npm run stream
```

## Troubleshooting

- **Ollama is not running**: Make sure the Ollama service is running. On some systems, you may need to start it manually.
- **Model not found**: Check if you've downloaded the correct model and the name in the `.env` file is correct.
- **Connection issues**: Ensure the Ollama server is accessible at the specified URL.
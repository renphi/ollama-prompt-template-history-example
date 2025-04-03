# LLM JSON App

NodeJS-Anwendung zur Generierung strukturierter JSON-Daten über historische Persönlichkeiten mit Ollama LLM.

## Features

- Nutzt Ollama für lokale LLM-Ausführung
- Generiert strukturierte JSON-Daten mit definiertem Schema
- Unterstützt historische Informationen wie Lebensdaten und Lebensstationen

## Voraussetzungen

- Node.js
- Ollama mit installiertem Modell (Standard: qwen2.5-coder:14b)

## Installation

```bash
npm install
```

## Konfiguration

Erstellen Sie eine `.env`-Datei mit folgenden Optionen:

```
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5-coder:14b
```

## Verwendung

Ohne Parameter (generiert Infos zu Albert Einstein):
```bash
npm start
```

Mit Angabe einer historischen Persönlichkeit:
```bash
npm start "Marie Curie"
npm start "Leonardo da Vinci"
npm start "Konrad Adenauer"
```

Die Anwendung generiert strukturierte Informationen zur angegebenen Persönlichkeit im JSON-Format.
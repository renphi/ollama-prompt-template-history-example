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

Für eine detaillierte Installationsanleitung, siehe [INSTALL.md](INSTALL.md).

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

### Standard-Modus

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

### Streaming-Modus

Zeigt die Token des LLM live während der Generierung an:

```bash
npm run stream
```

Mit Angabe einer historischen Persönlichkeit:
```bash
npm run stream "Marie Curie"
```

Die Anwendung generiert strukturierte Informationen zur angegebenen Persönlichkeit im JSON-Format.

## Lizenz

MIT
# Installationsanleitung

Diese Anleitung führt Sie durch die Installation aller notwendigen Komponenten für die Ausführung der LLM JSON App.

## 1. Node.js Installation

### Windows
1. Besuchen Sie [nodejs.org](https://nodejs.org/)
2. Laden Sie die LTS-Version herunter
3. Führen Sie den Installer aus und folgen Sie den Anweisungen

### macOS
**Mit Homebrew:**
```bash
brew install node
```

**Ohne Homebrew:**
1. Besuchen Sie [nodejs.org](https://nodejs.org/)
2. Laden Sie die LTS-Version herunter
3. Führen Sie den Installer aus

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
1. Besuchen Sie [ollama.com](https://ollama.com/download)
2. Laden Sie den Windows-Installer herunter
3. Führen Sie den Installer aus und folgen Sie den Anweisungen

### macOS
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Linux
```bash
curl -fsSL https://ollama.com/install.sh | sh
```

## 3. LLM-Modell herunterladen

Nach der Installation von Ollama müssen Sie das benötigte Modell herunterladen. Öffnen Sie ein Terminal und führen Sie aus:

```bash
ollama pull qwen2.5-coder:14b
```

Dies lädt das Standard-Modell für diese Anwendung herunter. Je nach Ihrer Internetverbindung kann dieser Vorgang einige Minuten dauern, da das Modell mehrere GB groß ist.

## 4. Anwendung installieren

1. Klonen oder laden Sie das Repository herunter
2. Navigieren Sie im Terminal zum Projektverzeichnis
3. Führen Sie den folgenden Befehl aus, um die Abhängigkeiten zu installieren:

```bash
npm install
```

## 5. Konfiguration

Erstellen Sie eine `.env`-Datei im Hauptverzeichnis des Projekts mit dem folgenden Inhalt:

```
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5-coder:14b
```

Sie können ein anderes Modell verwenden, indem Sie den Wert von `OLLAMA_MODEL` ändern und sicherstellen, dass Sie das entsprechende Modell vorher mit `ollama pull` heruntergeladen haben.

## 6. Anwendung starten

Nachdem alles installiert und konfiguriert ist, starten Sie die Anwendung mit:

```bash
npm start
```

Oder im Streaming-Modus:

```bash
npm run stream
```

## Fehlerbehebung

- **Ollama läuft nicht**: Stellen Sie sicher, dass der Ollama-Service läuft. Auf manchen Systemen müssen Sie ihn manuell starten.
- **Modell nicht gefunden**: Überprüfen Sie, ob Sie das richtige Modell heruntergeladen haben und der Name in der `.env`-Datei korrekt ist.
- **Verbindungsprobleme**: Stellen Sie sicher, dass der Ollama-Server unter der angegebenen URL erreichbar ist.
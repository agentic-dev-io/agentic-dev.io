# Claude-Ollama Docker Sandbox

Custom Docker sandbox template: `docker/sandbox-templates:claude-code` + ENV für Host-Ollama (`host.docker.internal:11434`).

## Schnellstart (wenn Sandbox-VM läuft)

```powershell
# Aus Projektroot
.\docker\claude-ollama\run-sandbox.ps1
```

Oder unter WSL/Linux:

```bash
./docker/claude-ollama/run-sandbox.sh
```

## Bekannte VM-Probleme auf diesem Rechner

- **Windows (PowerShell):** Sandbox-Erstellung schlägt mit **virtiofs EINVAL (22)** fehl. Ursache: Docker-Desktop-VM kann den Workspace-Pfad (`D:\...`) nicht per VirtioFS mounten.
- **WSL:** Sandbox nutzt dort **KVM**; unter WSL2 gibt es **kein KVM** → **Error creating the Kvm object: Error(13)**.

### Was du probieren kannst

1. **Docker Desktop → Settings → Resources → File Sharing**  
   Sicherstellen, dass `D:\` oder `D:\web` freigegeben ist → Docker Desktop neu starten → erneut `run-sandbox.ps1` (von PowerShell aus).

2. **Nur eine Sandbox starten**  
   Task-Manager: alle `docker.openvmm.exe` beenden → Docker Desktop neu starten.

3. **Docker Desktop & WSL aktuell**  
   Neueste Version; ggf. `wsl --update` (Admin-PowerShell).

4. **Ohne Sandbox (läuft bei dir bereits)**  
   Claude Code direkt mit Ollama nutzen (z. B. `settings.coding.json` mit `ANTHROPIC_BASE_URL=http://localhost:11434`) – keine Docker-Sandbox nötig.

## Compose (ohne Sandbox-VM)

```powershell
cd D:\web\agentic-dev.io
docker compose -f docker/claude-ollama/docker-compose.yml run --rm claude
```

**Web-Suche mit Ollama**

- Das **eingebaute** Web-Search-Tool von Claude Code funktioniert nur mit der Anthropic-API, nicht mit Ollama → "Did 0 searches" ist normal.
- **Lösung:** SearXNG per MCP (kein API-Key nötig):
  1. Mit Compose wird automatisch ein SearXNG-Container gestartet (`searxng`).
  2. Claude nutzt das MCP-Tool **web_search** (SearXNG-Metasuche). Einfach z. B. „Such im Web nach Godot 2026“ sagen.
  3. Start: `docker compose -f docker/claude-ollama/docker-compose.yml up -d searxng` (einmalig), danach `run --rm claude` wie gewohnt.

## Image manuell bauen

```powershell
cd D:\web\agentic-dev.io
docker build -t claude-ollama-template:v1 -f docker/claude-ollama/Dockerfile .
```

## Sandbox manuell starten

```powershell
# Windows (oft virtiofs-Fehler, siehe oben)
docker sandbox run --load-local-template -t claude-ollama-template:v1 --name claude-ollama claude .

# Unter WSL/Linux (Pfad anpassen)
docker sandbox run --load-local-template -t claude-ollama-template:v1 --name claude-ollama claude /pfad/zum/workspace
```

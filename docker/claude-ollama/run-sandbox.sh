#!/usr/bin/env bash
# Run from WSL or Linux. Usage: ./run-sandbox.sh [path-to-workspace]
# Default workspace: parent of docker/claude-ollama (repo root).

set -e
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE="${1:-$(cd "$SCRIPT_DIR/../.." && pwd)}"

echo "Workspace: $WORKSPACE"
cd "$WORKSPACE"
docker build -t claude-ollama-template:v1 -f docker/claude-ollama/Dockerfile .
docker sandbox run --load-local-template -t claude-ollama-template:v1 --name claude-ollama claude "$WORKSPACE"

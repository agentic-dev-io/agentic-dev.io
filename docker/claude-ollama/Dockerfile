FROM docker/sandbox-templates:claude-code

ENV \
  ANTHROPIC_AUTH_TOKEN=ollama \
  ANTHROPIC_API_KEY="" \
  ANTHROPIC_BASE_URL=http://host.docker.internal:11434 \
  API_TIMEOUT_MS=3000000 \
  CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1 \
  ANTHROPIC_MODEL=claude-sonet-4-5:latest \
  ANTHROPIC_DEFAULT_SONNET_MODEL=claude-sonet-4-5:latest \
  ANTHROPIC_DEFAULT_OPUS_MODEL=claude-opus-4-5:latest \
  ANTHROPIC_SMALL_FAST_MODEL=claude-haiku-4-5:latest \
  ANTHROPIC_DEFAULT_HAIKU_MODEL=claude-haiku-4-5:latest \
  CLAUDE_CODE_SUBAGENT_MODEL=claude-sonet-4-5:latest

USER root
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update -qq && apt-get install -y -qq ca-certificates curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y -qq nodejs \
    && npm install -g openclaw@latest \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
USER agent

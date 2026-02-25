#!/bin/bash
set -euo pipefail

# Only run in remote (Claude Code on the web) environments
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# Install dependencies for the mikaty-app
cd "$CLAUDE_PROJECT_DIR/mikaty-app"
npm install

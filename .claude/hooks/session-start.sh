#!/bin/bash
# Session start hook: loads service credentials and sets up SSH so Claude
# can reach Coolify, Hetzner, WordPress, and Cloudflare in every session.
#
# Secrets come from environment variables set in the Claude Code web UI
# (Settings → Environment variables). They are never committed to git.

set -euo pipefail

# Only run in the remote (Claude Code on the web) environment.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

log() { echo "[session-start] $*"; }

# ---------------------------------------------------------------------------
# 1. Install the node dependencies so astro build/dev works.
# ---------------------------------------------------------------------------
if [ -f "$CLAUDE_PROJECT_DIR/package.json" ]; then
  log "Installing npm dependencies..."
  (cd "$CLAUDE_PROJECT_DIR" && npm install --no-audit --no-fund --silent) || \
    log "npm install failed (continuing)"
fi

# ---------------------------------------------------------------------------
# 2. Forward service env vars into $CLAUDE_ENV_FILE so they are available
#    to every tool Claude runs in this session (curl, ssh, wp-cli, etc.).
# ---------------------------------------------------------------------------
forward_var() {
  local name="$1"
  if [ -n "${!name:-}" ]; then
    echo "export ${name}=\"${!name}\"" >> "$CLAUDE_ENV_FILE"
    log "  ✓ ${name} available"
  else
    log "  ✗ ${name} not set"
  fi
}

log "Forwarding service credentials..."
forward_var HETZNER_API_TOKEN
forward_var CLOUDFLARE_API_TOKEN
forward_var COOLIFY_API_TOKEN
forward_var COOLIFY_URL
forward_var WP_SITE_URL
forward_var WP_USER
forward_var WP_APP_PASSWORD
forward_var SSH_HOST
forward_var SSH_USER

# ---------------------------------------------------------------------------
# 3. Install the SSH private key (passed in as SSH_PRIVATE_KEY env var) and
#    pre-configure known hosts so `ssh coolify` Just Works.
# ---------------------------------------------------------------------------
if [ -n "${SSH_PRIVATE_KEY:-}" ] && [ -n "${SSH_HOST:-}" ]; then
  log "Installing SSH key for ${SSH_HOST}..."
  mkdir -p "$HOME/.ssh"
  chmod 700 "$HOME/.ssh"

  printf '%s\n' "$SSH_PRIVATE_KEY" > "$HOME/.ssh/id_ed25519"
  chmod 600 "$HOME/.ssh/id_ed25519"

  cat > "$HOME/.ssh/config" <<EOF
Host coolify
  HostName ${SSH_HOST}
  User ${SSH_USER:-root}
  IdentityFile ~/.ssh/id_ed25519
  StrictHostKeyChecking accept-new
  UserKnownHostsFile ~/.ssh/known_hosts
EOF
  chmod 600 "$HOME/.ssh/config"
  log "  ✓ ssh coolify is ready"
else
  log "  ✗ SSH_PRIVATE_KEY or SSH_HOST missing — ssh disabled"
fi

log "Session start hook complete."

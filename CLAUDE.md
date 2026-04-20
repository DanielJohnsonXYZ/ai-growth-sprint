# Claude — AI Growth Sprint

This project is hosted on a Hetzner server running Coolify. Secrets and
service access for future Claude sessions are set up as follows.

## Loading secrets

All API tokens live in `~/.claude-secrets/.env` (chmod 600, not in git).
Before hitting any service, load them into the environment:

```bash
set -a; source ~/.claude-secrets/.env; set +a
```

If a variable below is empty, the user needs to paste the value into
`~/.claude-secrets/.env` first.

## SSH into the Coolify host

- Private key: `~/.ssh/id_claude`
- Config alias: `coolify` (see `~/.ssh/config`)
- Host: `coolify.wescalestartups.com`

```bash
ssh coolify                         # interactive
ssh coolify 'docker ps'             # one-off command
ssh coolify 'cd /data/coolify && docker compose logs --tail=50'
```

Public key (already distributed to the server's `~/.ssh/authorized_keys`):

```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOeHZAzf5JeLf0kHvJhtVfCj+5s2k8nUQbhWCxCTmLuH claude@ai-growth-sprint
```

## Service APIs

### Coolify — `$COOLIFY_URL` (http://coolify.wescalestartups.com)

Auth: `Authorization: Bearer $COOLIFY_API_TOKEN`
Docs: https://coolify.io/docs/api-reference/api/authentication

```bash
# List projects
curl -sS "$COOLIFY_URL/api/v1/projects" \
  -H "Authorization: Bearer $COOLIFY_API_TOKEN" | jq

# List servers / applications / databases
curl -sS "$COOLIFY_URL/api/v1/servers"       -H "Authorization: Bearer $COOLIFY_API_TOKEN"
curl -sS "$COOLIFY_URL/api/v1/applications"  -H "Authorization: Bearer $COOLIFY_API_TOKEN"
curl -sS "$COOLIFY_URL/api/v1/databases"     -H "Authorization: Bearer $COOLIFY_API_TOKEN"

# Trigger deploy for an application by UUID
curl -sS -X POST "$COOLIFY_URL/api/v1/deploy?uuid=<APP_UUID>" \
  -H "Authorization: Bearer $COOLIFY_API_TOKEN"
```

### Hetzner Cloud — `api.hetzner.cloud`

Auth: `Authorization: Bearer $HETZNER_API_TOKEN`
Docs: https://docs.hetzner.cloud/

```bash
# List servers
curl -sS "https://api.hetzner.cloud/v1/servers" \
  -H "Authorization: Bearer $HETZNER_API_TOKEN" | jq '.servers[] | {id,name,status,public_net}'

# Other useful endpoints
# /v1/ssh_keys /v1/volumes /v1/load_balancers /v1/networks /v1/firewalls
```

### Cloudflare — `api.cloudflare.com/client/v4`

Auth: `Authorization: Bearer $CLOUDFLARE_API_TOKEN`
Docs: https://developers.cloudflare.com/api/

```bash
# List zones (domains)
curl -sS "https://api.cloudflare.com/client/v4/zones" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" | jq '.result[] | {id,name,status}'

# List DNS records for a zone
curl -sS "https://api.cloudflare.com/client/v4/zones/<ZONE_ID>/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"

# Verify token is valid
curl -sS "https://api.cloudflare.com/client/v4/user/tokens/verify" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

### GitHub

Claude has GitHub MCP access scoped to `danieljohnsonxyz/ai-growth-sprint`.
Use the `mcp__github__*` tools directly — no token needed for repo reads,
PRs, issues, and CI within that scope. For broader GitHub access, set
`GITHUB_TOKEN` in the env file and use `curl` against `api.github.com`.

## Project basics

- Framework: Astro (see `astro.config.mjs`, `package.json`)
- Host: Netlify (see `netlify.toml`) — the static build; the Hetzner/Coolify
  server is for backend services / ancillary apps
- Dev: `npm install && npm run dev`
- Build: `npm run build`

## Working-branch policy

When instructed by the harness to develop on a specific branch
(e.g. `claude/setup-service-access-*`), stay on that branch and push
there — never to `main` without explicit permission.

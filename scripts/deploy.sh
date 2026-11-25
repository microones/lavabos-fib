#!/usr/bin/env bash
# Desplega Lavabos FIB (web) en aquest servidor, des de /var/www/lavabos-fib:
#   bash scripts/deploy.sh
# Baixa main, instal·la dependències, fa una còpia de la base de dades, aplica migracions,
# compila i reinicia el procés de pm2. Si qualsevol pas falla, s'atura sense reiniciar res.
set -euo pipefail
export PATH="$HOME/.bun/bin:$PATH"
cd "$(dirname "$0")/.."

git pull --ff-only origin main
bun install --frozen-lockfile
bun prisma generate

# Còpia de seguretat abans de migrar (es guarden les 10 últimes a ~/backups/lavabos-fib)
set -a; . ./.env; set +a
mkdir -p "$HOME/backups/lavabos-fib"
pg_dump "$DATABASE_URL" | gzip > "$HOME/backups/lavabos-fib/lavabos_db-$(date +%F-%H%M%S).sql.gz"
ls -1t "$HOME/backups/lavabos-fib"/*.sql.gz | tail -n +11 | xargs -r rm --
bun prisma migrate deploy

bun run build
pm2 restart lavabos-fib --update-env
echo "Desplegat: $(git log --oneline -1)"

#!/usr/bin/env bash
# Publishes deck/ to https://shopshuffle-talk.untame.com without its presenter notes; the copy on disk keeps them.
# Extra arguments go to wrangler (for example --dry-run).
set -euo pipefail
cd "$(dirname "$0")"

WRANGLER_VERSION=4.155.0
OUT=build/deck

rm -rf build
mkdir -p "$OUT"
rsync -a --exclude README.md --exclude .DS_Store deck/ "$OUT/"

# The flow again, minus every slide's notes, so a public URL doesn't carry them
node -e '
const fs = require("fs"), vm = require("vm");
const deck = vm.runInNewContext(fs.readFileSync(process.argv[1], "utf8") + ";DECK");
for (const s of deck.slides) delete s.notes;
process.stdout.write("// Built by deploy.sh from deck/slides.js, without presenter notes\nconst DECK = " + JSON.stringify(deck, null, 2) + ";\n");
' deck/slides.js > "$OUT/slides.js"

npx --yes "wrangler@$WRANGLER_VERSION" deploy "$@"

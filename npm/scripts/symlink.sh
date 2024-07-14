#!/bin/sh

link () {
	pwd=$(pwd)
	addondir="$HOME/Library/Application Support/Local/addons"
	addonpath="$addondir/local-open-in-vscode"

	if [ ! -d "$addondir" ]; then
		echo "⚠️  Cannot locate $addondir, is Local installed?"
		exit 0
	fi

	if [ -d "$addonpath" ]; then
		echo "🛑  $addonpath already exists, refusing to link.\n"
		exit 0
	fi

	ln -sf "$pwd" "$addonpath"

	echo "🔗  Linked to $addonpath"
	echo "⚙️  Building..."

	npm install --prefix "$addonpath"
	npm run build --prefix "$addonpath"

	echo "✅  Done, local-open-in-vscode added to $addonpath"
}

link

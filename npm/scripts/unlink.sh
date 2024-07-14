#!/bin/sh

unlinkit () {
	pwd=$(pwd)
	addondir="$HOME/Library/Application Support/Local/addons"
	addonpath="$addondir/local-tableplus"

	if [ ! -d "$addondir" ]; then
		echo "⚠️  Cannot locate $addondir, is Local installed?"
		exit 0
	fi

	unlink "$addonpath"
	echo "⛓  Unlinked $addonpath"
}

unlinkit



You can use this addon for [Local](https://localwp.com/) 9.x+ on **MacOS ONLY** to open the site's `app/public` folder in a new window in VSCode.

## Install

Download the `.tgz` file from a [release](https://github.com/aubreypwd/localwp-open-in-vscode/releases). Navigate to *Local → Addons → Installed → Install from Disk* and select the `.tgz` file. Enable *Open in VSCode* and restart Local.

## Usage

Open any site, and in the top-right of the window you should see an "Open in VSCode" button. If it is _disabled_, the addon cannot find the location of `/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code` to work with VSCode.

## Development

Clone the repo anywhere you want using:

```
git clone git@github.com:aubreypwd/localwp-open-in-vscode.git
```

Then, cd into the repo and run `npm run link` and it will automatically symlink to your Local addons folder and build the package.

then run `npm run build` or `npm run watch` (requires `watchexec`, install with `brew install watchexec`) to develop.

The `main` branch will be the current development version.

### Packaging for release

Run `npm run dist` to create a package to distribute to release channels on Github.

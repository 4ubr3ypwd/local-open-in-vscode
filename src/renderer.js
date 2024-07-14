import React from 'react';

import OpenInVSCode from './OpenInVSCode.js';

module.exports = function (context) {

	const { hooks } = context;

	hooks.addContent('SiteInfo_Top_TopRight', (site) => <OpenInVSCode key="open-in-vscode" site={site} context={context} />);
};

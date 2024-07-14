import React from 'react';

import { TextButton } from '@getflywheel/local-components';
import is from 'electron-is';

const { exec } = require('child_process');
const fs = require('fs');

/* eslint-disable no-console */

/**
 * Open in VSCode Component
 *
 * @since 1.0.0
 * @author Aubrey Portwood <aubreypwd@icloud.com>
 *
 * @see	rendereer.js Where this is loaded.
 */
export default class VSCode extends React.Component {

	/**
	 * Constructor.
	 *
	 * @author Aubrey Portwood <aubreypwd@icloud.com>
	 * @since 1.0.0
	 * @param  {Object} props The properties from the <VSCode> component from renderer.js.
	 */
	constructor (props) {

		super(props);

		this.disabled = true;

		this.updateState();

		setInterval(() => this.updateState(), 250);
	}

	/**
	 * Update the component state.
	 *
	 * @author Aubrey Portwood <aubrey@webdevstudios.com>
	 * @since  1.0.0
	 * @return {Void} Nothing
	 */
	updateState () {

		this.state = {
			disabled: !is.macOS || !this.hasVSCode(),
		};

		this.setState(this.state);
		this.forceUpdate();
	}

	/**
	 * Get the code executable path.
	 *
	 * @since 1.0.0
	 * @return {string} The path to the code executable.
	 */
	theVSCodeExecutablePath () {
		return '/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code';
	}

	/**
	 * Open VSCode when you click the button.
	 *
	 * @author Aubrey Portwood <aubreypwd@icloud.com>
	 *
	 * @since 1.0.0
	 * @since 1.0.5 Will show red on button if ultimately we couldn't do the right thing on click.
	 *
	 * @return {void}
	 */
	clickOpenVSCode () {
		exec(`"${this.theVSCodeExecutablePath()}" -n "${this.props.site.path}/app/public"`);
	}

	/**
	 * Detect VSCode
	 *
	 * Assumes, like normal, you have it in /Applications/Visual Studio Code.app.
	 *
	 * @author Aubrey Portwood <aubreypwd@icloud.com>
	 * @since 1.0.0
	 * @return {boolean} Test response.
	 */
	hasVSCode () {
		return fs.existsSync(this.theVSCodeExecutablePath());
	}

	/**
	 * Render our [Open VSCode] Button.
	 *
	 * @author Aubrey Portwood <aubreypwd@icloud.com>
	 * @since 1.0.0
	 *
	 * @return {Object} Component.
	 */
	render () {

		return (
			<TextButton
				disabled={this.state.disabled}
				onClick={() => this.clickOpenVSCode()}>
					Open in VSCode

				<svg
					style={ {
						position: 'relative',
						left: '10px',
						top: '-2px',
						filter: this.state.disabled
							? 'grayscale(116) opacity(0.3)'
							: 'none',
					} }
					width="16px"
					height="16px"
					viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
					<path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"/>
				</svg>
			</TextButton>
		);
	}
}

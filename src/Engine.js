import Logger from './utilitys/Logger.js';

class Engine {
	constructor(props) {
		Logger.debug('Engine started with props:', props);
	}

	/**
	 * Renders a frame
	 */
	renderTick() {

	}

	/**
	 * Calculates and iterates the physics
	 */
	physicsTick() {

	}
}

Engine.defaultProps = {
	/**
	 * domElement
	 */
	canvas: null
};

export default Engine;

class Engine {
	constructor(props) {
		console.log('Engine started with props:', props);
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

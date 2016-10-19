import Logger from './utilitys/Logger.js';
import Input from './utilitys/Input.js';

class Engine {
	constructor(props) {
		Logger.debug('Engine started with props:', props);
		this.canvas = props.canvas;
		this.context = this.canvas.getContext('2d');
		this.fps = props.fps;
		this.physicsUpdates = props.physicsUpdates;
		Input.registerEvents();
		this.start();
	}

	start() {
		var self = this;

		var mainloop = function () {
			self.physicsTick();
			self.renderTick();
			Input.tickDone();
		};

		var animFrame = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			null;

		if (animFrame !== null) {
			/**
			 * Is firefox
			 */
			if (typeof InstallTrigger !== 'undefined') {
				var recursiveAnim = function () {
					mainloop();
					animFrame();
				};

				// setup for multiple calls
				window.addEventListener("MozBeforePaint", recursiveAnim, false);

				// start the mainloop
				animFrame();
			} else {
				var recursiveAnim = function () {
					mainloop();
					animFrame(recursiveAnim, self.canvas);
				};

				animFrame(recursiveAnim, self.canvas);
			}
		} else {
			var ONE_FRAME_TIME = 1000.0 / 60.0;
			setInterval(mainloop, ONE_FRAME_TIME);
		}
	}

	/**
	 * Renders a frame
	 */
	renderTick() {
		// Logger.debug('Render tick');

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
	canvas: null,
	fps: 60
};

export default Engine;

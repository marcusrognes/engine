import Logger from './utilitys/Logger.js';
import Input from './utilitys/Input.js';
import Draw from './utilitys/Draw.js';
class Engine {
	constructor(props) {
		Logger.debug('Engine started with props:', props);
		props = Object.assign({}, Engine.defaultProps, props);
		this.canvas = props.canvas;
		this.height = props.height;
		this.width = props.width;
		this.canvas.width = props.width;
		this.canvas.height = props.height;
		this.backgroundColor = props.backgroundColor;
		this.context = this.canvas.getContext('2d');
		this.fps = props.fps;
		this.physicsUpdates = props.physicsUpdates;
		this.gameObjects = {};
		this.currentCamera = null;
		Engine.setCurrentEngine(this);
		this.start();
	}

	start() {
		Input.registerEvents(this.canvas);
		Draw.setContext(this.context);
		Draw.setCanvas(this.canvas);

		var self = this;
		var mainloop = function () {
			self.clearCanvas();
			Input.tickStart();
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

	static addGameObject(gameObject) {
		if (Engine.currentEngine.gameObjects[gameObject.id]) {
			Logger.warning('Warning: gameObject already added to engine instance.');
			return;
		}

		Engine.currentEngine.gameObjects[gameObject.id] = gameObject;

		Engine.currentEngine.gameObjects[gameObject.id].start();
	}

	static removeGameObject(id) {
		delete(Engine.currentEngine.gameObjects[id]);
	}

	static setCurrentEngine(engine) {
		Engine.currentEngine = engine;
	}

	/**
	 * Renders a frame
	 */
	renderTick() {
		// Logger.debug('Render tick');
		for (let key in this.gameObjects) {
			if (!this.gameObjects.hasOwnProperty(key)) {
				continue;
			}

			this.gameObjects[key].render();
		}
	}

	/**
	 * Calculates and iterates the physics
	 */
	physicsTick() {
		for (let key in this.gameObjects) {
			if (!this.gameObjects.hasOwnProperty(key)) {
				continue;
			}

			this.gameObjects[key].update();
		}

		if (Input.keyDown(' ')) {
			Logger.debug(Object.keys(Engine.currentEngine.gameObjects).length);
		}
	}

	clearCanvas() {
		Draw.fill(this.backgroundColor);
	}

	static setActiveCamera(camera) {
		Engine.currentEngine.currentCamera = camera;
		Draw.setCamera(camera);
		Input.setCamera(camera);
	}
}

Engine.currentEngine = null;

Engine.defaultProps = {
	/**
	 * domElement
	 */
	canvas: null,
	backgroundColor: '#7ec0ee',
	width: 600,
	height: 400,
	fps: 60
};

export default Engine;

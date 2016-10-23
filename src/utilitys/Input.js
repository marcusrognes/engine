import Logger from './Logger.js';
import Draw from './Draw.js';
class Input {
	static registerEvents(canvas) {
		var canvasRect = canvas.getBoundingClientRect();
		window.onkeydown = (e)=> {
			if (Input._keyHold[e.key]) {
				return;
			}

			Input._keyHold[e.key] = e.key;
			Input._keyDown[e.key] = e.key;
		};

		window.onkeyup = (e)=> {
			Input._keyUp[e.key] = e.key;
			delete(Input._keyDown[e.key]);
			delete(Input._keyHold[e.key]);
		};

		canvas.addEventListener('mousemove', function (e) {
			Input.screenSpaceMousePosition = {
				x: (e.clientX - canvasRect.left),
				y: (e.clientY - canvasRect.top)
			};
		});

		canvas.addEventListener('mouseup', function (e) {
			Input._mouseUp[e.which] = e.which;
			delete(Input._mouseDown[e.which]);
			delete(Input._mouseHold[e.which]);
		});

		canvas.addEventListener('mousedown', function (e) {
			if (Input._mouseDown[e.which]) {
				return;
			}

			Input._mouseDown[e.which] = e.which;
			Input._mouseHold[e.which] = e.which;
		});
	}

	static keyDown(key) {
		return !!Input._keyDown[key];
	}

	static keyUp(key) {
		return !!Input._keyUp[key];
	}

	static key(key) {
		return !!Input._keyHold[key];
	}

	static getAxis(axis) {

	}

	static mouseButton(which) {
		return !!Input._mouseHold[which];
	}

	static mouseButtonDown(which) {
		return !!Input._mouseDown[which];
	}

	static mouseButtonUp(which) {
		return !!Input._mouseUp[which];
	}

	static tickStart() {
		let renderBounds = Draw.getRenderBounds();

		Input.worldSpaceMousePosition = {
			x: Input.screenSpaceMousePosition.x + renderBounds.left,
			y: Input.screenSpaceMousePosition.y + renderBounds.top
		};
	}

	static tickDone() {
		/**
		 * Clear current down and up
		 * @type {{}}
		 */
		Input._keyDown = {};
		Input._keyUp = {};
		Input._mouseDown = {};
		Input._mouseUp = {};
	}

	static setCamera(camera) {
		Input.activeCamera = camera;
	}
}

Input.screenSpaceMousePosition = {
	x: 0,
	y: 0
};

Input.worldSpaceMousePosition = {
	x: 0,
	y: 0
};

Input._mouseDown = {};
Input._mouseHold = {};
Input._mouseUp = {};

Input._keyDown = {};
Input._keyHold = {};
Input._keyUp = {};

Input.activeCamera = null;

export default Input;

import Logger from './Logger.js';

class Input {
	static registerEvents() {
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
	}

	static updateInputs() {

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

	static tickDone() {
		/**
		 * Clear current down and up
		 * @type {{}}
		 */
		Input._keyDown = {};
		Input._keyUp = {};
	}
}

Input._keyDown = {};
Input._keyHold = {};
Input._keyUp = {};

export default Input;

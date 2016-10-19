import Transform from './Transform.js';
import Engine from '../Engine.js';
import SystemId from './SystemId.js';
import Logger from './Logger.js';

class GameObject {
	constructor() {
		this.id = SystemId.get();
		this.transform = new Transform();
	}

	render() {
		Logger.debug('gameObject: render');
	}

	update() {
		Logger.debug('gameObject: update');
	}

	start() {
		Logger.debug('gameObject: start');
	}

	destroy() {
		Logger.debug('gameObject: start');
		Engine.removeGameObject(this.id);
	}
}

export default GameObject;

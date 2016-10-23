import Transform from './Transform.js';
import Engine from '../Engine.js';
import SystemId from './SystemId.js';
import Logger from './Logger.js';

class GameObject {
	constructor() {
		this.id = SystemId.get();
		this.transform = new Transform();
		this.children = {};
	}

	render() {

	}

	update() {

	}

	_update() {
		this.update();
		if (!this.children) {
			return;
		}

		for (let key in this.children) {
			this.children[key].update();
		}
	}

	_render() {
		this.render();

		if (!this.children) {
			return;
		}

		for (let key in this.children) {
			this.children[key].render();
		}
	}

	start() {
	}

	destroy(timer) {
		if (timer) {
			var self = this;
			setTimeout(()=> {
				self.destroy();
			}, timer);
			return;
		}

		Engine.removeGameObject(this.id);
	}

	addGameObject(gameObject) {
		if (this.children[gameObject.id]) {
			Logger.warning('Warning: gameObject already added to engine instance.');
			return;
		}

		this.children[gameObject.id] = gameObject;

		this.children[gameObject.id].start();
	}

	removeGameObject(id) {
		delete(this.children[id]);
	}
}

export default GameObject;

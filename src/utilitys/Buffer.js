import Draw from './Draw';

class Buffer {
	constructor() {
		this.layers = [];
		this.context = {};
		this.canvas = {};

		this.clear();
	}

	clear() {
		this.layers = [];

		for (let i = 0; i <= Buffer.Layers.Top; i++) {
			this.layers.push([]);
		}
	}

	render() {
		for (let i = 0; i < this.layers.length; i++) {
			this.renderLayer(this.layers[i]);
		}
	}

	renderLayer(layer) {
		for (let i = 0; i < layer.length; i++) {
			this.renderBufferItem(layer[i]);
		}
	}

	/**
	 *
	 * @param item {{action:string, properties:{}}}
	 */
	renderBufferItem(item) {
		switch (item.action) {
			case('image'):
				Draw.Image(item.properties);
				break;
			case('circle'):
				break;
			case('rect'):
				Draw.Rect(item.properties);
				break;
			case('path'):
				break;
		}
	}

	add(items) {
		if (typeof items != 'Array') {
			if (!this.layers[items.layer]) {
				this.layers[items.layer] = [];
			}

			this.layers[items.layer].push(items);
			return;
		}

		for (let i = 0; i < items.length; i++) {
			if (!this.layers[items[i].layer]) {
				this.layers[items[i].layer] = [];
			}

			this.layers[items[i].layer].push(items[i]);
		}
	}
}

Buffer.Layers = {
	Bottom: 0,
	Middle: 5,
	Top: 10
};

export default Buffer;

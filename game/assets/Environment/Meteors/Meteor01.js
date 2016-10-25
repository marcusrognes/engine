import GameObject from "../../../../src/utilitys/GameObject";
import Draw from "../../../../src/utilitys/Draw";
import Meteor01GFX from './Meteor01GFX.png';
import Rect from "../../../../src/primitives/Rect";
import Engine from '../../../../src/Engine.js';

class Meteor01 extends GameObject {
	start() {
		this.image = new Image();
		this.image.src = Meteor01GFX;
		this.rect = new Rect(
			this.transform.position.x,
			this.transform.position.y,
			101,
			84
		);
	}

	render() {
		Engine.GetCurrentBuffer().add({
			layer: 0,
			action: 'image',
			properties: {
				image: this.image,
				x: this.transform.position.x,
				y: this.transform.position.y,
				width: this.rect.width,
				height: this.rect.height,
				rotation: this.transform.rotation + 90
			}
		});
	}

	update() {

	}
}

export default Meteor01;

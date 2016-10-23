import GameObject from "../../../../src/utilitys/GameObject";
import Draw from "../../../../src/utilitys/Draw";
import Meteor01GFX from './Meteor01GFX.png';
import Rect from "../../../../src/primitives/Rect";

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
		Draw.image(this.image, new Rect(
			this.transform.position.x,
			this.transform.position.y,
			this.rect.width,
			this.rect.height,
		), 0);
	}

	update() {

	}
}

export default Meteor01;

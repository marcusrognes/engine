import GameObject from '../../../src/utilitys/GameObject.js';
import Draw from '../../../src/utilitys/Draw.js';
import Input from '../../../src/utilitys/Input.js';
import Vector2 from '../../../src/utilitys/Vector2.js';
import Rect from "../../../src/primitives/Rect";
import CursorGFX from './CursorGFX.png';
import Buffer from '../../../src/utilitys/Buffer';
import Engine from '../../../src/Engine.js';

class Cursor extends GameObject {
	start() {
		this.image = new Image();
		this.image.src = CursorGFX;
		this.rect = new Rect(
			this.transform.position.x,
			this.transform.position.y,
			20,
			20
		);
	}

	render() {
		Engine.GetCurrentBuffer().add({
			layer: 10,
			action: 'image',
			properties: {
				image: this.image,
				x: this.transform.position.x,
				y: this.transform.position.y,
				width: this.rect.width,
				height: this.rect.height,
				rotation: 0
			}
		});
	}

	update() {
		this.transform.position = new Vector2(Input.worldSpaceMousePosition.x, Input.worldSpaceMousePosition.y);
	}
}

export default Cursor;

import GameObject from '../../src/utilitys/GameObject.js';
import Draw from '../../src/utilitys/Draw.js';
import Input from '../../src/utilitys/Input.js';
import Vector2 from '../../src/utilitys/Vector2.js';
import BulletGFX from './BulletGFX.png';
import Rect from "../../src/primitives/Rect";

class Bullet extends GameObject {
	start() {
		this.image = new Image();
		this.speed = this.speed || 12;
		this.image.src = BulletGFX;
		this.rect = new Rect(
			this.transform.position.x,
			this.transform.position.y,
			20,
			20
		);
	}

	render() {
		Draw.image(this.image, new Rect(
			this.transform.position.x,
			this.transform.position.y,
			this.rect.width,
			this.rect.height,
		), this.transform.rotation + 90);
	}

	update() {
		this.transform.move(this.transform.forward().multiply(this.speed));
		this.rect.x = this.transform.position.x;
		this.rect.y = this.transform.position.y;
	}
}

export default Bullet;

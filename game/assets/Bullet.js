import GameObject from '../../src/utilitys/GameObject.js';
import Draw from '../../src/utilitys/Draw.js';
import Input from '../../src/utilitys/Input.js';
import Vector2 from '../../src/utilitys/Vector2.js';
import BulletGFX from './BulletGFX.png';
import Rect from "../../src/primitives/Rect";

class Bullet extends GameObject {
	start() {
		this.image = new Image();
		this.image.src = BulletGFX;
		this.rect = new Rect(this.transform.position.x - 10, this.transform.position.y - 10, 20, 20);
	}

	render() {
		Draw.image(this.image, this.rect);
	}

	update() {
		this.transform.move(new Vector2(0, -10));
		this.rect.x = this.transform.position.x - 10;
		this.rect.y = this.transform.position.y - 10;
	}
}

export default Bullet;

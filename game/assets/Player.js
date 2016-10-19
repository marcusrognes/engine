import GameObject from '../../src/utilitys/GameObject.js';
import Engine from '../../src/Engine.js';
import Draw from '../../src/utilitys/Draw.js';
import Input from '../../src/utilitys/Input.js';
import Vector2 from '../../src/utilitys/Vector2.js';
import PlayerGFX from './PlayerGFX.png';
import Bullet from './Bullet.js';
import Rect from "../../src/primitives/Rect";

class Player extends GameObject {
	start() {
		this.image = new Image();
		this.image.src = PlayerGFX;
		this.rect = new Rect(0, 0, 80, 80);
	}

	render() {
		Draw.image(this.image, this.rect);
	}

	update() {
		if (Input.mouseButton(1)) {
			var bullet = new Bullet();

			bullet.transform.position.x = this.transform.position.x;
			bullet.transform.position.y = this.transform.position.y - 45;

			Engine.addGameObject(bullet);
		}

		this.transform.position = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
		this.rect.x = this.transform.position.x - 40;
		this.rect.y = this.transform.position.y - 40;
	}
}

export default Player;

import GameObject from '../../src/utilitys/GameObject.js';
import Engine from '../../src/Engine.js';
import Draw from '../../src/utilitys/Draw.js';
import Mathf from '../../src/utilitys/Mathf.js';
import Input from '../../src/utilitys/Input.js';
import PlayerGFX from './PlayerGFX.png';
import Bullet from './Bullet.js';
import Rect from "../../src/primitives/Rect";

class Player extends GameObject {
	start() {
		this.image = new Image();
		this.image.src = PlayerGFX;
		this.rect = new Rect(0, 0, 80, 80);
		this.speed = 5;
		this.rotationSpeed = 5;
		this.lastSpeed = 0;
	}

	render() {
		Draw.image(this.image, new Rect(
			this.transform.position.x,
			this.transform.position.y,
			this.rect.width,
			this.rect.height
		), this.transform.rotation + 90);
	}

	spawnBullet(angle) {
		var bullet = new Bullet();

		bullet.transform.position = this.transform.position.clone()
			.add(this.transform.forward().multiply(40));

		bullet.transform.rotate((angle || 0) + this.transform.rotation);

		bullet.destroy(1000);

		Engine.addGameObject(bullet);
	}

	update() {
		if (Input.mouseButton(1)) {
			this.spawnBullet();
		}

		var moveSpeed = 0;

		if (Input.key('a')) {
			this.transform.rotate(-this.rotationSpeed);
		}

		if (Input.key('d')) {
			this.transform.rotate(this.rotationSpeed);
		}

		if (Input.key('w')) {
			moveSpeed += 1
		}

		if (Input.key('s')) {
			moveSpeed -= 1
		}

		this.lastSpeed = Mathf.Lerp(this.lastSpeed, moveSpeed, 0.01);

		this.transform.move(this.transform.forward().multiply(this.lastSpeed * this.speed));
	}
}

export default Player;

import GameObject from '../../../src/utilitys/GameObject.js';
import Engine from '../../../src/Engine.js';
import Draw from '../../../src/utilitys/Draw.js';
import Mathf from '../../../src/utilitys/Mathf.js';
import Input from '../../../src/utilitys/Input.js';
import Vector2 from '../../../src/utilitys/Vector2.js';
import PlayerGFX from './PlayerGFX.png';
import Bullet from './Bullet.js';
import Rect from "../../../src/primitives/Rect";

class Player extends GameObject {
	start() {
		this.image = new Image();
		this.image.src = PlayerGFX;
		this.rect = new Rect(0, 0, 80, 80);
		this.speed = 5;
		this.rotationSpeed = 5;
		this.lastSpeed = 0;
		this.shootCooldown = 300;
		this.lastShot = 0;
		this.camera = this.camera || null;
	}

	render() {
		Engine.GetCurrentBuffer().add({
			layer: 5,
			action: 'image',
			properties: {
				image: this.image,
				x: this.transform.position.x,
				y: this.transform.position.y,
				width: this.rect.width,
				height: this.rect.height,
				rotation: this.transform.rotation + 90
			},
		});
	}

	specialSkill() {
		this.spawnBullet(this.transform.rotation);
		this.spawnBullet(this.transform.rotation - 90);
		this.spawnBullet(this.transform.rotation - 45);
		this.spawnBullet(this.transform.rotation - 144);
		this.spawnBullet(this.transform.rotation + 90);
		this.spawnBullet(this.transform.rotation + 45);
		this.spawnBullet(this.transform.rotation + 144);
		this.spawnBullet(this.transform.rotation + 180);
	}

	shoot() {
		this.spawnBullet(-(this.transform.position.subtract(new Vector2(
			Input.worldSpaceMousePosition.x,
			Input.worldSpaceMousePosition.y
		)).angle() + 90), 10);
	}

	spawnBullet(angle, speed) {
		var bullet = new Bullet();

		bullet.transform.position = this.transform.position.clone()
			.add(Vector2.FromAngle(angle).multiply(40));

		bullet.transform.rotate(angle);

		if (speed) {
			bullet.speed = speed;
		}

		bullet.destroy(2000);

		Engine.addGameObject(bullet);
	}

	update() {
		if (Input.keyDown(' ')) {
			this.specialSkill();
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

		if (Input.mouseButton(1) && this.lastShot < new Date().getTime()) {
			this.shoot();
			this.lastShot = new Date().getTime() + this.shootCooldown;
		}

		this.lastSpeed = Mathf.Lerp(this.lastSpeed, moveSpeed, 0.01);
		this.transform.move(this.transform.forward().multiply(this.lastSpeed * this.speed));

		if (this.camera) {
			this.camera.transform.position = this.transform.position.clone();
		}
	}
}

export default Player;

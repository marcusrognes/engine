import GameObject from "../../../src/utilitys/GameObject";
import Meteor01 from "./Meteors/Meteor01";
import Random from "../../../src/utilitys/Random";
import Vector2 from "../../../src/utilitys/Vector2";

class AsteroidField extends GameObject {
	start() {
		this.totalAmountOfAsteroids = this.totalAmountOfAsteroids || 10;
		this.size = this.size || 400;
		this.seed = this.seed || 0;

		var oldSeed = Random.seed;

		Random.setSeed(this.seed);

		for (let i = 0; i < this.totalAmountOfAsteroids; i++) {
			this.generateAsteroid();
		}

		Random.setSeed(oldSeed);
	}

	generateAsteroid() {
		var asteroid = new Meteor01();

		let xPos = Random.number(
			this.transform.position.x - this.size / 2,
			this.transform.position.x + this.size / 2
		);

		let yPos = Random.number(
			this.transform.position.y - this.size / 2,
			this.transform.position.y + this.size / 2
		);

		asteroid.transform.position = new Vector2(xPos, yPos);
		asteroid.transform.rotation = Random.number(0, 360);
		this.addGameObject(asteroid);
	}

}

export default AsteroidField;
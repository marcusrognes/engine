import Mathf from './Mathf.js';

class Vector2 {
	/**
	 *
	 * @param x {Number}
	 * @param y {Number}
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	/**
	 *
	 * @param amount {number}
	 * @returns {Vector2}
	 */
	multiply(amount) {
		return new Vector2(
			this.x * amount,
			this.y * amount
		);
	}


	/**
	 *
	 * @param amount
	 * @returns {Vector2}
	 */
	divide(amount) {
		return new Vector2(
			this.x / amount,
			this.y / amount
		);
	}

	/**
	 *
	 * @param vector {Vector2}
	 * @returns {Vector2}
	 */
	add(vector) {
		return new Vector2(
			this.x + vector.x,
			this.y + vector.y
		);
	}

	/**
	 *
	 * @param vector {Vector2}
	 * @returns {Vector2}
	 */
	subtract(vector) {
		return new Vector2(
			this.x - vector.x,
			this.y - vector.y
		);
	}

	/**
	 *
	 * @returns {number}
	 */
	magnitude() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

	/**
	 *
	 * @returns {Vector2}
	 */
	normalize() {
		let magnitude = this.magnitude();
		if (magnitude != 0) {
			return this.divide(magnitude);
		}

		return new Vector2(0, 0);
	}

	/**
	 * Linear interpolation
	 * @see https://en.wikipedia.org/wiki/Linear_interpolation
	 *
	 * @param target {Vector2}
	 * @param percentage {Number}
	 * @returns {Vector2}
	 */
	lerp(target, percentage) {
		return new Vector2(
			Mathf.Lerp(this.x, target.x, percentage),
			Mathf.Lerp(this.y, target.y, percentage)
		);
	}

	/**
	 *
	 * @returns {Vector2}
	 */
	clone() {
		return new Vector2(
			this.x,
			this.y
		);
	}

	/**
	 *
	 * @returns {number}
	 */
	angle() {
		return Math.atan2(this.x, this.y) * 180 / Math.PI;
	}

	/**
	 *
	 * @param a {Vector2}
	 * @param b {Vector2}
	 * @param p {Number}
	 * @returns {Vector2}
	 * @constructor
	 */
	static Lerp(a, b, p) {
		return a.lerp(b, p);
	}

	static FromAngle(angle) {
		var radians = (Math.PI / 180) * angle;

		return new Vector2(
			Math.cos(radians),
			Math.sin(radians)
		);
	}
}

/**
 *
 * @type {Vector2}
 */
Vector2.up = new Vector2(0, -1);

/**
 *
 * @type {Vector2}
 */
Vector2.down = new Vector2(0, 1);

/**
 *
 * @type {Vector2}
 */
Vector2.left = new Vector2(-1, 0);

/**
 *
 * @type {Vector2}
 */
Vector2.right = new Vector2(1, 0);

export default Vector2;
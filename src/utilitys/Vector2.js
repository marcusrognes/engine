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
	 * @param a {Vector2}
	 * @param b {Vector2}
	 * @param p {Number}
	 * @returns {Vector2}
	 * @constructor
	 */
	static Lerp(a, b, p) {
		return a.lerp(b, p);
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
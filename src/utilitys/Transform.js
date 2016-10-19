import Vector2 from './Vector2.js';

class Transform {
	/**
	 * @param position {Vector2}
	 * @param rotation {Number}
	 */
	constructor(position, rotation) {
		this.position = position || new Vector2(Transform.defaultProps.position[0], Transform.defaultProps.position[1]);
		this.rotation = rotation || Transform.defaultProps.rotation;
	}

	/**
	 *
	 * @param vector {Vector2}
	 */
	move(vector) {
		this.position.x += vector.x;
		this.position.y += vector.y;
	}

	/**
	 *
	 * @param amount {number}
	 */
	rotate(amount) {
		this.rotation += amount;
	}

	/**
	 *
	 * @returns {Vector2}
	 */
	forward() {
		var radians = (Math.PI / 180) * this.rotation;

		return new Vector2(
			Math.cos(radians),
			Math.sin(radians)
		);
	}

	/**
	 *
	 * @returns {number}
	 */
	angle() {
		return Math.atan2(this.position.x, this.position.y);
	}

	/**
	 *
	 * @returns {Transform}
	 */
	clone() {
		return new Transform(this.position.clone(), this.rotation);
	}
}


Transform.defaultProps = {
	position: [0, 0],
	rotation: 0
};

export default Transform;

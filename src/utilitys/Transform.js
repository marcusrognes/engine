import Vector2 from './Vector2.js';

class Transform {
	/**
	 * @param position {Vector2}
	 * @param rotation {Number}
	 */
	constructor(position, rotation) {
		this.position = position || Transform.defaultProps.position;
		this.rotation = rotation || Transform.defaultProps.rotation;
	}

	move(vector) {
		this.position.x += vector.x;
		this.position.y += vector.y;
	}

	rotate(amount) {
		this.rotation += amount;
	}
}


Transform.defaultProps = {
	position: new Vector2(0, 0),
	rotation: 0
};

export default Transform;

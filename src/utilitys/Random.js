class Random {
	static random() {
		var x = Math.sin(Random.seed++) * 10000;

		return x - Math.floor(x);
	}

	/**
	 *
	 * @param string {string}
	 * @returns {number}
	 */
	static hash(string) {
		var hash = 0, i, chr, len;

		if (string.length === 0) {
			return hash;
		}

		for (i = 0, len = string.length; i < len; i++) {
			chr = string.charCodeAt(i);
			hash = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}

		return hash;
	}

	static number(min, max) {
		return Random.random() * (max - min) + min;
	}

	static int(min, max) {
		return Math.floor(Random.random() * (max - min + 1)) + min;
	}

	static setSeed(seed) {
		if (isNaN(seed)) {
			seed = Random.hash(seed);
		}

		Random.seed = seed;
	}
}

Random.seed = 0;

export default Random;

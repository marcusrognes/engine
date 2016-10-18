class Logger {
	static log(message, properties) {
		let props = Object.assign({}, properties, Logger.defaultLogProps);

		if (props.logLevel > Logger.currentReportLevel) {
			return;
		}

		switch (props.logLevel) {
			case 5:
			case 4:
			case 3:
				console.log.apply(window, message);
				break;
			case 2:
			case 1:
				console.error.apply(window, message);
				break;
		}
	}

	static debug(message) {
		Logger.log(message, {
			logLevel: 5
		});
	}

	static info(message) {
		Logger.log(message, {
			logLevel: 4
		});
	}

	static warning(message) {
		Logger.log(message, {
			logLevel: 3
		});
	}

	static error(message) {
		Logger.log(message, {
			logLevel: 2
		});
	}

	static fatal(message) {
		Logger.log(message, {
			logLevel: 1
		});
	}
}

Logger.defaultLogProps = {
	/**
	 * Log level wil only log what is currently below the given level.
	 * 5: Debug
	 * 4: Info
	 * 3: Warning
	 * 2: Error
	 * 1: Fatal
	 */
	logLevel: 5,
};

Logger.currentReportLevel = 5;

export default Logger;

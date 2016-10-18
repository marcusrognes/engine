class Logger {
	static log(args, properties) {
		let props = Object.assign({}, properties, Logger.defaultLogProps);

		if (props.logLevel > Logger.currentReportLevel) {
			return;
		}

		switch (props.logLevel) {
			case Logger.logLevels.debug:
			case Logger.logLevels.info:
			case Logger.logLevels.warning:
				console.log.apply(window, args);
				break;
			case Logger.logLevels.error:
			case Logger.logLevels.fatal:
				console.error.apply(window, args);
				break;
		}
	}

	static debug() {
		Logger.log(arguments, {
			logLevel: Logger.logLevels.debug
		});
	}

	static info() {
		Logger.log(arguments, {
			logLevel: Logger.logLevels.info
		});
	}

	static warning() {
		Logger.log(arguments, {
			logLevel: Logger.logLevels.warning
		});
	}

	static error() {
		Logger.log(arguments, {
			logLevel: Logger.logLevels.error
		});
	}

	static fatal() {
		Logger.log(arguments, {
			logLevel: Logger.logLevels.fatal
		});
	}
}

Logger.logLevels = {
	debug: 5,
	info: 4,
	warning: 3,
	error: 2,
	fatal: 1
};

Logger.defaultLogProps = {
	/**
	 * Log level wil only log what is currently below the given level.
	 * 5: Debug
	 * 4: Info
	 * 3: Warning
	 * 2: Error
	 * 1: Fatal
	 */
	logLevel: Logger.logLevels.debug,
};

Logger.currentReportLevel = Logger.logLevels.debug;

export default Logger;

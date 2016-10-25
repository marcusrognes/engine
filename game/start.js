import Logger from '../src/utilitys/Logger.js';
import Engine from '../src/Engine.js';
import Player from './assets/Player/Player.js';
import Cursor from './assets/Player/Cursor.js';
import Camera from "../src/utilitys/Camera";
import AsteroidField from "./assets/Environment/AsteroidField";

Logger.currentReportLevel = Logger.logLevels.debug;

var game = new Engine({
	width: window.innerWidth,
	height: window.innerHeight,
	backgroundColor: 'black',
	canvas: document.getElementById('engine')
});

var player = new Player();
var cursor = new Cursor();
var camera = new Camera();

var asteroidBelt = new AsteroidField();

asteroidBelt.size = 8000;
asteroidBelt.totalAmountOfAsteroids = 1000;
asteroidBelt.seed = 2;

player.camera = camera;

Engine.addGameObject(asteroidBelt);
Engine.addGameObject(player);
Engine.addGameObject(cursor);
Engine.addGameObject(camera);
Engine.setActiveCamera(camera);

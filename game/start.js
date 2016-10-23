import Logger from '../src/utilitys/Logger.js';
import Engine from '../src/Engine.js';
import Player from './assets/Player/Player.js';
import Cursor from './assets/Player/Cursor.js';
import Vector2 from "../src/utilitys/Vector2";
import Camera from "../src/utilitys/Camera";
import Meteor01 from "./assets/Environment/Meteors/Meteor01";

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

var meteor = new Meteor01();
meteor.transform.position = new Vector2(150, 150);
var meteor2 = new Meteor01();
meteor2.transform.position = new Vector2(180, 120);


player.camera = camera;

Engine.addGameObject(meteor2);
Engine.addGameObject(meteor);
Engine.addGameObject(player);
Engine.addGameObject(cursor);
Engine.addGameObject(camera);
Engine.setActiveCamera(camera);

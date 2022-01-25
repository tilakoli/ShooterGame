import Player from "./Player.js";
import BulletController from "./bulletController.js";
//  get the canvas element
const canvas = document.getElementById("space");
// The getContext() function returns the drawing context - which is an object that has all the drawing properties
// and functions you use to draw on the canvas.The getContext() function is the function that  you use to
// get access to the canvas tags 2D drawing functions.
const ctx = canvas.getContext("2d");

// setting up the dimensions of the canvas
canvas.width = 1340;
canvas.height = 675;

// passing in the canvas to the constructor of the bulletcontroller class
const bulletController = new BulletController(canvas);
const player = new Player(canvas.width / 2.2, canvas.height / 1.3);

function gameloop() {
  setCommonStyle();
  // clear the canvas and customizing the canvas
  ctx.fillStyle = "black";
  // The fillRect() is a method of the 2d drawing context object. The fillRect() method allows you
  // to draw a filled rectangle at(x, y) position with a specified with and height on a canvas.
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  bulletController.draw(ctx);
  // using the draw method and player instance to draw the player with the provided properties
  player.draw(ctx);
}

function setCommonStyle() {
  ctx.shadowColor = "#d35";
  ctx.shadowBlur = 20;
  // line join is like border radius
  ctx.lineJoin = "bevel";
  ctx.lineWidth = 5;
}

setInterval(gameloop, 1000 / 60);

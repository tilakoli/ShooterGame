// all of out properties for the player will be inside this class
export default class Player {
  // and with the help of the constructor we can create the player
  constructor(x, y, bulletController) {
    // setting up the players properties and position
    this.x = x;
    this.y = y;
    this.bulletController = bulletController;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
    // adding keyboard listeners to move the player around with arrow keys
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }
  // The draw() function is used to executes the code inside the
  // block until the program is stopped or noLoop() is called.I
  draw(ctx) {
    this.move();
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    // The strokeRect() method draws a stroked rectangle whose
    // starting point is at(x, y) and whose size is specified
    // by width and height.
    ctx.strokeStyle = "red";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    // calling the function to handle the shooting
    // when the space bar is pressed
    this.shoot();
  }

  shoot() {
    if (this.shootPressed) {
      // console.log("space bar pressed");
      // setting up the bullet
      const speed = 5;
      const delay = 7;
      const damage = 1;
      // the bullet will shoot from the middle of the player(xaxis)
      const bulletX = this.x + this.width / 2;
      // the bullet will from the top of the player (yaxis)
      const bulletY = this.y;
      this.bulletController.shoot(bulletX, bulletY, speed, delay, damage);
    }
  }

  move() {
    // if any of the arrow keys are pressed, the player will move iin the
    // direction of the arrow keys with the below defined speeds
    if (this.downPressed) {
      this.y += this.speed;
    }
    if (this.upPressed) {
      this.y -= this.speed;
    }
    if (this.leftPressed) {
      this.x -= this.speed;
    }
    if (this.rightPressed) {
      this.x += this.speed;
    }
  }

  // defining the functions for arrow keys eventlisteners
  keydown = (e) => {
    if (e.code === "ArrowUp") {
      this.upPressed = true;
    }
    if (e.code === "ArrowDown") {
      this.downPressed = true;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = true;
    }
    if (e.code === "ArrowRight") {
      this.rightPressed = true;
    }
    // setting up the event listener for space bar to
    // shoot when the space bar is not pressed.
    if (e.code === "Space") {
      this.shootPressed = true;
    }
  };
  keyup = (e) => {
    if (e.code === "ArrowUp") {
      this.upPressed = false;
    }
    if (e.code === "ArrowDown") {
      this.downPressed = false;
    }
    if (e.code === "ArrowLeft") {
      this.leftPressed = false;
    }
    if (e.code === "ArrowRight") {
      this.rightPressed = false;
    }
    // setting up the event listerner for space bar to
    // shoot when the space bar is pressed.
    if (e.code === "Space") {
      this.shootPressed = false;
    }
  };
}

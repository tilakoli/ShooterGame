export default class Bullet {
  constructor(x, y, speed, damage) {
    // setting up the properties for the buller class
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.damage = damage;
    this.width = 5;
    this.height = 15;
    this.color = "red";
  }
  // drawing the bullet using the above properties
  draw(ctx) {
    ctx.fillStyle = this.color;
    //   bullets will move up with the speed of speed
    this.y -= this.speed;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

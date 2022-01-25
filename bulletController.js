import Bullet from "./Bullet.js";

export default class BulletController {
  bullets = [];
  timerTillNextBullet = 0; // this is the time in milliseconds until the next bullet can be fired
  constructor(canvas) {
    this.canvas = canvas;
  }

  // here the shoot method all the properties of the bullets
  shoot(x, y, speed, delay, damage) {
    if (this.timerTillNextBullet <= 0) {
      this.bullets.push(new Bullet(x, y, speed, delay, damage));
      this.timerTillNextBullet = delay;
    }
    this.timerTillNextBullet--;
  }
  draw(ctx) {
    this.bullets.forEach((bullet) => bullet.draw(ctx));
  }
}

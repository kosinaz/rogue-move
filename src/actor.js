/**
 * Represent an interactive character of the game.
 *
 * @export
 * @class Actor
 * @extends {Phaser.GameObject.Sprite}
 */
export default class Actor extends Phaser.GameObjects.Sprite {
  /**
   *Creates an instance of Actor.
   * @param {Phaser.Scene} scene
   * @param {number} x
   * @param {number} y
   * @param {string} texture
   * @param {string} frame
   * @param {number} speed
   * @memberof Actor
   */
  constructor(scene, x, y, texture, frame, speed) {
    super(scene, x * 32 + 16, y * 32 + 16, texture, frame);
    scene.children.add(this);
    this.tileX = x;
    this.tileY = y;
    this.speed = speed;
    this.orders = [];
    this.timeline = scene.tweens.createTimeline();
  }

  /**
   * Issue an order to the Actor.
   *
   * @param {string} name
   * @param {number} x
   * @param {number} y
   * @memberof Actor
   */
  addOrder(name, x, y) {
    let xi = this.tileX;
    let yi = this.tileY;
    while (xi !== x || yi !== y) {
      if (xi > x) {
        xi -= 1;
      } else if (xi < x) {
        xi += 1;
      }
      if (yi > y) {
        yi -= 1;
      } else if (yi < y) {
        yi += 1;
      }
      this.orders.push({name: name, x: xi, y: yi});
    }
    console.log(this.orders);
  }

  /**
   * Executes the next order and removes it from the list of orders.
   *
   * @memberof Actor
   */
  act() {
    if (!this.orders.length) {
      return;
    }
    const order = this.orders.shift();
    console.log(order);
    if (order.name === 'move') {
      this.timeline.add({
        targets: this,
        x: order.x * 32 + 16,
        y: order.y * 32 + 16,
        duration: 1000 / this.speed,
      });
    }
  }
}

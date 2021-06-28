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
   * @memberof Actor
   */
  constructor(scene, x, y, texture, frame) {
    super(scene, x * 32 + 16, y * 32 + 16, texture, frame);
    scene.children.add(this);
  }

  /**
   * Creates the content of the Actor.
   *
   * @memberof Actor
   */
  create() {

  }
}

/**
 * Represent the load screen of the game.
 *
 * @export
 * @class LoadScene
 * @extends {Phaser.Scene}
 */
export default class LoadScene extends Phaser.Scene {
  /**
   * Creates an instance of LoadScene.
   * @memberof LoadScene
   */
  constructor() {
    super('LoadScene');
  }

  /**
   * Loads all the assets.
   *
   * @memberof LoadScene
   */
  preload() {
    this.load.atlas('sprites', 'image/sprites.png', 'image/sprites.json');
  }

  /**
   * Starts the Title scene.
   *
   * @memberof LoadScene
   */
  create() {
    this.scene.start('WorldScene');
  }
}

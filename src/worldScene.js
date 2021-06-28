/**
 * Represent the home screen of the game.
 *
 * @export
 * @class WorldScene
 * @extends {Phaser.Scene}
 */
export default class WorldScene extends Phaser.Scene {
  /**
   * Creates an instance of WorldScene.
   * @memberof WorldScene
   */
  constructor() {
    super('WorldScene');
  }

  /**
   * Creates the content of the WorldScene.
   *
   * @memberof WorldScene
   */
  create() {
    this.add.sprite(48, 48, 'sprites', 'a');
  }
}

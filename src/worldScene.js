import Actor from './actor.js';

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
    const a = new Actor(this, 2, 2, 'sprites', 'a', 6);
    a.addOrder('move', 13, 5);
    const b = new Actor(this, 12, 12, 'sprites', 'b', 4);
    b.addOrder('move', 7, 3);
    a.act();
    b.act();
    a.act();
    b.act();
    a.act();
    a.timeline.play();
    b.timeline.play();
  }
}

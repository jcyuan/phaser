/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var Shader = require('./Shader');
var GameObjectFactory = require('../GameObjectFactory');

/**
 * Creates a new Shader Game Object and adds it to the Scene.
 *
 * Note: This method will only be available if the Shader Game Object and WebGL support have been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectFactory#shader
 * @webglOnly
 * @since 3.17.0
 *
 * @param {string} key - The key of the shader to use from the shader cache.
 * @param {number} [x=0] - The horizontal position of this Game Object in the world.
 * @param {number} [y=0] - The vertical position of this Game Object in the world.
 * @param {number} [width=128] - The width of the Game Object.
 * @param {number} [height=128] - The height of the Game Object.
 *
 * @return {Phaser.GameObjects.Shader} The Game Object that was created.
 */
if (typeof WEBGL_RENDERER)
{
    GameObjectFactory.register('shader', function (key, x, y, width, height, textures)
    {
        return this.displayList.add(new Shader(this.scene, key, x, y, width, height, textures));
    });
}

/**
# Impact JS Scene Manager

This plugins extends the native Array object with non-enumerable utility methods

__Installation__

As a submodule, from the git command line:

```
git submodule add https://github.com/Talesay/impact-plugin-scene-manager.git lib/plugins/scene
``` 

Then require this module:

```
'plugins.scene.manager'
``` 

__JSLint Flags__
*/
/*global ig*/
ig.module(
    'plugins.scene.manager'
).requires(
    'impact.impact'
).defines(function () {
    'use strict';
    ig.SceneManager = ig.Class.extend({
        staticInstantiate: function (ignore) {
            this.alias('scene');
            return ig.SceneManager.instance || null;
        },
        alias: function (name) {
            Object.defineProperty(ig, name, {
                value: this
            });
        },
        init: function () {
            ig.SceneManager.instance = this;
        },
        set: function (scene, data) {
            var key;
            for (key in data) {
                if (data.hasOwnProperty(key)) {
                    scene.prototype[key] = data[key];
                }
            }
            ig.system.setGame(scene);
        }
    });
    return new ig.SceneManager();
});
/**
 * # The MIT License (MIT)
 * ## Copyright (c) 2015 Talesay
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
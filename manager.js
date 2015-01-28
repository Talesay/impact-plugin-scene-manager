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
        load: function (scene, data) {
            /*Experimental: trying to pass data between two instances of ig.Game*/
            ig.merge(scene, data);
            ig.system.setGame(scene);
        }
    });
    return new ig.SceneManager();
});
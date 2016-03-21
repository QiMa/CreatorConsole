/******************************************************************************
 * This demo show you how to use CreatorConsole with your code.
 * 1.You mush put the 'Console.prefab' in your scene, and it mush be the top one.
 * 2.Just use 'cc.log' like: cc.log('Hello World');
 * 3.You can use command in the cnosole, like 'cl' to clean the screan.
 * 4.Wo TMD ying wen zhe me lan, ni shi zen me kan de dong de?
 * ****************************************************************************/

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // use this for initialization
    onLoad: function () {
        cc.log('hello world');
    },

    update: function (dt) {
        //cc.log(dt);
    },
});

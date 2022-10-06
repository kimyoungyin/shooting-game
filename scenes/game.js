var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false,
        },
    },
    scene: [FirstScene, SecondScene],
    audio: {
        disableWebAudio: true,
    },
};

var platforms, player, stars, scoreText, bombs, gameOver, cursors;
var score = 0;
var game = new Phaser.Game(config);

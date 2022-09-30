var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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

var platforms, player, stars, scoreText, bombs, gameOver, cursors, ufos, timedEvent, spawnTimes;
var score = 0;
var game = new Phaser.Game(config);


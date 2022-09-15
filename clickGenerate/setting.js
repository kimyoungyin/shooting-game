var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#a5eff5',
  physics: {
    default: 'arcade',
    matter: {
      debug: true,
      gravity: {y : 0},
    }
  },
  scene: [main]
};

var game = new Phaser.Game(config);
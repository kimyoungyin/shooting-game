class main extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
  }

  preload() {
    this.load.image('charactor', 'img/charactor.png');
    this.load.image('button', 'img/button.png');
    this.load.image('tower', 'img/tower.png');
    this.load.image('platform', 'img/platform.png');
  }

  create() {
    this.add.image(200, 450, 'platform');
    this.add.image(600, 450, 'platform');

    const clickButton = this.add.image(100, 520, 'button')
      .setInteractive()
      .on('pointerdown', () => this.generateCrt());
  }

  generateCrt() {
    this.add.image(100, 354, 'charactor');
  }
  
  update() {
    
  }
}
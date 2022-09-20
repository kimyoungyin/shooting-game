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

    this.cursors = this.input.keyboard.createCursorKeys();
    this.nowX = 100;

    const sp = this.add.image(100, 520, 'button').setInteractive();
    sp.on('pointerdown', function () {
      this.cursorOn = true;
      this.add.sprite(this.nowX, 390, 'charactor');
      this.nowX += 10;
    }, this);
  }

  update() {
    
  }
}
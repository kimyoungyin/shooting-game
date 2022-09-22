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
    this.hamster = [];
    this.ham = {};
    this.cursorOn = false;
    this.cnt = 0;

    const sp = this.add.image(100, 520, 'button').setInteractive();
    sp.on('pointerdown', function () {
      this.cursorOn = true;

      this.ham = this.add.sprite(this.nowX, 390, 'charactor');
      this.ham.x = this.nowX;
      this.ham.y = 390;

      this.hamster.push(this.ham);
      this.cnt++;
      console.log(this.hamster);

      this.nowX = 100;//생성 좌표 100으로 초기화
      //this.ham.x = this.nowX;
    }, this);
  }

  update() {
    if (this.cursorOn === true && this.nowX <= 500) {
      this.add.sprite(this.hamster[this.cnt - 1].x++, 390, 'charactor');
    }
  }
}
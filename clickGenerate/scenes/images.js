class images extends Phaser.Scene {
  constructor() {
    super({ key: "images" });
  }
  
  preload() {
    this.load.image('charactor', 'img/charactor.png');
    this.load.image('button', 'img/button.png');
    this.load.image('tower', 'img/tower.png');
    this.load.image('platform', 'img/platform.png');
    this.load.image('king', 'img/king.png');
  }

  create() {
    this.add.image(200, 450, 'platform');
    this.add.image(600, 450, 'platform');

    this.cursors = this.input.keyboard.createCursorKeys();
    this.nowX = 100;
    this.hamsters = [];
    this.ham = {};
    this.cursorOn = false;

    const sp = this.add.image(100, 520, 'button').setInteractive();
    sp.on('pointerdown', () => {
      this.cursorOn = true;

      this.ham = this.add.sprite(this.nowX, 390, 'charactor');

      this.hamsters.push(this.ham);
      this.nowX = 100;//생성 좌표 100으로 초기화
    });

  
    console.log("여기까지 옴");
    this.scene.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNumbers('king', {
        prefix: 'attack-',
        end: 2,
      }),
      frameRate: 8,
    });
  }

  update() {
    if (this.cursorOn === true && this.hamsters[this.hamsters.length - 1].x <= 500) {
      this.hamsters.forEach(element => {
        if (element.x < 500) {
          element.x++;
        }
      });
    }
  }
}
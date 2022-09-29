class overlap extends Phaser.Scene {
  constructor() {
    super({ key: "overlap" });
  }
  
  preload() {
    this.load.image('charactor', 'img/charactor.png');
    this.load.image('button', 'img/button.png');
    this.load.image('tower', 'img/tower.png');
    this.load.image('platform', 'img/platform.png');
    this.load.spritesheet('mummy', 'img/mummy.png', {
      frameWidth: 37, frameHeight: 45
    });


  }

  create() {
    this.add.image(200, 450, 'platform');
    this.add.image(600, 450, 'platform');

    this.cursors = this.input.keyboard.createCursorKeys();
    this.nowX = 550;
    this.hamsters = [];
    this.hamsters2;
    this.ham = {};
    this.cursorOn = false;
    this.player;
    this.enemy;
    this.attackEnemy;
    this.attacking = false; //공격 여부

    
    //버튼 누르면 햄스터 이동
    const sp = this.add.image(100, 520, 'button').setInteractive();
    sp.on('pointerdown', () => {
      this.cursorOn = true;

      this.ham = this.add.sprite(this.nowX, 390, 'charactor');

      this.hamsters.push(this.ham);
      this.nowX = 550;//생성 좌표 550으로 초기화
    });    
    

    this.knightAnimation = this.anims.create({
      key: 'attack',
      frames: this.anims.generateFrameNames('mummy'),
      frameRate: 16
    });

    this.player = this.add.sprite(100, 400, 'mummy').setScale(3);

    this.tweens.add({
      targets: player,
      x: 750,
      duration: 8800,
      ease: 'Linear'
    });
    
  };

  update() {
    if (this.cursorOn === true && this.hamsters[this.hamsters.length - 1].x > 100) {
      this.hamsters.forEach(element => {
        if (element.x > 100 || this.attacking === false) {
          element.x--;
        }
      });
    }
    
    if (this.cursorOn === true) {
      this.player.x++;
    }

    this.hamsters.forEach(element => {
      
      //미라 사정거리 내에 햄스터가 들어오면 attacking true
      if (this.player.x + 90 > element.x) {
        this.attacking = true;
        this.cursorOn = false;//만났으면 false
      }
    
      if (this.attacking === true) 
      {
        this.player.anims.play('attack', true);
      }
    });
  };
}

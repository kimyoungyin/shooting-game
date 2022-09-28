class overlap extends Phaser.Scene {
  constructor() {
    super({ key: "overlap" });
  }
  
  preload() {
    this.load.image('charactor', 'img/charactor.png');
    this.load.image('button', 'img/button.png');
    this.load.image('tower', 'img/tower.png');
    this.load.image('platform', 'img/platform.png');
    this.load.image('king', 'img/spriteSheet/Idle (1).png');
    this.load.image('sword', 'img/sword.png');
    this.load.image('dragon', 'img/dragon.png');
    this.load.spritesheet('knight', 'img/knight.png', {
      frameWidth: 37, frameHeight: 45
    });


  }

  create() {
    this.add.image(200, 450, 'platform');
    this.add.image(600, 450, 'platform');

    this.cursors = this.input.keyboard.createCursorKeys();
    this.nowX = 550;
    this.hamsters = [];
    this.ham = {};
    this.cursorOn = false;
    this.player;
    this.enemy;
    this.attackEnemy;
    this.attacking = false; //공격 여부
    this.isOverlap = false;


    console.log(this.attacking);
    //버튼 누르면 햄스터 이동
    const sp = this.add.image(100, 520, 'button').setInteractive();
    sp.on('pointerdown', () => {
      this.cursorOn = true;

      this.ham = this.add.sprite(this.nowX, 390, 'charactor');

      this.hamsters.push(this.ham);
      this.nowX = 550;//생성 좌표 100으로 초기화
    });


    this.knightAnimation = this.anims.create({
      key: 'attack',
      //frames: this.anims.generateFrameNames('knight', { prefix: 'guard_start/frame', start: 0, end: 5 }),
      frames: this.anims.generateFrameNumbers('knight'),
      frameRate: 16
    });

    this.player = this.add.sprite(100, 400, 'knight').setScale(3);

    this.tweens.add({
      targets: player,
      x: 750,
      duration: 8800,
      ease: 'Linear'
    });

    //this.player.play({ key: 'attack', repeat: 10 });

    
  };

  Play() {
    this.player.play({ key: 'attack', repeat: 10 });
  }

  update() {
    if (this.cursorOn === true && this.hamsters[this.hamsters.length - 1].x > 100) {
      this.hamsters.forEach(element => {
        if (element.x > 100 ) {
          element.x -= 5;
        }
      });
    }

    this.hamsters.forEach(ham => {
      this.isOverlap = this.physics.add.overlap(this.player, ham, this.Play);
      console.log(ham);
    });
    //겹쳤을 때
  };
}

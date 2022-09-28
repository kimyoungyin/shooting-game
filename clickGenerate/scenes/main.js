class main extends Phaser.Scene {
  constructor() {
    super({ key: "main" });
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

    console.log(this.attacking);
    if (this.attacking == true) {
      console.log("hi!");
      this.player.play({ key: 'attack', repeat: 7 });
    }

    this.player.play({ key: 'attack', repeat: 10 });
    this.tweens.add({
      targets: player,
      x: 750,
      duration: 8800,
      ease: 'Linear'
    });
    
  };

  attackEnemy() {
    //공격하고 있다면
    //console.log("hi!");

    this.knightAnimation = scene.anims.create({
      key: 'attack',
      //frames: this.anims.generateFrameNames('knight', { prefix: 'guard_start/frame', start: 0, end: 5 }),
      frames: scene.anims.generateFrameNumbers('knight'),
      frameRate: 16
    });

    this.player.play({ key: 'attack', repeat: 10 });

    this.tweens.add({
      targets: player,
      x: 750,
      duration: 8800,
      ease: 'Linear'
    });
  };

  kingAttackEneter() {
    this.king.play('attack');
    this.king.setVelocityX(0);

    this.king.once(Phaser.Animations.Events.ANIMATION_COMPLETE_KEY)
  }

  update() {
    if (this.cursorOn === true && this.hamsters[this.hamsters.length - 1].x > 100) {
      this.hamsters.forEach(element => {
        if (element.x > 100 || this.attacking === false) {
          element.x -= 5;
        }
      });
    }

    this.hamsters.forEach(element => {
      
      //[player과 element의 겹침이 발생하면 attackEnemy 함수 실행
      if (this.player.x + 90 >= element.x) {
        this.attacking = true;
        this.player.anims.play({ key: 'attack', repeat: 10 });
        //console.log(this.attacking);
      }
    });

    if (this.attacking === true) {
      //console.log("yes"); 실행됨
      this.attackEnemy;
    }
  };
}

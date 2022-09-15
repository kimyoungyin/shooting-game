class SecondScene extends Phaser.Scene {
    constructor() {
        super("secondeScene");
    }

    preload() {
        // 이미지
        this.load.image("sky", "/assets/sky.png");
        this.load.image("ground", "/assets/platform.png");
        this.load.image("star", "/assets/star.png");
        this.load.image("bomb", "/assets/bomb.png");
        this.load.spritesheet("dude", "/assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
    }

    create() {
        // 배경 이미지
        this.add.image(400, 300, "sky");
        // 점수 score
        scoreText = this.add.text(16, 16, "score: 0", {
            fontSize: "32px",
            fill: "#000",
        });

        // platforms
        platforms = this.physics.add.staticGroup();

        platforms.create(400, 568, "ground").setScale(2).refreshBody();

        platforms.create(600, 400, "ground");
        platforms.create(50, 250, "ground");
        platforms.create(750, 220, "ground");

        // player
        player = this.physics.add.sprite(100, 450, "dude");

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        // player.body.setGravityY(300) // 기본 중력값

        this.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 0,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1,
        });

        this.anims.create({
            key: "turn",
            frames: [{ key: "dude", frame: 4 }],
            frameRate: 20,
        });

        this.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("dude", {
                start: 5,
                end: 8,
            }),
            frameRate: 10,
            repeat: -1,
        });

        // platform과 player 간의 충돌하도록
        this.physics.add.collider(player, platforms);

        // cursor 객체 생성 left, right, up, down 프로퍼티 가짐
        cursors = this.input.keyboard.createCursorKeys();

        // star
        stars = this.physics.add.group({
            key: "star",
            repeat: 11, // 11+1 = 12개 별
            setXY: { x: 12, y: 0, stepX: 70 }, // 각 시작 좌표
        });
        // 장애물: bomb
        bombs = this.physics.add.group();

        stars.children.iterate(function (child) {
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });

        // 별과 플랫폼은 충돌해야(add 후 작성해야 함)
        this.physics.add.collider(stars, platforms);

        // 겹칠 때를 알려주기: 겹치는 대상1, 대상2, 이벤트핸들러, ?, ?
        this.physics.add.overlap(player, stars, collectStar, null, this);

        // 별 먹기: star와 player가 겹치는 이벤트 발생 시
        function collectStar(player, star) {
            // 별 body(게임)에서 제거
            star.disableBody(true, true);

            score += 10;
            scoreText.setText("Score: " + score); // add.text로 생성한 text 수정: setText
            if (stars.countActive(true) === 0) {
                stars.children.iterate(function (child) {
                    child.enableBody(true, child.x, 0, true, true);
                });

                var x =
                    player.x < 400
                        ? Phaser.Math.Between(400, 800)
                        : Phaser.Math.Between(0, 400);

                var bomb = bombs.create(x, 16, "bomb");
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
            }
        }
        this.physics.add.collider(bombs, platforms);

        this.physics.add.collider(player, bombs, hitBomb, null, this);
        function hitBomb(player, bomb) {
            this.physics.pause(); // 물리 환경 멈춰

            player.setTint(0xff0000); // 요소의 색 변경

            player.anims.play("turn");

            gameOver = true;
        }
    }

    update() {
        if (cursors.left.isDown) {
            player.setVelocityX(-160);

            player.anims.play("left", true);
        } else if (cursors.right.isDown) {
            player.setVelocityX(160);

            player.anims.play("right", true);
        } else {
            player.setVelocityX(0);

            player.anims.play("turn");
        }

        if (cursors.up.isDown && player.body.touching.down) {
            // 위 방향키 누르고 공중에 닿지 않았을 때만 점프
            player.setVelocityY(-330);
        }
    }
}

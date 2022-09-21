class MoveToStopScene extends Phaser.Scene {
    constructor() {
        super({ key: "moveToStop" });
    }
    preload() {
        this.load.image("ground", "/assets/platform.png");
        this.load.spritesheet("dude", "/assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48,
        });
    }
    create() {
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, "ground").setScale(2).refreshBody();

        moveToStopPlayer1 = this.physics.add.sprite(100, 500, "dude");
        moveToStopPlayer2 = this.physics.add.sprite(750, 500, "dude");
        this.physics.add.collider(moveToStopPlayer1, platforms);
        this.physics.add.collider(moveToStopPlayer2, platforms);
        this.physics.add.collider(moveToStopPlayer1, moveToStopPlayer2);
    }
    update() {
        if (moveToStopPlayer2.x - moveToStopPlayer1.x > 32) {
            moveToStopPlayer2.x--;
        }
        if (moveToStopPlayer2.x - moveToStopPlayer1.x > 100) {
            moveToStopPlayer1.x++;
        }
    }
}

class FirstScene extends Phaser.Scene {
    constructor() {
        super("myFirstScene");
    }

    preload() {
        // 이미지
        this.load.image("sky", "/assets/sky.png");
        this.load.image("rightArrow", "/assets/rightArrow.png");
        this.load.image("ground", "/assets/platform.png");
    }

    create() {
        this.currentImagePositionX = this.scale.width / 2;
        this.currentImagePositionY = this.scale.height / 2;
        // 배경 이미지
        this.background = this.add.image(
            this.currentImagePositionX,
            this.currentImagePositionY,
            "sky"
        );

        this.rightArrow = this.add
            .sprite(this.scale.width - 50, this.scale.height / 2, "rightArrow")
            .setInteractive(); // setInteractive 메서드를 호출하면 해닫 sprite가 이벤트를 인식할 수 있게 됩니다.
        this.leftArrow = this.add
            .sprite(50, this.scale.height / 2, "rightArrow")
            .setInteractive(); // setInteractive 메서드를 호출하면 해닫 sprite가 이벤트를 인식할 수 있게 됩니다.
        this.leftArrow.flipX = true;

        this.platforms = this.physics.add.staticGroup();

        this.platforms.create(-100, 250, "ground");
        this.platforms.create(this.scale.width + 100, 220, "ground");

        this.rightArrow.on("pointerdown", () => {
            console.log("right");
            this.background.setPosition(
                200,
                (this.currentImagePositionY += 10)
            );
        });
        this.leftArrow.on("pointerdown", () => {
            console.log("left");
            this.background.setPosition(
                200,
                (this.currentImagePositionY -= 10)
            );
        });

        // cursors = game.input.keyboard.createCursorKeys();
    }

    update() {}
}

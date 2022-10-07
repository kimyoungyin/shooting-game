export class Actor extends Physics.Arcade.Sprite {
    hp = 100;
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        // this.getBody().setCollideWorldBounds(true);
    }
    getDamage(value) {
        this.scene.tweens.add({
            targets: this,
            duration: 100,
            repeat: 3,
            yoyo: true,
            alpha: 0.5,
            onStart: () => {
                if (value) {
                    this.hp = this.hp - value;
                }
            },
            onComplete: () => {
                this.setAlpha(1);
            },
        });
    }
    getHPValue() {
        return this.hp;
    }
    getBody() {
        return this.body;
    }
}

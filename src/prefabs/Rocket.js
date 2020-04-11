// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);
        this.isFiring = false;
    }

    update() {
        // left/right movement
        if(this.isFiring) {
            if(keyLEFT.isDown) {
                this.x -= 12;
            } else if(keyRIGHT.isDown && this.x <= 598) {
                this.x += 12;
            }
        }
        // fire button (NOT spacebar)
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
        }
        //
    }
}
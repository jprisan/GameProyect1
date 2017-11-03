function GunEnemy(x, y, damage) {
    this.x = x
    this.y = y
    this.vy = 4
    this.live = true
    this.damage = 1
    this.img = new Image();
    this.health = 1
}


GunEnemy.prototype.move = function () {
    this.x -= this.vy
}
GunEnemy.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.img.src = "./images/torpedo.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}
GunEnemy.prototype.updateDraw = function (){
    ctx.drawImage(this.img, this.x, this.y);
}

GunEnemy.prototype.collisionDetection = function () {
    if (this.x < -10) {
        this.live = false
    }
    if ((player.y  -5 < this.y) && (this.y < player.y + 40) && (player.x - 0 < this.x) && (this.x < player.x + 80)) {
        this.live = false
        player.health -= 1;
    }
    // if ((fireArray.y  -5 < this.y) && (this.y < fireArray.y + 40) && (fireArray.x - 0 < this.x) && (this.x < fireArray.x + 80)) {
    //     this.live = false
    //     console.log("FireArray",fireArray.y)
    // }
}

function Enemy(x, damage) {
    this.x = 1100
    this.y = this.randomY()
    this.vy = 2
    this.live = true
    this.damage = 3
    this.img = new Image();
}


Enemy.prototype.move = function () {
    this.x -= this.vy
}
Enemy.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.img.src = "./images/enemyuboat.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}

Enemy.prototype.updateDraw = function (){
    ctx.drawImage(this.img, this.x, this.y);
}

Enemy.prototype.randomY = function () {
    return Math.floor(Math.random() * (500 - 250)) + 250
}

Enemy.prototype.collisionDetection = function () {
    if (this.x < -100) {
        this.live = false
    }
    if ((player.y  - 40 < this.y) && (this.y < player.y + 50) && (player.x - 5 < this.x) && (this.x < player.x + 90)) {
        this.live = false
        player.health -= 1;
    }
}

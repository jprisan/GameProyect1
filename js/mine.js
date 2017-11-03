function Mine(x) {
    this.x = x
    this.y = 190
    this.vy = 2
    this.live = true
    this.damage = 5
    this.img = new Image();
}

Mine.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    //var img = new Image(); --> this.img
    this.img.src = "./images/mine.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}

Mine.prototype.attack = function () {
    this.y += this.vy
}

Mine.prototype.collisionDetection = function () {
    var collision = canvas.height - 20;
    if (this.y > collision) {
        this.y = collision;
        this.live = false
    }
}

Mine.prototype.updateDraw = function () {
    ctx.drawImage(this.img, this.x, this.y);
}

Mine.prototype.explote = function () {

    if ((player.x - 30 < this.x) && (this.x < player.x + 80) && (this.y == player.y)) {
        console.log("ENTRO")
        this.live = false
        player.health -= 1;
    }
}
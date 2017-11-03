var Uboat = function (x, y, vx, vy) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.friction = 0.98
    this.img = new Image();
    this.health = 5;
    this.live = true
console.log(this.health)
};

Uboat.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.img.src = "./images/player.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}

Uboat.prototype.moveRigth = function () {
    this.x += this.vx
}

Uboat.prototype.moveLeft = function () {
    this.x -= this.vx
}

Uboat.prototype.moveUp = function () {
    this.y -= this.vy
}

Uboat.prototype.moveDown = function () {
    this.y += this.vy
}

Uboat.prototype.collisionDown = function () {
    var collision = canvas.height - 50;
    if (this.y > collision) {
        this.y = collision;
    }
}

Uboat.prototype.updateDraw = function () {
    ctx.drawImage(this.img, this.x, this.y);
}
Uboat.prototype.die = function () {
    if(this.health === 0){
        var that = this
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        this.img.src = "./images/die.jpg";
        this.ctx.drawImage(this.img, canvas.x, canvas.y);


    }
    
}
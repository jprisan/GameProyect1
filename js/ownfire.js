function Gun(x, y) {
    this.x = x
    this.y = y
    this.vy = 6
    this.live = true
    this.damage = 1
    this.img = new Image()
}

Gun.prototype.move = function () {
    this.x += this.vy
}
Gun.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.img.src = "./images/torpedoamigo.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}
Gun.prototype.updateDraw = function () {
    ctx.drawImage(this.img, this.x, this.y);
}


Gun.prototype.collisionDetection = function (i) {
    if (this.x > 900) {
        this.live = false
    }
} 
        // if ((mine.x < this.x) && (this.x < mine.x) && (mine.y < this.y) && (this.y < mine.y)) {
        //     this.live = false;
        //     mine.health -= 1;
        // }
    // if ((torpedoArray[i].x  < this.x) && (this.x < torpedoArray[i].x ) && (torpedoArray[i].y  < this.y) && (this.y < torpedoArray[i].y )) {
    //     this.live = false
    //     torpedoArray[i].health -= 1;
    // }
    // if ((enemyArray[i].x  < this.x) && (this.x < enemyArray[i].x ) && (enemyArray[i].y  < this.y) && (this.y < enemyArray[i].y )) {
    //     this.live = false
    //     enemyArray[i].health -= 1;

    // }


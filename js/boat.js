function Boat(x) {
    this.x = x
    this.y = 160
    this.vx = 0.8
    this.img = new Image();
}

Boat.prototype.draw = function () {
    var that = this
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    this.img.src = "./images/ship.png";
    this.img.onload = function () {
        ctx.drawImage(that.img, that.x, that.y);
    }
}

Boat.prototype.mov = function (canvas) {
    if(this.x < canvas.heigth+200){
        this.x += this.vx;
    }
    if(this.x > canvas.heigth+200){
        this.x = -20;
    }
}

Boat.prototype.updateDraw = function (){
    ctx.drawImage(this.img, this.x, this.y);
}
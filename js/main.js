//Declaracion de Objetos
var player = new Uboat(300, 300, 16, 16)
var ship = new Boat(0)
var minesArray = [];
var enemyArray = [];
var torpedoArray = [];
var fireArray = [];
var scoreArray = [];
time();

//Carga del Juego
window.onload = function () {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.heigth = 600;
    player.draw();
    ship.draw();


    //Refresco de los objetos
    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.die(ctx);
        ship.updateDraw();
        player.updateDraw()
        if (minesArray.length == 0) {
            minesCreator();
        }
        if (enemyArray.length < 3) {
            enemyCreator();
        }
        ship.mov(canvas);
        player.collisionDown();
        mineUpdate();
        enemyUpdate();
        torpedoUpdate();
        if (fireArray[0]) {
            fireUpdate();
        }

        document.getElementById('life').innerHTML = player.health;

    }
    console.log("ENTRARE")
    setInterval(update, 1000 / 60)
    var width = $("#canvas").width;
    var height = $("#canvas").height;
}

// Identificacion de Movimiento
document.addEventListener('keydown', (event) => {

    var keyName = event.keyCode;
    switch (keyName) {
        case 65:
            if (player.x > 10) {
                player.moveLeft();
            }
            break;

        case 83:
            if (player.y) {
                player.moveDown();
            }
            break;

        case 68:
            if (player.x < canvas.width - 105) {
                player.moveRigth();
            }
            break;

        case 87:
            if (player.y > 195) {
                player.moveUp();
            }
            break;

        case 80:
            fireCreator();
            break;
    }
});


// Creador de Minas


function minesCreator() {
    var prob = Math.random() * (100 - 0);
    if (prob > 99) {
        minesArray.push(new Mine(ship.x))
        minesArray[0].draw();
    }
}

function mineUpdate() {
    if (minesArray.length >= 1) {
        for (i = 0; i < minesArray.length; i++) {
            minesArray[i].updateDraw();
            minesArray[i].collisionDetection();
            minesArray[i].attack();
            minesArray[i].explote();
            if (minesArray[i].live == false) {
                minesArray.splice(i, 1);
            }
        }
    }
}


//Creador de Enemigos


function enemyCreator() {
    var prob = Math.random() * (100 - 0);
    if (prob > 98) {
        enemyArray.push(new Enemy())
        for (i = 0; i < enemyArray.length; i++) {
            enemyArray[i].draw()
        }
    }
}

function enemyUpdate() {
    if (enemyArray.length >= 1) {
        for (i = 0; i < enemyArray.length; i++) {
            enemyArray[i].updateDraw();
            enemyArray[i].move();
            enemyArray[i].collisionDetection(fireArray[0]);
            if ((fireArray[0]) && (fireArray[0].live == false)) {
                fireArray.splice(0, 1);
            }
            if (enemyArray[i].live == false) {
                enemyArray.splice(i, 1);
            }
            if (torpedoArray.length < 5) {
                torpedoCreator((enemyArray[i].x), (enemyArray[i].y) + 30);
            }
        }
    }
}


// Creador de Torpedos Enemigos


function torpedoCreator(x, y) {
    var prob = Math.random() * (100 - 0);
    if (prob > 99) {
        torpedoArray.push(new GunEnemy(x, y))
        for (i = 0; i < torpedoArray.length; i++) {
            torpedoArray[i].draw()

        }
    }
}

function torpedoUpdate() {
    if (torpedoArray.length >= 1) {
        for (i = 0; i < torpedoArray.length; i++) {
            torpedoArray[i].updateDraw();
            torpedoArray[i].collisionDetection();
            torpedoArray[i].move();
            if (torpedoArray[i].live == false) {
                torpedoArray.splice(i, 1);
            }
        }
    }
}


// Funcion Disparo Player


function fireCreator(x, y) {
    if (fireArray.length < 1) {
        fireArray.push(new Gun(player.x + 50, player.y + 30))
        fireArray[0].draw()
    }
}

function fireUpdate() {
    fireArray[0].updateDraw();
    fireArray[0].collisionDetection();
    fireArray[0].move();
    if (fireArray[0].live == false) {
        fireArray.pop();
    }
}



// Contador de Tiempo


function time() {
    var n = 0;
    var l = document.getElementById("time");
    window.setInterval(function () {
        l.innerHTML = n;
        n++;
    }, 1000);
    // return scoreArray.push(namePlayer, score)
}
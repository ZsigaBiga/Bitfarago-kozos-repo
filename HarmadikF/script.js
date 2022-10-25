'pragma once'

//Játéjablak készítése
var gameArea = {
    canvas: document.createElement('canvas'),
    start: function (){
        this.canvas.width = 850;
        this.canvas.height = 850;
        this.context = this.canvas.getContext("2d");
        this.canvas.id = "vaszon";
        document.getElementById("jatekhely").appendChild(this.canvas);
        this.interval = setInterval(updateGameArea, 16.3);

        window.addEventListener('keydown', function(e){
            gameArea.keys = (gameArea.keys || []);
            gameArea.keys[e.key.charCodeAt(0)] = (e.type == "keydown");
        })

        window.addEventListener('keyup', function(e){
            gameArea.keys[e.key.charCodeAt(0)] = (e.type == "keydown");
        })

        window.addEventListener('wheel', function(e){
            gameArea.gorgo = e.deltaY * -0.5;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

var haz = {
    oldalak: [],
    szelesseg: 100,
    magassag: 100,
    draw: function (x, y, scale) {
        ctx = gameArea.context;
        
        this.oldalak[0] = x - this.szelesseg * scale + 25; // bal
        this.oldalak[1] = x + this.szelesseg * scale - 25; // jobb
        this.oldalak[2] = y + this.magassag* scale; // felső
        this.oldalak[3] = y + (this.magassag + this.magassag) * scale; // alsó
        
        ctx.beginPath();
        ctx.font = "30px Verdana";
        ctx.strokeStyle = "darkgoldenrod";
        ctx.moveTo(this.oldalak[0], this.oldalak[3]);

        
        ctx.lineTo(this.oldalak[0], this.oldalak[2]);
        ctx.lineTo(this.oldalak[1], this.oldalak[2]);
        ctx.lineTo(this.oldalak[1], this.oldalak[3] - 50);
        ctx.moveTo(this.oldalak[1], this.oldalak[3]);
        ctx.lineTo(this.oldalak[0] - 1 *scale, this.oldalak[3] - 1 * scale);

        ctx.stroke();


        //ctx.strokeRect(this.oldalak[0], this.oldalak[2], this.szelesseg * 2 * scale - 50, this.magassag  * 1.6 * scale);
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.lineJoin = "round";
        ctx.lineWidth = 5;

        ctx.moveTo(x, y);
        ctx.lineTo(x - this.szelesseg * scale, y + this.magassag * scale);
        ctx.lineTo(x + this.szelesseg * scale, y + this.magassag * scale);
        ctx.lineTo(x , y);
        ctx.lineTo(x + 1, y + 1);
        ctx.fill();
    }
}

function player(xHely, yHely)  {
    this.x = xHely;
    this.y = yHely;
    this.spdSkala = 1.5;
    this.xSpeed = 0.0;
    this.ySpeed = 0.0;

    this.update = function(){
        ctx = gameArea.context;

        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, 20, 0, 2*Math.PI);
        ctx.fill();
    }

    this.newPos = function(){
        this.x += (this.spdSkala * this.xSpeed);
        this.y += (this.spdSkala * this.ySpeed);
    }

}

var wWidth;
var wHeight;
var juan;

function updateGameArea(){
    gameArea.clear();

    juan.xSpeed = 0;
    juan.ySpeed = 0;

    if(gameArea.keys && gameArea.keys[97]) {juan.xSpeed = -1;}
    if(gameArea.keys && gameArea.keys[100]) {juan.xSpeed = 1;}
    if(gameArea.keys && gameArea.keys[119]) {juan.ySpeed = -1;}
    if(gameArea.keys && gameArea.keys[115]) {juan.ySpeed = 1;}

    if(gameArea.gorgo > 0 && (juan.spdSkala + 0.5 < 2.5)) {juan.spdSkala += 0.5;}
    if(gameArea.gorgo < 0 && (juan.spdSkala - 0.5 > 0.5)) {juan.spdSkala -= 0.5;}
    gameArea.gorgo = 0;

    console.log(juan.spdSkala);

    juan.newPos();
    juan.update();
}
   

function Game(){
    gameArea.start();
    wWidth = gameArea.canvas.width;
    wHeight = gameArea.canvas.height;
    juan = new player(wWidth / 2, wHeight / 2, 1);
}

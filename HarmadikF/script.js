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
        
        //console.log(x);
        
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
var wWidth;
var wHeight;
var x = 0
var y = 0;

var valtas = false;

function updateGameArea(){
    gameArea.clear();
    haz.draw(x, y, 4);
    gameArea.context.strokeText("szobd gi a kecim :^)", x - 20 * 30, y + 250);

    if(x < 850 && y != 801 && y != 0){
        x += 3;
    }else if(y < 800){
        y += 3;
    }else if(y == 801 && x > 0){
        x -= 3;
    }else if(x == 0 && y > 0){
        y -= 3;
    }
}

function Game(){
    gameArea.start();
    wWidth = gameArea.canvas.width;
    wHeight = gameArea.canvas.height;
}

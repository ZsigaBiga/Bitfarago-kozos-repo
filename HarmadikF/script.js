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


function player(xHely, yHely)  {
    this.x = xHely;
    this.y = yHely;
    this.spdSkala = 1.5;
    this.xSpeed = 0.0;
    this.ySpeed = 0.0;
    this.meret = 30;
    
    this.update = function(){
        ctx = gameArea.context;
        
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.meret, this.meret);
        ctx.closePath();
    }

    this.newPos = function(){
        this.x += (this.spdSkala * this.xSpeed);
        this.y += (this.spdSkala * this.ySpeed);
    }

    this.collision = function(fal){
        var jatekosBal = this.x;
        var jatekosJobb = this.x + this.meret;
        var jatekosFelso = this.y;
        var jatekosAlso = this.y + this.meret;
        var falBal = fal.x;
        var falJobb = fal.x + fal.width;
        var falFelso = fal.y;
        var falAlso = fal.y + fal.height;

        var utkoz = true;

        if((jatekosAlso < falFelso) || (jatekosFelso > falAlso) || (jatekosJobb < falBal) || (jatekosBal > falJobb)){
            utkoz = false;   
        }

        return utkoz;
    }
}

function hangSzenzor(xHely, yHely) {
    this.x = xHely;
    this.y = yHely;
    this.radius = 0;
    this.korM = 15;

    this.erzekel = function (player) {
        this.radius = player.spdSkala * 10 * 5;
        var erzek = false;

        if(Math.sqrt(Math.pow(this.x - (player.x + player.meret / 2), 2) + Math.pow(this.y - (player.y + player.meret / 2), 2)) <= this.radius + 100){
            erzek = true;
        }

        return erzek;
    }

    this.update = function (trigger){
        ctx = gameArea.context;

        ctx.beginPath();
        ctx.fillStyle = "red";

        if(trigger){
            ctx.fillStyle = "green";
            ctx.arc(this.x, this.y, this.korM, 0, 2*Math.PI);
        }else{
            ctx.arc(this.x, this.y, this.korM, 0, 2*Math.PI);
        }

        ctx.fill();
        ctx.fillStyle = "black";
        
        ctx.strokeStyle = "#ff990053";
        ctx.moveTo(this.x + this.radius + 100, this.y);
        ctx.arc(this.x, this.y, this.radius + 100, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function mozgasSzenzor(xHely, yHely, inHossz, inMagas){
    this.x = xHely;
    this.y = yHely;
    this.hossz = inHossz;
    this.magas = inMagas;

    this.erzekel = function(player){
        var jatekosBal = player.x;
        var jatekosJobb = player.x + player.meret;
        var jatekosFelso = player.y;
        var jatekosAlso = player.y + player.meret;
        var szenzorBal = this.x;
        var szenzorJobb = this.x + this.hossz;
        var szenzorFelso = this.y;
        var szenzorAlso = this.y + this.magas;

        var utkoz = true;

        if(((jatekosAlso < szenzorFelso) || (jatekosFelso > szenzorAlso) || (jatekosJobb < szenzorBal) || (jatekosBal > szenzorJobb)) || (player.xSpeed == 0 && player.ySpeed == 0)){
            utkoz = false;   
        }

        return utkoz;
    }

    this.update = function(trigger){
        ctx = gameArea.context;
        
        ctx.beginPath();
        ctx.fillStyle = "#ff000053";
        if(trigger){
            ctx.fillStyle = "green";
            ctx.fillRect(this.x, this.y, this.hossz, this.magas);
        }else{
            ctx.fillRect(this.x, this.y, this.hossz, this.magas);
        }

        ctx.fill();
        ctx.fillStyle = "black";
    }
}

var haz = {
    oldalak: [],
    epit: function(){
        for(let i = 0; i < 12; i++){
            this.oldalak[i] = {};
        }

        var hossz = 500;
        //Kerületi falak
        this.oldalak[0].width = 500;
        this.oldalak[0].height = 5;
        this.oldalak[0].x = wWidth / 2 - wWidth / 3;
        this.oldalak[0].y = wHeight / 2 - wHeight / 3;

        this.oldalak[1].width = 5;
        this.oldalak[1].height = 430;
        this.oldalak[1].x = this.oldalak[0].x + hossz;
        this.oldalak[1].y = this.oldalak[0].y;

        this.oldalak[2].width = 500;
        this.oldalak[2].height = 5;
        this.oldalak[2].x = this.oldalak[1].x - hossz;
        this.oldalak[2].y = this.oldalak[1].y + hossz;

        this.oldalak[3].width = 5;
        this.oldalak[3].height = 500;
        this.oldalak[3].x = this.oldalak[2].x;
        this.oldalak[3].y = this.oldalak[2].y - hossz;

        //Szoba falak

        this.oldalak[4].width = 200;
        this.oldalak[4].height = 5;
        this.oldalak[4].x = 445;
        this.oldalak[4].y = 450;

        this.oldalak[5].width = 200;
        this.oldalak[5].height = 5;
        this.oldalak[5].x = 445;
        this.oldalak[5].y = 285;

        this.oldalak[6].width = 5;
        this.oldalak[6].height = 100;
        this.oldalak[6].x = 445;
        this.oldalak[6].y = 285;

        this.oldalak[7].width = 5;
        this.oldalak[7].height = 80;
        this.oldalak[7].x = 445;
        this.oldalak[7].y = 145;

        this.oldalak[8].width = 150;
        this.oldalak[8].height = 5;
        this.oldalak[8].x = 145;
        this.oldalak[8].y = 300;

        this.oldalak[9].width = 5;
        this.oldalak[9].height = 100;
        this.oldalak[9].x = 295;
        this.oldalak[9].y = 145;

        this.oldalak[10].width = 150;
        this.oldalak[10].height = 5;
        this.oldalak[10].x = 145;
        this.oldalak[10].y = 450;

        this.oldalak[11].width = 5;
        this.oldalak[11].height = 100;
        this.oldalak[11].x = 295;
        this.oldalak[11].y = 300;
    },
    draw: function () {
        ctx = gameArea.context;
        
        ctx.beginPath();
        ctx.strokeStyle = "brown";
        ctx.lineWidth = 5;

        for (let i = 0; i < 12; i++) {
            ctx.fillRect(this.oldalak[i].x, this.oldalak[i].y, this.oldalak[i].width, this.oldalak[i].height);
        }
         
        ctx.stroke();
    }
}

var wWidth;
var wHeight;
var juan;
var hangSzenzorok = [];
var mozgasSzenzorok = [];

function updateGameArea(){
    
    gameArea.clear();
    
    juan.xSpeed = 0;
    juan.ySpeed = 0;
    
    if(gameArea.keys && gameArea.keys[97]) {juan.xSpeed = -1;}
    if(gameArea.keys && gameArea.keys[100]) {juan.xSpeed = 1;}
    if(gameArea.keys && gameArea.keys[119]) {juan.ySpeed = -1;}
    if(gameArea.keys && gameArea.keys[115]) {juan.ySpeed = 1;}

    for (let i = 0; i < 12; i++) {

        // Nem jövök rá hogy kell odaclampelni dx

        if(juan.collision(haz.oldalak[i])){
            juan.x = juan.x + juan.xSpeed * -1 * 5;
            juan.y = juan.y + juan.ySpeed * -1 * 5;
        }
    }

    //console.log(juan.x + " " + juan.y);

    if(gameArea.gorgo > 0 && (juan.spdSkala + 0.5 < 2.5)) {juan.spdSkala += 0.5;}
    if(gameArea.gorgo < 0 && (juan.spdSkala - 0.5 > 0.5)) {juan.spdSkala -= 0.5;}
    gameArea.gorgo = 0;

    for (let i = 0; i < hangSzenzorok.length; i++) {
        hangSzenzorok[i].update(hangSzenzorok[i].erzekel(juan));
    }

    for (let i = 0; i < mozgasSzenzorok.length; i++) {
        mozgasSzenzorok[i].update(mozgasSzenzorok[i].erzekel(juan));
    }

    haz.draw();
    juan.newPos();
    juan.update();
}
   

function Game(){
    gameArea.start();
    wWidth = gameArea.canvas.width;
    wHeight = gameArea.canvas.height;
    haz.epit();
    juan = new player(wWidth / 2 - 30, wHeight / 2 - 30, 1);
    hangSzenzorok = [new hangSzenzor(420, 520), new hangSzenzor(270, 210), new hangSzenzor(560, 370), new hangSzenzor(270, 560)];
    mozgasSzenzorok = [new mozgasSzenzor(642, 570, 5, 77), new mozgasSzenzor(295, 245, 5, 70), new mozgasSzenzor(445, 220, 5, 70), new mozgasSzenzor(445, 385, 5, 70), new mozgasSzenzor(295, 385, 5, 70)];
}

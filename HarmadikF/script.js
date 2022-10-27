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
        ctx.fill();
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
        
        if(utkoz){
        }

        return utkoz;
    }
}

var haz = {
    oldalak: [],
    epit: function(){
        for(let i = 0; i < 10; i++){
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

    },
    draw: function () {
        ctx = gameArea.context;
        
        ctx.beginPath();
        ctx.strokeStyle = "brown";
        ctx.lineWidth = 5;

        for (let i = 0; i < 8; i++) {
            ctx.fillRect(this.oldalak[i].x, this.oldalak[i].y, this.oldalak[i].width, this.oldalak[i].height);
        }
         
        ctx.stroke();
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

    for (let i = 0; i < 8; i++) {
        if(juan.collision(haz.oldalak[i])){
            juan.x += juan.xSpeed * -1 * 4;
            juan.y += juan.ySpeed * -1 * 4;

            gameArea.context.beginPath();
            gameArea.context.arc(haz.oldalak[i].x, haz.oldalak[i].y, 30, 0, 2*Math.Pi);
            console.log("Üti");
            gameArea.context.stroke();
        }
    }

    //console.log(juan.x + " " + juan.y);

    if(gameArea.gorgo > 0 && (juan.spdSkala + 0.5 < 2.5)) {juan.spdSkala += 0.5;}
    if(gameArea.gorgo < 0 && (juan.spdSkala - 0.5 > 0.5)) {juan.spdSkala -= 0.5;}
    gameArea.gorgo = 0;

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
}

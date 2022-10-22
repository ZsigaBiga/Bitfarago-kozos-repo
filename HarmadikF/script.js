'pragma once'

let canv;
let ctx;
//ˇˇˇ Azért kell mert csak aztuán lehet meghívni a canvast miután a teljes DOM betöltött
// Vagy inline scriptbe írjuk és a canvas után rakjuk

document.addEventListener('DOMContentLoaded', function(){
    canv = document.getElementById("vaszon");
    ctx = canv.getContext("2d");

    //Négyzet
    ctx.strokeStyle = "#0000FF";
    ctx.moveTo(50,50);
    ctx.lineTo(200,50);
    ctx.lineTo(200,100);
    ctx.lineTo(50,100);
    ctx.lineTo(50,50);
    ctx.stroke();
    //Kör
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.fill();
});


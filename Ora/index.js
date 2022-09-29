'pragma once'

function rotateMutato(inSec, inMin, inH){
    document.getElementById('oraMut').style.transform="rotate("+ (inH * 30 + inMin * 30 / 60)+ "deg)";
    document.getElementById('percMut').style.transform="rotate("+ inMin * 360 / 60 + "deg)";
    document.getElementById('mpMut').style.transform="rotate("+inSec * 360 / 60 + "deg)";
}

let seconds;
let minutes;
let hours;

function time(){
    let d = new Date();
    seconds = d.getSeconds();
    minutes = d.getMinutes();
    hours = d.getHours();

    let sec_S = seconds < 10 ? "0" + seconds : seconds;
    let min_S = minutes < 10 ? "0" + minutes : minutes;
    let h_S = hours < 10 ? "0" + hours : hours;
    document.getElementById('idomezo').innerHTML = h_S + ":" + min_S + ":" + sec_S;

    rotateMutato(seconds, minutes, hours);
}

setInterval(() => {
    time();
}, 1000);

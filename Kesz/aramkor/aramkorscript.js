'pragma once'

let aT = false;
let bT = false;
let abO = false;

let cT = false;
let dT = false;
let cdO = false;

let aBtn;
let bBtn;
let cBtn;
let dBtn;

let kapu_1;
let kapu_2;
let kapu_3;

let output;
let eredm;

function setup(){
    aBtn = document.getElementById('a');
    bBtn = document.getElementById('b');
    cBtn = document.getElementById('c');
    dBtn = document.getElementById('d');

    kapu_1 = document.getElementById('kapu1');
    kapu_2 = document.getElementById('kapu2');
    kapu_3 = document.getElementById('kapu3');

    output = document.getElementById('output');

    check();
}

function check(){

    console.log("van");
    aT = aBtn.checked;
    bT = bBtn.checked;
    cT = cBtn.checked;
    dT = dBtn.checked;

    switch (kapu_1.value) {
        case "AND":
            
            if(aT && bT){
                abO = true;
            }else{
                abO = false;
            }

        break;
        
        case "OR":
            if(aT || bT){
                abO = true;
            }else{
                abO = false;
            }

        break;
        
        case "NAND":
            if(!(aT && bT)){
                abO = true;
            }else{
                abO = false;
            }
        break;

        case "NOR":
            if(!(aT || bT)){
                abO = true;
            }else{
                abO = false;
            }
        break;

        case "XOR":
            if(aT != bT){
                abO = true;
            }else{
                abO = false;
            }
        break;
    }

    switch (kapu_2.value) {
        case "AND":
            
            if(cT && dT){
                cdO = true;
            }else{
                cdO = false;
            }

        break;
        
        case "OR":
            if(cT || dT){
                cdO = true;
            }else{
                cdO = false;
            }

        break;
        
        case "NAND":
            if(!(cT && dT)){
                cdO = true;
            }else{
                cdO = false;
            }
        break;

        case "NOR":
            if(!(cT || dT)){
                cdO = true;
            }else{
                cdO = false;
            }
        break;

        case "XOR":
            if(cT != dT){
                cdO = true;
            }else{
                cdO = false;
            }
        break;
    } 

    switch (kapu_3.value) {
        case "AND":
            
            if(abO && cdO){
                eredm = true;
            }else{
                eredm = false;
            }

        break;
        
        case "OR":
            if(abO || cdO){
                eredm = true;
            }else{
                eredm = false;
            }

        break;
        
        case "NAND":
            if(!(abO && cdO)){
                eredm = true;
            }else{
                eredm = false;
            }
        break;

        case "NOR":
            if(!(abO || cdO)){
                eredm = true;
            }else{
                eredm = false;
            }
        break;

        case "XOR":
            if(abO != cdO){
                eredm = true;
            }else{
                eredm = false;
            }
        break;
    }

    if(eredm){
        output.innerHTML = true;
    }else{
        output.innerHTML = false;
    }
}
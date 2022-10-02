let n = 0;
function filmek()
{
    
    let actionMovies = ["A bolygó neve: Halál", "Mátrix", "Gladiátor", "A szürke ember" ];
    let actionYears = ["(1986)", "(1999)","(2000)", "(2022)"];
    //let actionPictures = ["bolygo.jpg", "gladiator.jpg", "matrix.jpg", "szurkeember.jpg"];
    let thrillerMovies = ["Végtelen (Infinite)", "Behatolás", "Veszélyes", "Mélyvíz"];
    let thrillerYears = ["(2021)", "(2021)", "(2021)", "(2022)"];
    let dramaMovies = ["A keresztapa", "A remény rabjai", "Halálsoron", "Low Tide"];
    let dramaYears = ["(1972)", "(1994)", "(1999)", "(2019)"];
    let fantasyMovies = ["A birodalom visszavág", "Coco", "Szörny Rt.", "így neveld a sárkányodat"];
    let fantasyYears = ["(1980)", "(2017)", "(2001)", "(2010)"];

    let act = false, thrill = false, dram = false, fant = false;

    var row2 = document.getElementById("firstRow");
    var newRow = row2.parentNode.insertRow(row2.rowIndex);  

    if(document.getElementById("actionCheckbox").checked){
        act = true;
        for(let i = 0; i <= 3; i++){            
            newRow.insertCell().innerHTML = actionMovies[i] + " " +  actionYears[i];        
        }
        var newRow = row2.parentNode.insertRow(row2.rowIndex);         
    }

    if(document.getElementById("thrillerCheckbox").checked){
        thrill = true;
        for(let i = 0; i <= 3; i++){
            newRow.insertCell().innerHTML = thrillerMovies[i] + " " +thrillerYears[i];            
        }
        var newRow = row2.parentNode.insertRow(row2.rowIndex);       
    }

    if(document.getElementById("dramaCheckbox").checked){
        dram = true;
        for(let i = 0; i <= 3; i++){
            newRow.insertCell().innerHTML = dramaMovies[i] + " " + dramaYears[i];            
        }
        var newRow = row2.parentNode.insertRow(row2.rowIndex);      
    }

    if(document.getElementById("fantasyCheckbox").checked){
        fant = true;
        for(let i = 0; i <= 3; i++){
            newRow.insertCell().innerHTML = fantasyMovies[i] + " " + fantasyYears[i];            
        }
        var newRow = row2.parentNode.insertRow(row2.rowIndex);       
    }

    let nemkivanatos = [];

    if(act == false){
        nemkivanatos += actionMovies;
    }
    if(dram == false){
        nemkivanatos += dramaMovies;
    }
    if(fant == false)
    {
        nemkivanatos += fantasyMovies;
    }
    if(thrill == false){
        nemkivanatos += thrillerMovies;
    }
   //document.getElementById("proba").innerText += nemkivanatos;
}

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
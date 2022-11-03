'pragma once'

let beSzamok = [];

function szamolvas(){
    var szam = document.getElementById('beker').value;

    if(szam != 0){
        beSzamok.push(szam);
    }
    else{
        document.getElementById('beker').disabled = true;
        document.getElementById('beolvas').disabled = true;
        beSzamok.sort(function(a,b){return a - b});
        maganyos();
    }
}

function maganyos(){
    var hely = document.getElementById('maganySzamok');
    hely.innerHTML = "";

    if (beSzamok[0] != beSzamok[1]) {
        hely.innerHTML += beSzamok[0] + " ";        
    }

    for (let i = 1; i < beSzamok.length - 1; i++) {

        if(beSzamok[i - 1] != beSzamok[i + 1] && beSzamok[i] != beSzamok[i - 1]){
            
            hely.innerHTML += beSzamok[i] + " ";        
        }
    }

    if(beSzamok[beSzamok.length - 2] != beSzamok[beSzamok.length - 1]){
        hely.innerHTML += beSzamok[beSzamok.length - 1] + " ";        
    }
}
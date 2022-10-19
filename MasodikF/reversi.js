'pragma once'

// true = kék ; false = piros

let tablaData = [];

let seconds = 0;
let minutes = 0;
let hours = 0;

let displayseconds = 0;
let displayminutes = 0;
let displayhours = 0;

let loop;

let meret, tabla, tablaHelye;

class Cella {
    constructor(ertek, szin){
        this.ertek = ertek;
        this.szin = szin;
        this.kattint = false;
    }
}

function stopper(){
    
        seconds++;
    
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
    
            if(minutes / 60 === 1){
                minutes = 0;
                hours++;
            }
        }
    
        if(seconds < 10){
            displayseconds = "0" + seconds.toString();
        }
        else{
            displayseconds = seconds;
        }
    
        if(minutes < 10){
            displayminutes = "0" + minutes.toString();
        }
        else{
            displayminutes = minutes;
        }
    
        if(hours < 10){
            displayhours = "0" + hours.toString();
        }
        else{
            displayhours = hours;
        }
    
        document.getElementById("display").innerHTML = displayhours + ":" + displayminutes + ":" + displayseconds;
        
}

function jatekSetup(){

    if(loop){
        seconds = 0;
        minutes = 0;
        hours = 0;

        displayseconds = 0;
        displayminutes = 0;
        displayhours = 0;
        clearInterval(loop);
    }

    tablaHelye = document.getElementById('jatekHely');

    meret = document.getElementById('tablaMeret').value;

    tabla = document.getElementById('jatekTabla');
    tabla.innerHTML = "";
    tabla.style.width = '100%';
    tabla.setAttribute('border', '1');

    let tablaTest = document.createElement('tbody');

    let jelenlegi = 1;
    let voltE = false;
    let kesz = false;

    for(let i = 0; i < meret; i++)
    {
        tablaData[i] = new Array(2);
        let oszlop = 0;
    
        for(let k = 1; k <= jelenlegi; k++)
        {
            var cella = new Cella(k, null);
            tablaData[i][oszlop] = cella;

            oszlop++;
        }

        for(let h = jelenlegi; h <= meret - jelenlegi; h++)
        {
            var cella = new Cella(jelenlegi, null);
            tablaData[i][oszlop] = cella;

            oszlop++;
        }    
        
        for(let l = jelenlegi - 1; l > 0; l--)
        {
            var cella = new Cella(l, null);
            tablaData[i][oszlop] = cella;

            oszlop++;
        }
        

        if(jelenlegi + 1 <= Math.round(meret/2) && kesz == false)
        {
            jelenlegi++;
            
        }
        else if(jelenlegi == Math.round(meret/2))
        {

            if(voltE == false)
            {
                voltE = true;
            }
            else
            {
                kesz = true;
                jelenlegi--;
            }           
        }
        else
        {
            jelenlegi--;
        }
    }
    var kozep = meret / 2 - 1;
    tablaData[kozep][kozep].szin = false; 
    tablaData[kozep][kozep + 1].szin = true;
    tablaData[kozep - 2][kozep + 1].szin = true;
    tablaData[kozep - 1][kozep + 1].szin = false;
    tablaData[kozep - 1][kozep + 2].szin = false;
    tablaData[kozep + 1][kozep].szin = true;
    tablaData[kozep + 1][kozep + 1].szin = false;
    tablaData[kozep + 2][kozep + 1].szin = false;


    for (let i = 0; i < meret; i++) {
        let sor = document.createElement('tr');
        sor.style.width = '100%';

        for (let j = 0; j < meret; j++) {
            
            let mezo = document.createElement('td');
            mezo.setAttribute('id', ""+i+j)
            mezo.style.textAlign = 'center';
            mezo.style.width = 500 / meret + 'px'; 
            mezo.style.height = 500 / meret + 'px';
            mezo.style.border = '1px solid black';
            
            if (tablaData[i][j].szin) {
                let korong = document.createElement('img');
                korong.src = "./kepek/kekkorong.png";
                mezo.appendChild(korong);
            }
            else if(tablaData[i][j].szin == false){
                let korong = document.createElement('img');
                korong.src = "./kepek/piroskorong.png";
                mezo.appendChild(korong);
            }

            sor.appendChild(mezo);            
        }
        
        tablaTest.appendChild(sor);
    }

    tabla.appendChild(tablaTest);
    tablaHelye.appendChild(tabla);
    loop = setInterval(() => {
        stopper();
    }, 1000);

    kor(false);
}

function kor(beSzin){

    for (let i = 0; i < meret; i++) {
        
        for(let j = 0; j < meret; j++){
            
            if(tablaData[i][j].szin == beSzin){
                szomszedCheck(tablaData[i][j], i, j);                
            }
        }    
    }


}

function szomszedCheck(cella, bei, bej){

    //Elnézést kérek az elkövetkező, kínzásnak felírható, embertelen, fájdalmas kódrészletért. Kitartást.

    for(let i = 0; i < 4; i++){
        let idx1;
        let idx2; 
        
        let masSzinVolt1 = false;
        let masSzinVolt2 = false;

        switch(i){

            //Fel-Le
            case 0:
                idx1 = bei - 1;
                idx2 = bei + 1;

                while(idx1 != -1 || idx2 != meret){

                    if (idx1 != -1) {
                        
                        if(tablaData[idx1][bej].szin == !cella.szin){
                            idx1--;
                            masSzinVolt1 = true;
                        }
                        else if(tablaData[idx1][bej].szin == null && masSzinVolt1){
                            
                            tablaData[idx1][bej].kattint = true;
                            var cell = document.getElementById(''+idx1+bej);
                            cell.style.backgroundColor = "red";
                            idx1 = -1;
                        }
                        else if((tablaData[idx1][bej].szin == cella.szin || tablaData[idx1][bej].szin == null ) && !masSzinVolt1 || (tablaData[idx1][bej].szin == cella.szin || tablaData[idx1][bej].szin == null ) && masSzinVolt1){
                            idx1 = -1;
                        }
                        
                    }

                    if (idx2 != meret) {
                        
                        if(tablaData[idx2][bej].szin == !cella.szin){
                            idx2++;
                            masSzinVolt2 = true;
                        }
                        else if(tablaData[idx2][bej].szin == null && masSzinVolt2){
                            
                            tablaData[idx2][bej].kattint = true;
                            var cell = document.getElementById(''+idx2+bej);
                            cell.style.backgroundColor = "red";
                            idx2 = meret;
                        }
                        else if((tablaData[idx2][bej].szin == cella.szin || tablaData[idx2][bej].szin == null) && !masSzinVolt2 || (tablaData[idx2][bej].szin == cella.szin || tablaData[idx2][bej].szin == null ) && masSzinVolt2){
                            idx2 = meret;
                        }
                    }

                }
                break;

                //Balra-Jobbra
                case 1:
                idx1 = bej - 1;
                idx2 = bej + 1;

                masSzinVolt1 = false;
                masSzinVolt2 = false;

                veszelyszok = 0;

                while(idx1 != -1 || idx2 != meret){

                    if (idx1 != -1) {
                        
                        if(tablaData[bei][idx1].szin == !cella.szin){
                            idx1--;
                            masSzinVolt1 = true;
                        }
                        else if(tablaData[bei][idx1].szin == null && masSzinVolt1){
                            
                            tablaData[bei][idx1].kattint = true;
                            var cell = document.getElementById(''+bei+idx1);
                            cell.style.backgroundColor = "red";
                            idx1 = -1;
                        }
                        else if((tablaData[bei][idx1].szin == cella.szin || tablaData[bei][idx1].szin == null ) && !masSzinVolt1 || (tablaData[bei][idx1].szin == cella.szin || tablaData[bei][idx1].szin == null ) && masSzinVolt1){
                            idx1 = -1;
                        }
                        
                    }

                    if (idx2 != meret) {
                        
                        if(tablaData[bei][idx2].szin == !cella.szin){
                            idx2++;
                            masSzinVolt2 = true;
                        }
                        else if(tablaData[bei][idx2].szin == null && masSzinVolt2){
                            
                            tablaData[bei][idx2].kattint = true;
                            var cell = document.getElementById(''+bei+idx2);
                            cell.style.backgroundColor = "red";
                            idx2 = meret;
                        }
                        else if((tablaData[bei][idx2].szin == cella.szin || tablaData[bei][idx2].szin == null) && !masSzinVolt2 || (tablaData[bei][idx2].szin == cella.szin || tablaData[bei][idx2].szin == null ) && masSzinVolt2){
                            idx2 = meret;
                        }
                    }

                    veszelyszok++;

                    if(veszelyszok > 9){
                        console.log('hulebuzta');
                        console.log(idx1);
                        break;
                    }
                }
                break;

                //Srég-balradőlt
                case 2:
                idx1 = Number(bei);
                idx2 = Number(bei + 1);

                masSzinVolt1 = false;
                masSzinVolt2 = false;

                while(idx1 != -1 || idx2 != meret){

                    if (idx1 != -1) {
                        
                        

                        if(tablaData[idx1][idx1 - 1].szin == !cella.szin){
                            idx1--;
                            masSzinVolt1 = true;
                        }
                        else if(tablaData[idx1][idx1 - 1].szin == null && masSzinVolt1){
                            
                            tablaData[idx1][idx1 - 1].kattint = true;
                            var cell = document.getElementById(''+idx1+''+ (idx1 - 1));
                            cell.style.backgroundColor = "red";
                            idx1 = -1;
                        }
                        else if((tablaData[idx1][idx1 - 1].szin == cella.szin || tablaData[idx1][idx1 - 1].szin == null ) && !masSzinVolt1 || (tablaData[idx1][idx1 - 1].szin == cella.szin || tablaData[idx1][idx1 - 1].szin == null ) && masSzinVolt1){
                            idx1 = -1;
                        }
                        
                    }
                    

                    if (idx2 != meret) {
                        if(tablaData[idx2][idx2].szin == !cella.szin){
                            idx2++;
                            masSzinVolt2 = true;
                        }
                        else if(tablaData[idx2][idx2].szin == null && masSzinVolt2){
                            
                            tablaData[idx2][idx2].kattint = true;
                            var cell = document.getElementById(''+idx2+''+ idx2++);
                            cell.style.backgroundColor = "red";
                            cell.innerHTML += 'a';
                            idx2 = meret;
                        }
                        else if((tablaData[idx2][idx2].szin == cella.szin || tablaData[idx2][idx2].szin == null) && !masSzinVolt2 || (tablaData[idx2][idx2].szin == cella.szin || tablaData[idx2][idx2].szin == null ) && masSzinVolt2){
                            idx2 = meret;
                        }
                    }
                }
                break;

                //Srég-jobbradőlt
                case 3:
                idx1 = Number(bei - 1);
                idx2 = Number(bei + 1);

                masSzinVolt1 = false;
                masSzinVolt2 = false;

                while(idx1 != -1 || idx2 != meret){

                    if (idx1 != -1) {
                        
                        if(tablaData[idx1][idx1 + 1].szin == !cella.szin){
                            idx1--;
                            masSzinVolt1 = true;
                        }
                        else if(tablaData[idx1][idx1 + 1].szin == null && masSzinVolt1){
                            
                            tablaData[idx1][idx1 + 1].kattint = true;
                            var cell = document.getElementById(''+idx1+''+ (idx1));
                            cell.style.backgroundColor = "red";
                            idx1 = -1;
                        }
                        else if((tablaData[idx1][idx1 + 1].szin == cella.szin || tablaData[idx1][idx1 + 1].szin == null ) && !masSzinVolt1 || (tablaData[idx1][idx1 + 1].szin == cella.szin || tablaData[idx1][idx1 + 1].szin == null ) && masSzinVolt1){
                            idx1 = -1;
                        }
                        
                    }
                    
                    
                    if (idx2 != meret) {
                        if(tablaData[idx2][idx2 - 1].szin == !cella.szin){
                            idx2++;
                            masSzinVolt2 = true;
                        }
                        else if(tablaData[idx2][idx2 - 1].szin == null && masSzinVolt2){
                            
                            var cell = document.getElementById(''+idx2+''+ (idx2 - 1));
                            cell.style.backgroundColor = "green";
                            tablaData[idx2][idx2 - 1].kattint = true;
                            cell.innerHTML += 'a';
                            idx2 = meret;
                        }
                        else if((tablaData[idx2][idx2 - 1].szin == cella.szin || tablaData[idx2][idx2 - 1].szin == null) && !masSzinVolt2 || (tablaData[idx2][idx2 - 1].szin == cella.szin || tablaData[idx2][idx2 - 1].szin == null ) && masSzinVolt2){
                            idx2 = meret;
                        }
                    }
                }
                break;
        }
    }

}
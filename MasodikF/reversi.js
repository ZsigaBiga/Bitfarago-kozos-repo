'pragma once'
// 0 = kék ; 1 = piros

let tablaData = new Array(2);

class Cella {
    constructor(ertek, szin){
        this.ertek = ertek;
        this.szin = szin;
    }
}

function jatekSetup(){
    let tablaHelye = document.getElementById('jatekHely');
    tablaHelye.innerHTML = "";

    let meret = document.getElementById('tablaMeret').value;
    let sorok = Math.ceil(meret / 2);
    let ertek = 1;

    let tabla = document.createElement('table');
    tabla.style.width = '100%';
    tabla.setAttribute('border', '1');

    let tablaTest = document.createElement('tbody');

    var elol = 0;
    var hatul = meret - 1;

    while (ertek != sorok + 1) {
        
        for (let i = elol; i <= hatul; i++) {
            let sor = document.createElement('tr');
            tablaData[i] = new Array(2);
            sor.style.width = '100%';
            
            console.log(i);
            for (let j = elol; j <= hatul; j++) {
                
                if(i != elol || i != hatul && j != elol || j!= hatul){
                    
                    var cella = new Cella(ertek, false);
                    tablaData[i][j] = cella;   
                    
                    let mezo = document.createElement('td');
                    mezo.style.textAlign = 'center';
                    mezo.style.width = 500 / meret + 'px'; 
                    mezo.style.height = 500 / meret + 'px';
                    mezo.innerHTML = tablaData[i][j].ertek;
                    sor.appendChild(mezo);            
        
                }
                console.log(j);
            }
            
            tablaTest.appendChild(sor);
        }
        elol++;
        hatul--;
        ++ertek;
    }
    tabla.appendChild(tablaTest);
    tablaHelye.appendChild(tabla);
}
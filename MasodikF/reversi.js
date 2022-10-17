'pragma once'
// true = kék ; false = piros

let tablaData = [];

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

    let tabla = document.createElement('table');
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
    tablaData[kozep + 1][kozep].szin = true;
    tablaData[kozep + 1][kozep + 1].szin = false;

    for (let i = 0; i < meret; i++) {
        let sor = document.createElement('tr');
        sor.style.width = '100%';

        for (let j = 0; j < meret; j++) {
            
            let mezo = document.createElement('td');
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
}
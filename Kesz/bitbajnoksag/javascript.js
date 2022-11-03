function kiir()
{
    let jatekosok = 0;

    if(document.getElementById('elso').checked)
    {
        jatekosok = document.getElementById('elso').value;
    }
    else if(document.getElementById('masodik').checked)
    {
        jatekosok = document.getElementById('masodik').value;
    }
    else
    {
        jatekosok = document.getElementById('harmadik').value;
    }


    document.getElementById('valasztas').style.visibility = "hidden";

    /*for(let i = 1; i <= jatekosok; i++)
    {
        let text = document.createElement('p');
        text.innerText = i + ". versenyző";
        text.style.paddingBottom = "40px";

        if(i > jatekosok/2)
        {
            text.style.textAlign = "right";
        }
        
        document.body.appendChild(text);
    }*/

    let tablazat = document.getElementById('tablazat');
    let sorNoveles = 2;
    let seged = 1;
    for(let i = 1; i <= jatekosok/2; i++)
    {
        let sor = document.createElement('tr');
        tablazat.appendChild(sor);


            for(let j = 1; j <= 9; j+=seged)
            {
                let oszlop = document.createElement('td');
                oszlop.id = i + ";" + j;
                oszlop.innerText = i + ";" + j;

                
                sor.appendChild(oszlop);

                if(j == 2 && i == 1)
                {
                    oszlop.rowSpan = 2;
                }
    
                if((j == 3 || j == 6) && (i == 5 || i == 1))
                {
                    oszlop.rowSpan = 4;
                }
                
                if((j == 5 || j == 4) && i == 1)
                {
                    oszlop.rowSpan = 8;
                }
            }
    }
}

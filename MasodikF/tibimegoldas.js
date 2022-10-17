function csinald()
{
    let szam = document.getElementById('szam').value;
    let jelenlegi = 1;
    let voltE = false;
    let kesz = false;
    for(let i = 0; i < szam; i++)
    {
        if(jelenlegi == 1)
        {
            for(let j = 0; j < szam; j++)
            {
                document.getElementById('bekezdes').innerHTML += jelenlegi + " ";
            }
        }
        else
        {
            for(let k = 1; k <= jelenlegi; k++)
            {
                document.getElementById('bekezdes').innerHTML += k + " ";
            }

            for(let h = jelenlegi; h <= szam - jelenlegi; h++)
            {
                document.getElementById('bekezdes').innerHTML += jelenlegi + " ";
            }    
            
            for(let l = jelenlegi-1; l > 0; l--)
            {
                document.getElementById('bekezdes').innerHTML += l + " ";
            }
        }
        document.getElementById('bekezdes').innerHTML += "<br>";
        
        if(jelenlegi + 1 <= Math.round(szam/2) && kesz == false)
        {
            jelenlegi++;
            
        }
        else if(jelenlegi == Math.round(szam/2))
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
}
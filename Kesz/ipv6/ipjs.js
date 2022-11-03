function karakterhossz(beszoveg){
    return[...beszoveg].length;
}

var abc = ["g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function ellenorzes(beszoveg){

    for(let i = 0; i < abc.length; i++){

        if(beszoveg.includes(abc[i]) || karakterhossz(beszoveg) > 39 || karakterhossz(beszoveg) < 3){
            return false;
        }
        else{
            return true;
        }
    }
}

function atalakit(){
    let becim = document.getElementById("adatInput").value;
    let splitTomb = [];
    let kimenet = "";
    splitTomb = becim.split(':');
    let nullanelkul = "";
    if(ellenorzes(becim))
    {
        if(karakterhossz(becim) == 39)
        {
            /*for(let i = 0; i < splitTomb.length; i++)
            {
                if(splitTomb[i] == "0000")
                {
                    splitTomb[i] = ":";
                }
            }*/

            for(let i = 0; i < splitTomb.length-1; i++)
            {
                if(splitTomb[i] != "0000"){
                    nullanelkul+=splitTomb[i] + ":";
                }
                else if(splitTomb[i] == "0000" && splitTomb[i+1] != "0000"){
                    nullanelkul += ":";
                }
            }

            document.getElementById("atalakitott").innerText = nullanelkul;
            
            
            for(let i = 0; i < splitTomb.length; i++)
            {
                if(splitTomb[i][0] == '0')
                {
                    splitTomb[i] = splitTomb[i].slice(1,4);  
                    
                    if(splitTomb[i][0] == '0')
                    {
                        splitTomb[i] = splitTomb[i].slice(1,3);

                        if(splitTomb[i][0] == '0')
                        {
                            splitTomb[i] = splitTomb[i].slice(1,2);
                        }
                    }                   
                }               
            }
            
            for(let i = 0; i < splitTomb.length; i++)
            {
                kimenet += splitTomb[i] + ":";
            }

            document.getElementById("atalakitott").innerText += kimenet.slice(0,-1);
        }
        else
        {  
            
            for(let i = 0; i < splitTomb.length; i++)
            {
                if(karakterhossz(splitTomb[i]) < 4)
                {
                    while(karakterhossz(splitTomb[i]) != 4)
                    {
                        splitTomb[i] = "0"+splitTomb[i];
                    }
                }

                if(splitTomb.length < 8)
                {
                    while(splitTomb.length != 8){
                        console.log("Belééép");
                        splitTomb.splice(0,0,"0000");
                    }
                }
            }

            for(let i = 0; i < splitTomb.length; i++)
            {
                kimenet += splitTomb[i] + ":";
            }

            document.getElementById("atalakitott").innerText += kimenet.slice(0,-1);
        }
    }
    else
    {
        alert("Rossz a megadott bemeneti adat");
    }
}
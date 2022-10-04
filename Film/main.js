let n = 0;
function filmek()
{  
    let actionMovies = ["A bolygó neve: Halál", "Mátrix", "Gladiátor", "A szürke ember"];
    let actionYears = ["(1986)", "(1999)","(2000)", "(2022)"];
    let actionPictures = ["bolygo.jpg", "matrix.jpg","gladiator.jpg", "szurkeember.jpg"];
    let thrillerMovies = ["Végtelen (Infinite)", "Behatolás", "Veszélyes", "Mélyvíz"];
    let thrillerYears = ["(2021)", "(2021)", "(2021)", "(2022)"];
    let thrillerPictures = ["vegtelen.jpg", "behatolas.jpg", "veszelyes.jpg", "mely.jpg"];
    let dramaMovies = ["A keresztapa", "A remény rabjai", "Halálsoron", "Low Tide"];
    let dramaYears = ["(1972)", "(1994)", "(1999)", "(2019)"];
    let dramaPictures = ["keresztapa.jpg", "remeny.jpg", "halalsor.jpg", "lowtide.jpg"];
    let fantasyMovies = ["A birodalom visszavág", "Coco", "Szörny Rt.", "így neveld a sárkányodat"];
    let fantasyYears = ["(1980)", "(2017)", "(2001)", "(2010)"];
    let fantasyPictures = ["birodalom.jpg", "coco.jpg", "szorny.jpg", "sarkany.jpg"];

    let act = false, thrill = false, dram = false, fant = false; 


    var table = document.getElementById("show");
    

    if(document.getElementById("actionCheckbox").checked){
        act = true;
        var row = document.createElement('tr');
        for(let i = 0; i < actionMovies.length; i++){    
            let y = document.createElement('td');
            y.innerHTML = actionMovies[i] + " " + actionYears[i] + "<br>";   
            let img = document.createElement('img');
            img.src = "Kepek/"+actionPictures[i];
            y.appendChild(img);      
            row.appendChild(y);
        }   
        table.insertBefore(row, table.firstChild);      
    }
    let idx = 0;
    if(document.getElementById("thrillerCheckbox").checked){
        thrill = true;
        var row = document.createElement('tr');
        for(let i = 0; i < thrillerMovies.length; i++){    
            let y = document.createElement('td');
            y.innerHTML = thrillerMovies[i] + " " + thrillerYears[i] + "<br>";   
            let img = document.createElement('img');
            img.src = "Kepek/"+thrillerPictures[i];
            y.appendChild(img);      
            row.appendChild(y);
        }   
        table.insertBefore(row, table.firstChild); 
        idx++;    
    }

    if(document.getElementById("dramaCheckbox").checked){
        dram = true;
        var row = document.createElement('tr');
        for(let i = 0; i < dramaMovies.length; i++){    
            let y = document.createElement('td');
            y.innerHTML = dramaMovies[i] + " " + dramaYears[i] + "<br>";   
            let img = document.createElement('img');
            img.src = "Kepek/"+dramaPictures[i];
            y.appendChild(img);      
            row.appendChild(y);
        }   
        table.insertBefore(row, table.firstChild); 
    }

    if(document.getElementById("fantasyCheckbox").checked){
        fant = true;
        var row = document.createElement('tr');
        for(let i = 0; i < fantasyMovies.length; i++){    
            let y = document.createElement('td');
            y.innerHTML = fantasyMovies[i] + " " + fantasyYears[i] + "<br>";   
            let img = document.createElement('img');
            img.src = "Kepek/"+fantasyPictures[i];
            y.appendChild(img);      
            row.appendChild(y);
        }   
        table.insertBefore(row, table.firstChild);     
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
}
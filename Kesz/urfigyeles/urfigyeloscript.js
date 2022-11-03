'pragma once'
let response;
let idx = 1;

function kerelem(idxMod){
    
    if(idx + idxMod >= 0){
        idx += idxMod;
    }

    console.log(idx + " " + idxMod);

    var url = "http://www.neowsapp.com/rest/v1/neo/browse?page="+idx+"&size=20&";
    var apiKey = 'PLTWinfXS5REEcq2wHPNNA3Tn41r0hVW8GOCgx7J';
    
    var request = new XMLHttpRequest();
    request.open('GET', url + 'api_key=' + apiKey, true);
    
    
    request.addEventListener('load', function () {
    
        if(request.status >= 200 && request.status < 400){
            response = JSON.parse(request.responseText);
            
            var hely = document.getElementById('objHely');
            var lista = document.createElement('ul');
            lista.id = "objList";

            var head = document.createElement('h1');
            head.innerHTML = "Földhöz 20 legközelebbi égitest:";

            hely.innerHTML = "";
            hely.appendChild(head);
            hely.appendChild(lista);

            console.log(response);
            for (let i = 0; i < response.near_earth_objects.length ; i++) {
                var listaNev = document.createElement('li');    
                var listaAtmero = document.createElement('li');
                var listaLink = document.createElement('li');

                listaNev.innerHTML = response.near_earth_objects[i].name;
                listaAtmero.innerHTML = "Átmérő: ~"+((response.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_max + response.near_earth_objects[i].estimated_diameter.meters.estimated_diameter_max) / 2).toFixed(2);
                listaAtmero.innerHTML += " m";
                listaLink.innerHTML = "<a href=\""+response.near_earth_objects[i].nasa_jpl_url+"\">"+response.near_earth_objects[i].nasa_jpl_url+"</a>";

                listaLink.style = "margin-bottom: 20px;";

                lista.appendChild(listaNev);
                lista.appendChild(listaAtmero);
                lista.appendChild(listaLink);
            }

        }else{
            alert("Hiba a történt a hálózati kérelem során: " + request.statusText);
        }
    
    });
    
    request.send(null);
}
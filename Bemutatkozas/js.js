//there is nothing here yet, you fool >:D

let leirasClick = false;
let ember = 0;

const nevek = ["Szász Áron", "Toldi Gergő", "Wéninger Zalán Tibor"];
const bemutatkozasok = ["Hadd follyon ki a szart", "Ez a Gergő :)", "Ez én vagyok :("];
const kepek = ["kepek/aron.jpg", "kepek/gergo.jpg", "kepek/tibi.jpg"];


function leiras()
{
    let lathatosag = document.getElementById("leiras");

    document.getElementById("leiras").innerText = bemutatkozasok[ember];

    if(leirasClick==false)
    {
        leirasClick=true;

        lathatosag.style ="display: show;"
    }
    else
    {
        leirasClick=false;
        lathatosag.style ="display: none;"
    }
}

function hatra()
{
    let img = document.getElementById("portre");

    if(ember == 0)
    {
        ember = 2;
    }
    else
    {
        ember--;
    }

    document.getElementById("leiras").innerText = bemutatkozasok[ember];

    img.src= kepek[ember];

    document.getElementById("nev").innerText = nevek[ember];
}

function elore()
{
    let img = document.getElementById("portre");

    if(ember == 2)
    {
        ember = 0;
    }
    else
    {
        ember++;
    }

    document.getElementById("leiras").innerText = bemutatkozasok[ember];

    img.src= kepek[ember];

    document.getElementById("nev").innerText = nevek[ember];
}
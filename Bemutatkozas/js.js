//there is nothing here yet, you fool >:D

let leirasClick = false;

let tagClick = true;
let galleriaClick = false;

let tag = 0;
let galleria = 0;

const nevek = ["Szász Áron", "Toldi Gergő", "Wéninger Zalán Tibor", "Nádler Balázs Tanár Úr"];

const bemutatkozasok = ['18 éves, 12.C-s tanuló vagyok a Veszprémi Szakképzési Centrum Ipari Technikumban. Budapesten születtem és Papkeszin élek már 14 éve. Programozni 14 évesen kezdtem el, de már azelőtt is foglalkoztam számítógépekkel, azon belül főképp játékokkal csak. Kedvenc programozási nyelveim a C++/C#, ezekben "mozgom" a legrutinosabban.', "Toldi Gergő vagyok, 18 éves. Tanulmányaimat 2019-ben kezdetem a Veszprémi Szakképzési Centrum Ipari Technikumában. Programozással 14 éves koromban kezdtem foglalkozni, eddigi kedvenc programozási nyelvem a C#. Szabadidőmben szeretek programozni, emellett sportolni. 6 évig birkóztam versenyszerűen, most konditerembe járok. Nagyon szeretek vezetni, a lenyugvó nap fényében kellemes zenével autókázni minden gondomat orvosolja. Szabadidőmet szeretem barátaimmal eltölteni. Hosszútávú céljaim vannak a programozással, a későbbiekben is szeretnék ezzel foglalkozni.", "17 éves vagyok, a Veszprémi Szakképzési Centrum Ipari Technikum 12.C-s tanulója. Veszprémben születtem, Balatonfüreden élek mióta tudom az eszemet. Hobbijaim köze tartozik a 3D modellezés, rajzolás, illetve a programozás. Kedvenc programozási nyelvem a JavaScript, habár bőven van még hova fejlődnöm.", "Ez pedig a Tanár Úr! :D"];

const kepek = ["kepek/aron.jpg", "kepek/gergo.jpg", "kepek/tibi.jpg", "kepek/tanarur.jpg"];

const kepek2 = ["kepek/cica.jpg", "kepek/pad.jpg", "kepek/homokvar.jpg", "kepek/level.jpg", "kepek/wow.jpg"];

const gallNevek = ["Fekete macska", "Őszi naplemente", "Impresszív homokvár", "Falevél", "Kokain"]


function gall()
{
    document.getElementById("portre").src= kepek2[galleria];

    document.getElementById("nev").innerText = gallNevek[galleria];

    galleriaClick = true;
    tagClick = false;

    leirasClick = false;

    document.getElementById("leirogomb").style = "display: none";
    document.getElementById("leiras").style = "display: none";
}

function csapat()
{
    document.getElementById("leirogomb").style = "display: show";

    document.getElementById("leiras").innerText = bemutatkozasok[tag];
        
    document.getElementById("portre").src= kepek[tag];
    
    document.getElementById("nev").innerText = nevek[tag];

    tagClick = true;
    galleriaClick = false;
}

function leiras()
{
    document.getElementById("leiras").innerText = bemutatkozasok[tag];

    if(leirasClick==false)
    {
        leirasClick=true;

        document.getElementById("leiras").style ="display: show;"
    }
    else
    {
        leirasClick=false;
        document.getElementById("leiras").style ="display: none;"
    }
}

function hatra()
{
    if(tagClick == true)
    {
        if(tag == 0)
        {
            tag = 3;
        }
        else
        {
            tag--;
        }
        
        document.getElementById("leiras").innerText = bemutatkozasok[tag];
        
        document.getElementById("portre").src= kepek[tag];
        
        document.getElementById("nev").innerText = nevek[tag];
    }
    
    if(galleriaClick == true)
    {
        if(galleria == 0)
        {
            galleria = 4;
        }
        else
        {
            galleria--;
        }
        
        document.getElementById("portre").src= kepek2[galleria];

        document.getElementById("nev").innerText = gallNevek[galleria];
    }

    
}

function elore()
{
    if(tagClick == true)
    {
        if(tag == 3)
        {
            tag = 0;
        }
        else
        {
            tag++;
        }
    
        document.getElementById("leiras").innerText = bemutatkozasok[tag];
    
        document.getElementById("portre").src= kepek[tag];
    
        document.getElementById("nev").innerText = nevek[tag];
    }

    if(galleriaClick == true)
    {
        if(galleria == 4)
        {
            galleria = 0;
        }
        else
        {
            galleria++;
        }
        
        document.getElementById("portre").src= kepek2[galleria];

        document.getElementById("nev").innerText = gallNevek[galleria];
    }
    
}
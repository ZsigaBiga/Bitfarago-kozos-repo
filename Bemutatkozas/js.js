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

location.style = "scroll-behavior: smooth;";


function gall()
{
    let leirasE = document.getElementById("leiras");
    let portreE = document.getElementById("portre");
    let nevE = document.getElementById("nev");

    document.getElementById("hatraNyil").style = "display: show";
    document.getElementById("eloreNyil").style = "display: show";

    portreE.src= kepek2[galleria];

    nevE.innerText = gallNevek[galleria];

    galleriaClick = true;
    tagClick = false;

    leirasClick = false;

    document.getElementById("leirogomb").style = "display: none";
    leirasE.style = "display: none";
}

function csapat()
{

    let leirasE = document.getElementById("leiras");
    let portreE = document.getElementById("portre");
    let nevE = document.getElementById("nev");

    document.getElementById("hatraNyil").style = "display: show";
    document.getElementById("eloreNyil").style = "display: show";

    document.getElementById("leirogomb").style = "display: show";

    leirasE.innerText = bemutatkozasok[tag];
        
    portreE.src= kepek[tag];
    
    nevE.innerText = nevek[tag];

    tagClick = true;
    galleriaClick = false;
}

function leiras()
{
    let leirasE = document.getElementById("leiras");

    leirasE.innerText = bemutatkozasok[tag];

    if(leirasClick==false)
    {
        leirasClick=true;

        leirasE.style ="display: show;"
    }
    else
    {
        leirasClick=false;
        leirasE.style ="display: none;"
    }
}

function felkTan()
{
    let leirasE = document.getElementById("leiras");
    let portreE = document.getElementById("portre");
    let nevE = document.getElementById("nev");

    document.getElementById("leirogomb").style = "display: none";
    leirasE.style = "display: show";

    leirasE.innerText = bemutatkozasok[3];

    portreE.src = kepek[3];

    nevE.innerText = nevek[3];

    document.getElementById("hatraNyil").style = "display: none";
    document.getElementById("eloreNyil").style = "display: none";

    tagClick = false;
    galleriaClick = false;
}

function hatra()
{
    let leirasE = document.getElementById("leiras");
    let portreE = document.getElementById("portre");
    let nevE = document.getElementById("nev");

    if(tagClick == true)
    {
        portreE.classList.remove('anim');
        portreE.offsetLeft;

        if(tag == 0)
        {
            tag = 2;
        }
        else
        {
            tag--;
        }
        
        portreE.classList.add('anim');

        setTimeout(() => {

            leirasE.innerText = bemutatkozasok[tag];
            
            portreE.src= kepek[tag];
            
            nevE.innerText = nevek[tag];

            location.href ="#";
            location.href ="#leiras";
        }, 1000);
    }
    
    if(galleriaClick == true)
    {
        portreE.classList.remove('anim');
        portreE.offsetLeft;

        if(galleria == 0)
        {
            galleria = 4;
        }
        else
        {
            galleria--;
        }
        
        portreE.classList.add('anim');

        setTimeout(() => {
            
            portreE.src= kepek2[galleria];
    
            nevE.innerText = gallNevek[galleria];
        }, 1000);
    }    
}

function elore()
{
    let leirasE = document.getElementById("leiras");
    let portreE = document.getElementById("portre");
    let nevE = document.getElementById("nev");

    if(tagClick == true)
    {
        portreE.classList.remove('anim');
        portreE.offsetLeft;

        if(tag == 2)
        {
            tag = 0;
        }
        else
        {
            tag++;
        }

        portreE.classList.add('anim');
    
        setTimeout(() => {
            
            leirasE.innerText = bemutatkozasok[tag];
        
            portreE.src= kepek[tag];
        
            nevE.innerText = nevek[tag];

            location.href = "#";
            location.href = "#leiras";
        }, 1000);


    }

    if(galleriaClick == true)
    {
        let portreE = document.getElementById("portre");
        let nevE = document.getElementById("nev");

        portreE.classList.remove('anim');
        portreE.offsetLeft;

        if(galleria == 4)
        {
            galleria = 0;
        }
        else
        {
            galleria++;
        }

        portreE.classList.add('anim');
        
        setTimeout(() => {
            
            portreE.src= kepek2[galleria];
    
            nevE.innerText = gallNevek[galleria];
        }, 990);
    }
}
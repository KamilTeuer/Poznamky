

/*
let paragraphs = document.querySelector("p")
// paragraphs.forEach(function(oneParagraph){
// })
// console.log(paragraphs)


/*
ZKRATKY V JAVASCRIPTU:

CTRL + ´    -   Jednořádkový komentář //
||      -   SHIFT + '' (Anglická klávesnice)
/* XXX Víceřádkový komentář
" "     -   Mezera
=       -   Rovná se slouží k přiřazení! Pravá strana se rovná levé straně.
==      -   Rovná se. Laxní rovná se. Nehlídá datový typ!!!
===     -   Rovná se. Striktní. Drsní. Hlídá to i datový typ!!!
sign    -   znak
&&      -   a zároveň   =    if (ageDavid > 18 && ageDavid < 30)
            Musí být splněny obě podmínky.
||      -   nebo        =    if (nameDavid == "David" || ageDavid > 18)
            Musí být splněna alespoň jedna podmínka. (Nemusí platit všechny.)
!=      -   Nesmí se rovnat !
DRY     -   Do not repeat yourself (Neopakovat se)
'' nebo ""  -   Prázdný string (text)
employees   -   zaměstnanci
employees.length;
while   -   Dokud

OOP     -   Objektově orientované programování.


falsy = undefined, 0, '' nebo "", NaN, null
truthy = to, co není falsy 


// Jednořádkový komentář.
/* Víceřádkový komentář
Víceřádkový komentář
Víceřádkový komentář

CHANGE HAMBURGER TO CROSS VICE VERSA (Vice Versa = a naopak)
Dvě rovná se, je v programovacím jazyku jako "ROVNO". 
fadeIn = objevit se / fadeOut = zeslábnutí / fadeToggle = přepínač (toggle)  - jsou i různé toggle: SlideToggle ...




******************************* Vytvoření přes JS ****************************************

const newParagraph = document.createElement("p")
newParagraph.textContent = "Text nového odstavce"
document.querySelector("h1").appendChild(newParagraph)

const newDiv = document.createElement("div")
document.querySelector("h1").appendChild(newDiv)

const secondParagraph = document.createElement("p")
secondParagraph.textContent = "Nový paragraph"
newDiv.appendChild(secondParagraph)


******************************* REMOVE INCLUDES ****************************************

let paragraphs = document.querySelectorAll("p")
paragraphs.forEach(function(oneParagraph){
    if(oneParagraph.textContent.toLowerCase().includes("nakrmit")){
        oneParagraph.remove()
    }
})

***********************************************************************


************************* DOM Document object model a napojení na HTML a CSS (67. moderní JS) *************************



************************* Pole objektů a řazení = metoda sort (66. moderní JS) *************************

let books = [{
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a vězeň z Azkabanu",
    author: "J. K. Rowlingová",
    published: 1999
}, {
    title: "Harry Potter a tajemná komnata",
    author: "J. K. Rowlingová",
    published: 1998
}]

// Řazení běžného pole:
let names = ["Anna", "Radmila", "Cecílie", "Markéta"]
names.sort()    // Seřadí jména v poli podle prvního písmene.
console.log(names)

// U čísel nefunguje - jde 1, 15, 2, 20, 27, 3
let numbers = [15, 1, 3, 2, 19, 20, 27]
numbers.sort()  // Seřadí podle všech čísel.
console.log(numbers)

// Řazení pole objektů:
let sortsArray = function(arrayBooks){
    arrayBooks.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase < a.title.toLowerCase){
            return 1
        } else {
            return 0
        }
    })
}
sortsArray(books)
console.log(books)


// Řazení pole objektů čísel:
let sortsArray2 = function(arrayNumbers){
    arrayNumbers.sort(function(a, b){
        if (a < b) {
            return -1
        } else if (b < a){
            return 1
        } else {
            return 0
        }
    })
}
sortsArray2(numbers)
console.log(numbers)


************************* Filtrování kriminálníků podle SPZ (65. moderní JS) *************************


let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

let witness = prompt("Zadej část SPZ, které jsi viděl")

// V arrayResults při zadání 22 jsou dva objekty a proto výpis musíme zadat cyklem!
let arrayResults = criminals.filter(function(oneSuspect){
    let tryToFind = oneSuspect.licencePlate.toLowerCase().includes(witness)
    return tryToFind
})

arrayResults.forEach(function(oneSuspect){
    console.log(`Jméno: ${oneSuspect.firstName}`)
    console.log(`Přijmení: ${oneSuspect.secondName}`)
    console.log(`Datum narození: ${oneSuspect.birth}`)
    console.log(`SPZ: ${oneSuspect.licencePlate}`)
    console.log(`Adresa: ${oneSuspect.address}`)
    console.log(`Město: ${oneSuspect.city}`)
    console.log("---------------------------")
})



************************* FILTER : Pole objektů a jejích filtrování (64. moderní JS) includes *************************


// Filtrování na běžném poli: použití s includes - všímá si velkých a malých písmen (Na, na)
let names = ["Anna", "Jana", "Naděžda", "David"]

let arrayResults = names.filter(function(oneName){
    let weTryFind = oneName.toLowerCase().includes("na")
    return weTryFind    // navrací hodnotu true ,nebo false
}) 
console.log(arrayResults)


let books = [{
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajemná komnata",
    author: "J. K. Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a vězeň z Azkabanu",
    author: "J. K. Rowlingová",
    published: 1999
}, {
    title: "Životopis Rowlingové",
    author: "David",
    published: 2000
}]

Filtrování na poli objektů:

Vyhledá v objektech všechny authory, kteří mají v názvu "ling"
let arrayResults2 = books.filter(function(oneBook){
    let weTryFind2 = oneBook.author.toLowerCase().includes("ling")
    return weTryFind2
})
Vypíše ze všech objektů, kteří mají v autorovi "ling" jejich title (názvy)
arrayResults2.forEach(function(oneResult){
    console.log(oneResult.title)
})

Filtrování na poli objektů 2: Vyhledávání jak v title, tak i v author
let findLetters = "ling"
let arrayResults2 = books.filter(function(oneBook){
    let weTryFind2 = oneBook.author.toLowerCase().includes(findLetters)
    let weTryFind3 = oneBook.title.toLowerCase().includes(findLetters)
    return weTryFind2 || weTryFind3
})
arrayResults2.forEach(function(oneResult){
    console.log(oneResult.title)
})





************************* Pole objektů a metoda Find (63. moderní JS) *************************

let books = [{
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajemná komnata",
    author: "J. K. Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a vězeň z Azkabanu",
    author: "J. K. Rowlingová",
    published: 1999
}]
//Metoda find a pole objektů:
let year = books.find(function(oneBook){
    if (oneBook.published === 1998){
        return oneBook
    }
})
console.log(year.title)


// Metoda find nalezne první prvek, který vyhovuje podmínce a vypíše hodnotu a ukončí funkci.
let pole = [2, 5, 23, 14, 7]
let number = pole.find(function(myNumber){
    return myNumber > 6
})
console.log(number)


************************* Pole objektů - hledání v databázi (62. moderní JS) *************************

let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    address: "Stevardská 38",
    city: "České Budějovice"
}]

let suspect = prompt("Zadejte své křestní jméno:")

let result = criminals.findIndex(function(oneSuspect){
    return oneSuspect.firstName === suspect
})
let ourSuspect = criminals[result]

console.log(`Jméno: ${ourSuspect.firstName}`)
console.log(`Příjmení: ${ourSuspect.secondName}`)
console.log(`Rok narození: ${ourSuspect.birth}`)
console.log(`Adresa: ${ourSuspect.address}`)
console.log(`Město: ${ourSuspect.city}`)

************************* Pole objektů a metoda findIndex (61. moderní JS) *************************

let books = [{
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajemná komnata",
    author: "J. K. Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a vězeň z Azkabanu",
    author: "J. K. Rowlingová",
    published: 1999
}]


findIndex na poli objektů:   Najde 1999 v objektu

let resultArray = books.findIndex(function(oneBook){
    return oneBook.published === 1999       
})
console.log(resultArray)


findIndex na běžném poli: vrátí index čísla, které najde za dané podmínky.
Nalezne ale jenom první schodu dle podmínky a dále nepokračuje.

let pole = [2, 5, 23, 14, 7]
let result = pole.findIndex(function(number){
    return number > 10
}) 
console.log(result)



************************* Pole objektů a metoda IndexOf (60. moderní JS) *************************
Vytvoření proměnné a objektů se atributy neukládají do proměnné, ale někde na uložiště, kde proměnné
jenom ukazují na uložené atributy.
indexOf nelze použít na pole objektů !!!

let books = [{}, {
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajemná komnata",
    author: "J. K. Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a vězeň z Azkabanu",
    author: "J. K. Rowlingová",
    published: 1999
}]
console.log(books[1].author)


console.log(books.indexOf({}))  //  Vypíše -1, protože prázdný index přesně neodpovídá hledanému indexu.

let data = {
    title: "Harry Potter a kámen mudrců",
    author: "J. K. Rowlingová",
    published: 1997
}

Změní se titul jak u data2, tak i u data, protože data a data2 jenom odkazují
na atributy, které jsou uložené.

let data2 = data
data2.title = "New title"
console.log(data)
console.log(data2)





************************* Prohledávání Pole a metoda IndexOf (59. moderní JS) *************************

IndexOf hledá zadaný výraz (String)
Pokud se vypíše -1, tak zadaná hodnota, nebyla nalezena v poli.
POZOR: Řeší to i malá a velká písmena !!!

let employees = ["Kamil", "David", "Radek", "Markéta"]
console.log(employees.indexOf("Radek")) 

if (employees.indexOf("Zlatan") === -1) {
    console.log(`Hledané jmnéno nebylo nalezeno`)
} else {
    console.log(`Hledané jméno bylo nalezeno.`)
}

************************* Cyklus For (58. moderní JS) *************************

let toDo = ["Sestříhat video", "Uklidit pokoj", "Vyluxovat"]
for(let i = 0; i<toDo.length; i++){
    console.log(`${i+1}. ${toDo[i]}`)
}
Nebo polem forEach:
toDo.forEach(function(activity, index){
    console.log(`${index+1}. ${activity}`)
})


let pole = []
for(let i = 0;i<=4;i++){
    pole.push(i)
    // pole[i] = i+1    Ale to se bere od 1 (i+1=1)
}
console.log(pole)

************************* Pole cyklus a forEach (56. moderní JS) *************************

let toDo = ["Vyvenčit psa", "Kupit kečup", "Vymalovat pokoj", "Udělat si svačinu"]
toDo.forEach(function(activity, index){
        console.log(`${index+1}. ${activity}`)
})

************************* Pole cyklus a forEach (55. moderní JS) *************************

forEach     =   Jede tolikrát, kolik máme prvků v poli  

let employees = ["Kamil", "David", "Markéta", "Radek"]

employees.forEach(function(){
    console.log("Zkouším")
})
Podívá se na nultý parametr ("Kamil") a vypíše ho. Následuje první, druhý..
employees.forEach(function(person){
    console.log(person)
})

employees.forEach(function(person, index){
    console.log(`Na ${index} místě je ${person}`)
})

************************* Prompt pole (54. moderní JS) *************************

let pole = []
for(i=0;i<3;i++){
    pole.push(prompt("Zadejte své jméno")) // Push přidává hodnoty do pole za sebou.
}
for(i=0;i<3;i++){
    pole.unshift(prompt("Zadej poslední jména")) // Unshift přidává hodnoty do pole na první místo.
}
console.log(pole)

************************* Splice a metody (53. moderní JS) *************************


let mySecondArray = ["Nultý", "První", "Druhý", "Třetí", "Čtvrtý"]
mySecondArray.splice(1,1)
console.log(mySecondArray)
console.log(mySecondArray.splice(1,2))  //  Vybere první prvek ("Jedna") a odstraní jeden prvek






************************* Náhodné vygenerování hesla (52. moderní JS) *************************

let password = ["První heslo", "Druhé heslo", "Třetí heslo"]
console.log(password[Math.ceil(Math.random()*password.length-1)])

************************* Házení kostkou (46. moderní JS) *************************
Bez použití cyklů:

let number1 = Math.ceil(Math.random()*6)
let number2 = Math.ceil(Math.random()*6)
let number3 = Math.ceil(Math.random()*6)
let number4 = Math.ceil(Math.random()*6)
let number5 = Math.ceil(Math.random()*6)
let number6 = Math.ceil(Math.random()*6)

let sum = number1 + number2 + number3 + number4 + number5 + number6
console.log(`Součet je: ${sum}`)
if (sum >= 25){
    console.log(`!!! Vítěz !!!`)
} else {
    console.log(`Zkus znova své štěstí.`)
}


S použitím cyklu:

let soucet = 0
for (i = 0; i < 6; i++){
    let sum = Math.ceil(Math.random()*6)
    soucet = soucet + sum
}
console.log(`Součet je: ${soucet}`)
if (soucet >= 25){
    console.log(`!!! Vítěz !!!`)
} else {
    console.log(`Zkus znova své štěstí.`)
}


************************* Template String *************************

let myName = "Kamil Teuer"
let age = 33

console.log("Moje jméno je " + myName + " a je mi " + age + " let.")
console.log(`Ahoj, moje jméno je ${myName} a je mi ${age} let.`)

let pozdrav = function(firstName, lastName){
    console.log(`Ahoj, jmenuji se ${firstName} a mé příjmení je ${lastName}`)
}
pozdrav("Kamil", "Teuer")

************************* (Funkce více parametrů a defaultní hodnota parametru - 28.moderní JS) *************************

let game = function (name = "Anonymní", score = 0){
    console.log(name)
    console.log(score)
}
game("Kamil", 50)

*************************  *************************

function mojeFunkce(){
    var jmeno = "Kamil";
        function zobraz(){
            console.log(jmeno);     // Je důležité mít console.log ve funkci a né mimo.
        }
    zobraz();
};
mojeFunkce();

************************* 8. *************************
let firstName = "Kamil"
let age = 33
console.log("Jmenuji se " + firstName + " a je mi " + age + " let.")
console.log("Za pět let mi bude " + (age + 5) + " let.")



******************************************************* VÝPIS TEXTU Z INPUTU DO ODSTAVCE (P.JS 13) ********************

let input = document.querySelector("input");
let output = document.getElementById("odstavec");

input.addEventListener("input",function(event){
    output.textContent = event.target.value;
});

***********************************************************

// Vytvořte funkci pozdrav, která bude vypisovat do konsole text "Ahoj, jak se máš?".
// Postupně ji vypíšete tak, že:
// 1. bude vypisovat se zpožděním 1 vteřiny,
// 2. bude se vypisovat rychleji než v 1.,
// 3. bude se vypisovat pomaleji než v 1.


let input = document.querySelector("input");
let output = document.getElementById("odstavec");

input.addEventListener("input",function(event){
    output.textContent = event.target.value;
});

************************************************************

function pozdrav(){
    console.log("Ahoj, jak se máš?");
    setTimeout(pozdrav,2000);
}
pozdrav();


const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "Ahoj, jak se máš?";
let idletter = 1;
let speed = 1000 / speedOr.value;

// console.log(speedOr);

function printText(){
    heading.innerText = text.slice(0,idletter);

    idletter++;

    setTimeout(printText,speed);

    if (idletter > text.length) {
        idletter = 1;
        }
}

speedOr.addEventListener("input",function(event){
    speed = 1000 / event.target.value;
});


printText();



************************* RANDOM a zaokrouhlování *************************

let number = 3.65789587
console.log(number.toFixed(3))          // Zaokrouhlení na 3 desetinná čísla.
console.log(Math.round(3.5))            // Zaokrouhlení na celá čísla (klasické)
console.log(Math.floor(3.9))            // Zaokrouhlení vždy dolů.
console.log(Math.ceil(number))          // Zaokrouhlení vždy nahoru.
console.log(Math.random())              // Náhodné číslo

// Náhodné číslo z intervalu:
let min = 15
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))  //  Náhodné číslo od min a rozmezí 6 čísel se zaokrouhlením dolů.
console.log(Math.floor(Math.random()* 5 + 100))     // Náhodné číslo od 100 až po 104.

************************* Úprava textu *************************

let firstName = "Kamil"
console.log(firstName.toUpperCase())    // Vypsání do console velkými písmeny. (funkce)
console.log(firstName.toLowerCase())    // Vypsání do console malými písmeny. (funkce)
// Zahrnuje:
let sentense = "Kamil se rád učí novým věcem."
let word = "Kamil"
console.log(sentense.includes(word))    // Vyhledá v sentense proměnnou word ("Kamil")

Úprava textu v consoli přes JavaScript:
console.log("%c Tady je hlavní text", "color: red; background-color: #f1ffd3; font-size: 60px")

*************************  *************************

let vladniNarizeni = false
let school = {
    type: "Základní škola",
    street: "Květinová 555",
    city: "Ostrava",
    capacity: 200,
    open: function(){
        console.log(`Dle vládního nařízení je ${school.type} ${school.city} otevřená pro ${school.capacity} dětí.`)
    },
    closed: function(){
        console.log(`Dle vládního nařízení je ${school.type} ${school.city} zavřená pro všechny děti.`)
    }
}

if (vladniNarizeni) {
    school.open()
} else {
    school.closed()
}}

************************* Automatický text (Pokročilý JS 9) *************************
Proměnné:
const   =   Konstanta, která bude mít pořád stejnou hodnotu. Například Pí.
var     =   Pro proměnné u kterých očekáváme, že se budou měnit. (Zastaralé)
let     =   To samé jako "var", ale moderně se už používá jenom "let". (FRESH :D)

Variable shadowing  =   Definování stejné proměnné v potomcích.

slice   =   krájet (například citrón na plátky)
inkrementace    =   Zvyšování čísla o jedničku (idletter++)
setTimeout  =   spustí funkci se zpožděním speed (speed není tady rychlost, ale zpoždění)

const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "Kamil zkouší nové triky v JavaScriptu.";
let idletter = 1;
let speed = 300 / speedOr.value;

function printText() {
    heading.innerText = text.slice(0,idletter);

    // Zvýší idletter vždy o 1
    idletter++;

    // Vyresetuje idletter zpět na 1 a text se začne vypisovat znovu
    if (idletter > text.length) {
        idletter = 1;
    }


    // Spustí funkci printText se zpožděním speed
    setTimeout(printText,speed);
}

printText();

speedOr.addEventListener("input", function (event) {
        speed = 300 / event.target.value;
        // console.log(event.target.value);     =  bude vypisovat hodnoty dané na rychlosti.
});









************************ OOP - CALL , APPLY , BIND (86) *************************

******* Call    =   Umožňuje půjčit si metodu, kterou má jiný objekt.

CALL s parametrem:

var david = {
    name: "David",  
    yearBirth: 1988,
    job: "hacker",
    calculateAge: function(){
        console.log(2021 - this.yearBirth);
    }
}
david.calculateAge();

var anna = {
    name: "Anna",
    yearBirth: 2000,
    job: "programer"
}
david.calculateAge.call(anna);


Call bez parametru:

var david = {
    name: "David",
    job: "hacker",
    calculateAge: function(yearBirth){
        console.log(2021 - yearBirth);
    }
}
david.calculateAge(1988);

var anna = {
    name: "Anna",
    job: "programer"
}
david.calculateAge.call(anna,2000);




******* Apply   =   Stejné jako Call, jen argumenty potřebuje jako pole.

david.calculateAge.apply(anna,[2000]);      // nebude fungovat, protože nemáme hodnoty jako pole


******* Bind    =   Umožňuje zadat jeden argument a až poté zadat další argument.


var david = {
    calculateAge: function(name, yearBirth){
        return name + " " + (2021 - yearBirth);
    }
}
var anna = {
    name: "Anna",
    job: "programer"
}
var test = david.calculateAge.bind(anna, "Anna");
console.log(test(2000));



************************ OOP - CLOSURE (84-85) *************************


var test = function mojeFunkce(){  
    var x = 66;
    return x;
}();
console.log(test);

************************

var test = function mojeFunkce(){  
    var x = 66;
    return {
        verejne: function(){
            return x;
        }
    }
}();
console.log(test.x);
console.log(test.verejne());    // Tohle jediné funguje
console.log(x);




************************ OOP - LEXICAL SCOPING (83) *************************
Scope           =   Rozsah
Global scope    =   Například promměná, která může být použitá ve všem.
Local scope     =   Například proměnná, která je použitá jenom ve funkci a nelze jí použít mimo funkci.


1) Nižší funkce má přístup k vyšší funkci.
function mojeFunkce(){
    var jmeno = "Kamil";
        function zobraz(){
            console.log(jmeno);     // Je důležité mít console.log ve funkci a né mimo.
        }
    zobraz();
};
mojeFunkce();

2) Vypsat mimo funkce něco, co obsahuje funkce NELZE (Je v jiné hlavní funkci).
function mojeFunkce(){
    var jmeno = "Kamil";
        function zobraz(){
            console.log(jmeno);
        }
    zobraz();
};
console.log(jmeno);     // NEFUNGUJE




************************ OOP - IIFE funkce (82) *************************


//BĚŽNÁ FUNKCE: 
function hra(){
    var score = Math.ceil(Math.random()*10);
    console.log(score);
}
// hra();

// IIFE = IMMEDIATELY INVOKED FUNCTION EXPRESSION = 
// FUNKCE, KTERÁ SE OKAMŽITĚ SPUSTÍ PŘI NAČTENÍ STRÁNKY.

(function hra2(){
    var score = Math.ceil(Math.random()*10);
    console.log(score);
})();
// Přidáním obalení funkce do závorek.

// IIFE FUNKCE s parametrem (jméno "Anna"):
(function hra2(jmeno){
    var score = Math.ceil(Math.random()*10);
    console.log(jmeno + " vaše score je: " + score);
})("Anna");



************************ OOP - FUNKCE VRACEJÍCÍ FUNKCI (81) *************************


function pohovorOtazky(prace){
    if(prace === "hacker") {
        return function(jmeno) {
            console.log(jmeno + " : Jaké znáte hackerské programy?");
        }
    } else if (prace === "programator") {
        return function(jmeno) {
            console.log(jmeno + " : Jaké znáte programovací jazyky?");
        }
    } else {
        return function(jmeno) {
            console.log(jmeno + " : Jaké máte zaměstnání?");
        }
    }    
}

var otazka1 = pohovorOtazky("hacker");
otazka1("Kamil");

var otazka2 = pohovorOtazky("programator");
otazka2("David");

var otazka3 = pohovorOtazky("učitel");
otazka3("Anna");

// Další zápis: pohovorOtazky("hacker")("Markus");




Vysvětlení:

//deklarace proměnné
var otazka1;

Funkce "pohovorOtazky(prace)" vrátí dle zadané práce (hacker, programator, ucitel) 1 ze 3 definic 
nepojmenované funkce "return function(jmeno){...}", a ta se uloží do proměnné "otazka1". 
otazka1 = pohovorOtazky("hacker"); // return vyhodí definici funkce "hacker"

Od té chvíle se začne proměnná "otazka1" chovat jako funkce "otazka1(jmeno)"
a má definici "hacker" 
otazka1(David);

// A každý, kdo teď bude volán funkcí "otazka1(jmeno)", bude hacker ;)
otazka1(Anna); // i Anna
otazka1(Jana); // i Jana

 Asi matou ty 3 možné definice z nichž jen 1 je přiřazena do proměnné pomocí return.
A to, že funkce "otazka1(jmeno)" po vytvoření už nespolupracuje s funkcí "pohovorOtazky(prace)" 




************************ VÝPIS VĚKU A JESTLI JE PLNOLETÝ *************************
************************ FUNKCE JAKO ARGUMENT *************************


var roky = [1950, 2003, 1988, 1961, 1956, 2017];

function poleVypocet(pole,funk){     // Obecná funkce, která platí pro 1. i 2. funkci !!!
    var vyslednePole = [];
    for(var i = 0; i < pole.length; i++)
        vyslednePole.push(funk(pole[i]));
    return vyslednePole;
}

// 1.funkce

function vypoctiVek(neco){
    return 2021 - neco;
}

var vek = poleVypocet(roky,vypoctiVek);
// ROKY nahradí slovo POLE
// vypoctiVek nahradí slovo FUNK
console.log(vek);

// 2. funkce

function jePlnolety(neco2){
    return neco2 >= 18;
}

var vysledek = poleVypocet(vek, jePlnolety);

console.log(vysledek);





************************ FUNKCE JAKO ARGUMENT *************************

var age = 30;
var object = {
    name: "David",
    city: "České Budějovice"
};

function change(a,b) {
    a = 60;
    b.city = "Praha";
}

change(age,object);

console.log(age);           // V jednoduchém se nezmění věk z 30 na 60 !!!
console.log(object.city);   // V objectu se změní České Budějovice na Prahu.


************ FUNKCE, KTERÉ V JAVASCRIPTU NEFUNGUJÍ LOGICKY*********************


var age = 30;
var object = {
    name: "David",
    city: "České Budějovice"
};

function change(a,b) {
    a = 60;
    b.city = "Praha";
}

change(age,object);

console.log(age);           // V jednoduchém se nezmění věk z 30 na 60 !!!
console.log(object.city);   // V objectu se změní České Budějovice na Prahu.



************************************************************************************

// Primitivní datové typy = string, number, boolean, undefined, null.

var name = "David";     // string
var age = 33;           // number
var adult = false       // boolean
var eyeColor;           // undefined


// Objekty = vše ostatní !!!

var a = 10;     // a je 10
var b = a;      // b je 10
a = 20          // a je 20
console.log(a);
console.log(b);

var object1 = {
    name: "David",
    age: 33,
    job: "Hacker",
}

var object2 = object1;

object1.name = "Anna";
object1.age = 60;
object1.job = "Prodavačka"

console.log(object1);
console.log(object2);

************************************************************************************

var personSchema = {
    ageCalculator: function() {
        console.log(2021 - this.yearBirth);
    }
};

DVA ZPŮSOBY ZÁPISU ATRIBUT:
1)
var david = Object.create(personSchema);
    david.name = "David";
    david.yearBirth = 1988;
    david.job = "hacker";
2)
var anna = Object.create(personSchema,{
    name: {value: "Anna"},
    yearBirth: {value: 1980},
    job: {value: "žádná práce"}
});

console.log(david.name);
console.log(anna.name);
console.log(david.job);
anna.ageCalculator();
david.ageCalculator();



************************************************************************************

ATRIBUT
METODA
INSTANCE, OBJECTY
TŘÍDA, KONSTRUKTOR
PROTOTYPE


// TŘÍDA, KONSTRUKTOR (CELÉ)
var Car = function(wheels, color, brand, tank, distance) {
    this.wheels = wheels;       // ATRIBUT
    this.color = color;         // ATRIBUT
    this.brand = brand;         // ATRIBUT
    this.tank = tank;           // ATRIBUT
    this.distance = distance;   // ATRIBUT
    this.calculateDistance = function(){    // METODA
        return this.tank * this.distance;
    }
}

// PROTOTYPE
Car.prototype.type = "řízeno lidmi";

// INSTANCE, OBJECTY
var car1 = new Car (4, "red", "Toyota", 40, 6);
var car2 = new Car (4, "blue", "Huyndai", 30, 5);
var car3 = new Car (4, "green", "skoda", 35, 5);


console.log(car1.wheels);
console.log(car1.calculateDistance());
console.log(car2.type);

console.log(car1.hasOwnProperty("distance"));
console.log(car3.type);



************************************************************************************

var year = 2021;
var Person = function(name, yearBirth, job) {
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
};
Person.prototype.calcAge = function(){
    return year - this.yearBirth;
};
var david = new Person ("David", 1988, "programátor");
console.log(david.calcAge());

************************************************************************************

var Person = function(name, yearBirth, job) {
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
    this.calcAge = function(){
        return year - this.yearBirth; 
    };
};


************************************************************************************


// OOP  =   OBJEKTOVĚ ORIENTOVANÉ PROGRAMOVÁNÍ
// KONSTRUKTOR  =   Šablona

// TVORBA OBJEKTŮ BEZ KONSTRUKTORU:

var david = {
    name: "David",
    yearBirth: 1988,
    job: "programátor"
}


var anna = {
    name: "Anna",
    yearBirth: 2000,
    job: "Designer"
}


var markus = {
    name: "Markus",
    yearBirth: 1955,
    job: "Sailor"
}

************************************************************************************

// TVORBA OBJEKTŮ S KONSTRUKTOREM:

// Objekt konstruktor se vždy píše s velkým písmenem (Person).
// ATRIBUTY =   vlastnosti, nebo data
// METODY   =   schopnosti
 
var year = 2021;

var Person = function(name, yearBirth, job) {
    this.name = name;
    this.yearBirth = yearBirth;
    this.job = job;
    this.calcAge = function(){
        return year - this.yearBirth; 
    };
    this.adult = function() {
        console.log("Je on/ona už dospělý? " + (year - this.yearBirth > 18));
    }

}
var david = new Person ("David", 1988, "programátor");
var anna = new Person ("Anna", 2000, "Designer");
var markus = new Person ("Markus", 1955, "Sailor");

console.log(david.calcAge());
console.log(markus.calcAge());

david.adult();  
anna.adult();
markus.adult();


// console.log(david.name);
// console.log(david.yearBirth);
// console.log(david.job);
// console.log(anna.name);
// console.log(anna.yearBirth);
// console.log(anna.job);
// console.log(markus.name);
// console.log(markus.yearBirth);
// console.log(markus.job);








*********************** Math.random(); - náhodný ***********************

Při psaní do console šipkou nahoru nahodím poslední zadaný příkaz.
Math.floor(5.9);    -   Zaokrouhluje pořád dolů (floor = podlaha)
Math.round(5.2);    -   Matematické zaokrouhlování
Math.ceil(5.1);     -   Zaokrouhluje pořád nahoru!

Math.ceil(Math.random()*6);     -   Použití jako na kostce 1-6


*********************** praseInt - přehodí string (text) na number (číslo) ***********************

POHYB PO OBRAZOVCE:


var cube = document.querySelector("#cube");
var style = getComputedStyle(cube);
document.body.addEventListener("keydown",myFunction);
function myFunction(event) {
    if(event.key === "ArrowRight") {
        var oldLeft = parseInt(style.left);
        var newLeft = oldLeft + 20;
        cube.style.left = newLeft + "px";
    }
    else if(event.key === "ArrowLeft") {
        var oldLeft = parseInt(style.left);
        var newLeft = oldLeft - 20;
        cube.style.left = newLeft + "px";
    }
    else if(event.key === "ArrowUp") {
        var oldTop = parseInt(style.top);
        var newTop = oldTop - 20;
        cube.style.top = newTop + "px";
    }
    else if (event.key === "ArrowDown") {
        var oldTop = parseInt(style.top);
        var newTop = oldTop + 20;
        cube.style.top = newTop + "px";
    }
}


*********************** KEYBOARDS EVENTS ***********************

keydown     -   I při držení, pořád se spouštějí funkce.
keyup       -   Jen jednou za klik při zvednutí prstu.
keypress    -   Stejné jako keydown.


document.body.addEventListener("keypress",myFunction);
function myFunction() {
    console.log("Klávesa byla stisknuta");
}

document.body.addEventListener("keypress",myFunction);
function myFunction(event) {
    console.log(event);
}

document.body.addEventListener("keypress",myFunction);
function myFunction(event) {
    console.log(event.key);
}

document.body.addEventListener("keypress",myFunction);
function myFunction(e) {
    console.log(e.key);
}



*********************** PŘIDÁNÍ DO "JSEM TU NOVÝ" DO TABULKY ***********************

var button = document.getElementsByClassName("btn");

button[0].addEventListener("click",clickMe);

function clickMe() {
    var myList = document.getElementById("list");
        // console.log(myList);

    var newItem = document.createElement("li");
        // console.log(newItem);

    newItem.textContent = "Jsem tu nový";

    myList.appendChild(newItem);
}

*********************** EVENT - událost pro získávání informací ***********************

NEVÍM PROČ, ALE KROMĚ KLIKNUTÍ NEFUNGUJÍ OSTATNÍ FUNKCE :(

click       -   kliknutí
dblclick    -   dvojité kliknutí
wheel       -   kolečko myši
mousedown   -   kliknete na tlačítko myši směrem dolů
mouseenter  -   najedeme myší
mouseleave  -   odejetí myši
mousemove   -   jakékoli pohnutí myši
mouseover   -   myší nad elementem



Event - zpráva, která se posílá kódu, že se na webu něco stalo. Např. bylo na něco kliknutí,
scrolovalo se, změna velikosti okna, kliknuto na určitou klávesu atd.

Event listener -    Funkce, která čeká na určitý event a pak něco udělá. 
                    Rovnou si pustí funkci welcome automaticky.
CallBack funkce -   Zpětně volající funkce. 

    function welcome() {
        console.log("Vítejte u nás");
    }
    document.querySelector("h1").addEventListener("click",welcome);

Funkce musí mít závorky. Jinak když se zavolá, tak se nic nestane.



Anonymní funkce:

document.querySelector("h1").addEventListener("click",function(){
    console.log("Vítejte u nás");
});


************************************************************************************

var name = prompt("Ahoj, jak se jmenuješ?");

if (name === "Kamil") {
    document.querySelector("h1").textContent = "Ahoj " + name;
} else {
    document.querySelector("h1").textContent = "Tak tebe neznám.";
}

*********************** createElement - Vytvoření nového elementu ***********************
*********************** insertBefore ***********************

Vložení span potomka dovnitř html kódu:

var newSpan = document.createElement("span");
var myH1 = document.querySelector("h1");
myH1.appendChild(newSpan,myH1);


Vložení span potomka před h1:

document.body.insertBefore(newSpan,myH1);


*********************** firstElementChild a lastElementChild ***********************


var text1 = document.getElementById("list").firstElementChild.textContent;
// var text1 = document.getElementById("list").lastElementChild.textContent;
console.log(text1);



*********************** JAK SE DOKTNOUT PŘÍMO ODKAZU V HTML  ***********************



.src / .alt :
var text1 = document.querySelector("a").hasAttribute("href");
console.log(document.querySelector("img").src);
console.log(document.querySelector("img").alt);


Výstup v consoly bude "TRUE" - protože hasAttribute vypíše, jestli Má, nebo Nemá atribut.
    var text1 = document.querySelector("a").hasAttribute("href");
    console.log(text1);


*********************** textContent vs. innerText vs. innerHTML  ***********************

textContent = Vypisuje pouze vnitřní text.      //  Je bezpečnější proti XSS útokům než innerText
    var text = document.querySelector("p").textContent;
    console.log(text);

innerText   = Vypisuje pouze vnitřní text.
    var text2 = document.querySelector("p").innerText;
    console.log(text2);

innerHTML   = Vypisuje vnitřní text, včetně vnitřního HTML, pokud tam nějaké je.
    var html = document.querySelector("p").innerHTML;
    console.log(html);



*********************** ZMĚNA Z SCRIPTU DO CSS ***********************

!!! GET ELEMENTS BY CLASS NAME !!!
!!! GET ELEMENT BY ID !!!


// var mojeTridy = document.getElementsByClassName("prvni");
Dvě varianty zápisu: 
    console.log(mojeTridy["0"]);
    console.log(mojeTridy["1"]);
    console.log(mojeTridy["2"]);

    for ( var i = 0; i < mojeTridy.length; i++){
    console.log(mojeTridy[i].textContent);
    }


var mojeTridy = document.getElementById("druhy");
console.log(mojeTridy.textContent);



var mojeOdstavce = document.getElementsByTagName("p");
for (var i=0; i<mojeOdstavce.length; i++){
    console.log(mojeOdstavce[i].textContent);
}
console.log(mojeOdstavce.length);



*************** QUERY SELECTOR ***************

document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.display = "none";
document.querySelector("h1").style.fontSize = "100px"
document.querySelector("h1").style.fontWeight = 900;


**************************************************************************

textContent     =   Pokud chceme z čehokoliv vybrat jenom text.
.querySelector  =   Vybírá pouze jenom první označený prvek.
.querySelectorAll   =   Vybere všechny prvky pod označením.
Při psaní více slov se musí použít "Velbloud" (fontSize).


***************************************************************************

Stejný zápis ve dvou provedení:

for(var i = 0; i < 3; i++){
    console.log(text[i].textContent);
}

// console.log(text[0].textContent);
// console.log(text[1].textContent);
// console.log(text[2].textContent);




var text = document.querySelectorAll("p");
for(var i = 0; i < 3; i++){
    console.log(text[i].textContent);
}

for(var i = 0; i < text.length ; i++) {
    console.log(text[i].textContent);
}


***************************************************************************

document.querySelector("h1").textContent = "Já jsem nová H1";

var headline = 
document.querySelector("#heading1").textContent;
    console.log(headline);

var paragraph = 
document.querySelector(".paragraph").textContent;
console.log(paragraph);

var text = document.querySelector(".zkouska").textContent;
    console.log(text);


****************************** CYKLY ******************************

FOR cyklus: - Používá se, když ZNÁME přesný počet opakování.
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }

WHILE cyklus: - Používá se, když NEZNÁME přesný počet opakování.
                Nemusí se provést ani jednou.
    var i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }

DO WHILE cyklus: - Provede se MINIMÁLNĚ jednou !!!
    var i = 0;
    do {
        console.log("Kamil Teuer");
        i++;
    } while (i < 5);


BREAK       - Způsobí ukončení cyklu

CONTINUE    - Zastaví průchod cyklem, ale cyklus pokračuje dál 
            (například zastaví první průchod cyklem, ale pokračuje druhým opakováním).


var wanted = ["Killer", "Bloody", "Hacker"];
var traveler = prompt();
for(var i = 0; i<3; i++) {
    console.log(i);
    if(wanted[i] === traveler) {
        console.log("Zadržte ho!");
        break;
        // Ukončí cyklus po nalezení shody.
        // continue;    - Při nalezení shody se opakuje celý cyklus znovu.
    }
    console.log("Toto se neprovede poté, co se narazí na continue.")
}



****************************** CYKLY - DO WHILE ******************************

var i = 0;
do {
    console.log("Kamil Teuer");
    i++;
} while (i < 5);






****************************** CYKLY - WHILE (dokud) ******************************
    - Používá se, když NEZNÁME přesný počet opakování.

Příklad:
    Kolikrát můžete dané číslo dělit 2 tak, aby výsledek byl větší nebo rovno 1.
    12 : 2 = 6      (TRUE)          40 : 2 = 20         (TRUE)
    6 : 2 = 3       (TRUE)          20 : 2 = 10         (TRUE)
    3 : 2 = 1,5     (TRUE)          10 : 2 = 5          (TRUE)
    1,5 : 2 = 0,75  (FALSE)         5 : 2 = 2,5         (TRUE)
    Je dělitelná 3x !!!             2,5 : 2 = 1,25      (TRUE)
                                    1,25 : 2 = 0,625    (FALSE)
                                    Je dělitelná 5x !!!


****************************** CYKLY - FOR  - Nejpoužívanější ******************************
    - Používá se, když ZNÁME přesný počet opakování.

    for(var i = 0; i < 10; i = i + 1) {
        console.log(i);
    }
Nebo:
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }



for(var i = 1; i <= 5; i++) { 
    console.log(i + ": Já jsem první řádek v cyklu.")
    console.log(i + ": Já jsem druhý řádek v cyklu.")
}


var employees = ["David", "Jane", "Diana", "Kamil", "Jan"];
for(var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}



Vypiště 12x své jméno a příjmení:
    for(var i = 0 ;i < 12 ; i++) {
        console.log("Kamil Teuer");
    }
Vypište čísla od 0 do 10:
    for(var i = 0; i <= 10; i++) {
        console.log(i);
    }
Vypište čísla od 5 do 50 včetně, ale jen násobky pěti:
    for(var i = 5; i <= 50; i += 5) {
        console.log(i);
    }
Vypište čísla od 15 do 0 (tedy v obráceném pořadí):
    for(var i=15; i>=0; i--){
        console.log(i);
    }


****************************** METODY U OBJECTU = FUNKCE ******************************

Metoda = "Propašování" funkce do objektu.
THIS    =   Použije se objekt, kde je vypsaná funkce.



var year = 2021;

var kamil = {
    firstName: "Kamil",
    secondName: "Teuer",
    birthYear: 1988,
    driveLicence: true,
    family: ["John, Anna, Diana"],
    calculateAge: function() {
        this.age = year - this.birthYear;
    }
}
kamil.calculateAge();
console.log(kamil);

var diana = {
    firstName: "Diana",
    secondName: "Novotná",
    birthYear: 2000,
    driveLicence: false,
    family: ["John, Anna, Diana"],
    calculateAge: function() {
        return year - this.birthYear;
    }
}
console.log(diana.calculateAge());





****************************** OBJECTS (OBJEKTY) ******************************

Pole    =       Hodnotám jsou přiřazené indexy; Zálezí na pořadí
Objekt  =       Hodnotám jsou přiřazené jiné hodnoty; Nezáleží na pořadí. 
Key value pair = Klíč-Hodnota-V Páru


var Kamil = {
    firstName: "Kamil",
    secondName: "Teuer",
    birthYear: 1988,
    driveLicence: true,
    family: ["John, Anna, Diana"]
}
Kamil.firstName = "Martin";
Kamil.driveLicence = false;
console.log(Kamil);


Dvě možnosti jak zapsat pole:
var Kamil = {
    firstName: "Kamil",
    secondName: "Teuer",
    birthYear: 1988,
    driveLicence: true,
    family: ["John, Anna, Diana"]
}
var Diana = new Object();
    Diana.firstName = "Diana";
    Diana.secondName = "Novotná";
    Diana.birthYear = 2000
    Diana.driveLicence = true;
    Diana.family = ["John, Anna, Petr"];
        console.log(Diana);

Dvě metody na vypsání:
    console.log(Kamil.firstName);
    console.log(Kamil.birthYear);
    console.log(Kamil.driveLicence);
    console.log(Kamil["firstName"]);
    console.log(Kamil["birthYear"]);
    console.log(Kamil["driveLicence"]);
 


****************************** POLE - ARRAY ******************************

push    -   Přidá na konec,
unshift -   Přidá na začátek,
pop     -   Odebere poslední,
shift   -   Odebere první.


    var employees = ["David", "Jane", "Kamil", "Martin", "Eduard"];
        console.log(employees.indexOf("David"));
        console.log(employees.indexOf("Eduard"));
        console.log(employees.indexOf("Natalia"));
Při nenalezení se vypíše index -1.
        console.log(employees.length);
Výpis, kolik je atributů v employees - počet od jedničky!
        console.log(employees[employees.length - 1]);
Výpis posledního.  


var employees = ["David", "Jane", "Diana"];
    employees.push("John");
    employees.unshift("Albert");
    employees.pop();
    employees.shift();
console.log(employees);


    var employees = ["Kamil", "Teuer", 33, 1988, true];
Starší zápis je: (Už se nepoužívá.)
    var employees = new Array ("Kamil", "Teuer", 33, 1988, true);
        console.log(employees[0]);




****************************** FALSY A TRUTHY ******************************

falsy = undefined, 0, '' / "", NaN, null
truthy = to, co není falsy 


// "": 
var salary = 0;
    if (salary || salary === 0)  {
        console.log("Hodnota je true");
    } else {
        console.log("Hodnota je false");
    }


Undefined: 
var job;
console.log(job);
    if (job)  {
        console.log("Hodnota je true");
    } else {
        console.log("Hodnota je false");
    }



****************************** FUNCTION EXPRESSIONS ******************************

var myJob = function(job, firstName) {
    switch(job) {
        case "učitel":
            return firstName + " je " + job + ".";
        case "manager":
            return firstName + " je " + job + ".";
        default:
            return "Nevím, co má " + firstName + " za práci."
    }
}
console.log(myJob("učitel", "Kamil"));
console.log(myJob("manager", "David"));
console.log(myJob("truhlářka", "Jane"));



DVA STEJNÉ ZÁPISY:
    FUNCTION STATEMENTS:
        function calculateAge(birth) {
            return 2020 - birth;
        }
    FUNCTION EXPRESSIONS:
        var calculateAge = function(birth) {
            return 2020 - birth;
        }


****************************** FUNCTION STATEMENTS ******************************

function calculateAge(birth){
    return 2020 - birth;
}
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
        if (retirement > 4) {
            console.log(firstName + " má " + retirement + " let do důchodu.");
        } else if (retirement < 5 && retirement > 1) { 
            console.log(firstName + " má " + retirement + " roky do důchodu.");
        } else if (retirement == 1) { 
            console.log(firstName + " má " + retirement + " rok do důchodu.");
        } else if (retirement == 0) { 
            retirement = -(retirement);
            console.log(firstName + " letos dosáhl(a) důchodu.");
        } else if (retirement == -1) { 
            retirement = -(retirement);
            console.log(firstName + " je už v důchodu " + retirement + " rok.");
        } else if (retirement <= -1 && retirement >= -4) { 
            retirement = -(retirement);
            console.log(firstName + " je už v důchodu " + retirement + " roky.");
        } else {
            retirement = -(retirement);
            console.log(firstName + " je už v důchodu " + retirement + " let.");
        }    
}
yearsUntilRetirement(2000, "David");
yearsUntilRetirement(1955, "Kamil");
yearsUntilRetirement(1955, "Jana");




function calculateAge(birth){
    return 2020 - birth;
}
function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
        if (retirement >= 0) {
            console.log(firstName + " má " + retirement + " let do důchodu.");
        } else if (retirement == -1) { 
            retirement = -(retirement);
            console.log(firstName + " je už v důchodu " + retirement + " rok.");
        } else if (retirement <= -1 && retirement >= -4) { 
            retirement = -(retirement);
            console.log(firstName + " je už v důchodu " + retirement + " roky.");
        } else {
            retirement = -(retirement);
            console.log(firstName + " je už v důchodu " + retirement + " let.");
        }    
}
yearsUntilRetirement(2000, "David");
yearsUntilRetirement(1990, "Kamil");
yearsUntilRetirement(1952, "Jana");



VYPOČÍTÁME VĚK POMOCÍ console.log:

function calculateAge1 (birth) {
    console.log(2020 - birth);
}
calculateAge1(2000);
calculateAge1(1990);
calculateAge1(1980);

Vypočítáme věk pomocí RETURN:

function calculateAge2 (birth) {
    return 2020 - birth;
}
var ageDavid = calculateAge2(2000);
var ageKamil = calculateAge2(1990);
var ageJana = calculateAge2(1980);
console.log(ageDavid,ageKamil,ageJana);



****************************** SWITCH ******************************

var ageDavid = 20;
if (ageDavid >= 18) {
    console.log("David je dospělý.");
} else if (ageDavid <= 18 && ageDavid >= 8) {
    console.log("David je mladiství.");
} else {
    console.log("David je dítě.");
}

TO SAMÉ S JINÝM ZÁPISEM - SWITCH !!!:
    Při console.log musí být za vypsáním BREAK !!! Když se píše RETURN, 
    tak za return to končí a nemusí se psát break !!!

switch(true) {
    case ageDavid >= 18:
        console.log("David je dospělý.");
        break;
    case ageDavid <= 18 && ageDavid >= 8:
        console.log("David je mladiství.");
        break;
    default:
        console.log("David je dítě.");
}


switch (key) {
               case value:
                   
                   break;
           
               default:
                   break;
           }


var pet = "fish";
switch(pet) {
    case "cat":
        console.log("Máme kočku.");
        break;
    case "dog":
        console.log("Máme psa.");
        break;
    case "fish":
        console.log("Máme rybičku.")
        break;
    default:
        console.log("Máme jiné zvířátko.");
    }


****************************** TERNÁRNÍ OPERÁTOR (ŠIPKOVÁ NOTACE) ******************************

var ageDavid = 20;
if (ageDavid >= 18) {
    var drink = "pivo";
} else {
    var drink = "voda";
}
Lze přepsat na:
var drink = ageDavid >= 18 ? "pivo" : "voda";
console.log(drink);


var ageDavid = 10;
    if (ageDavid >= 18) {
        console.log("David je dospělý.");
    } else {
        console.log("David je mladiství");
    }
Lze přepsat na:
    ageDavid >= 18 ? console.log("David je dospělý.") : console.log("David je mladiství");
console.log(drink);


****************************** PODMÍNKY ******************************

var firstNumber = Number(prompt("Napiš první číslo"));
var secondNumber = Number(prompt("Napiš druhé číslo"));
var sign = prompt("Zadejte matematickou operaci: + - * /");
if (sign == "+") {
    console.log(firstNumber + secondNumber);
} else if (sign == "-") {
    console.log(firstNumber - secondNumber);
} else if (sign == "*") {
    console.log(firstNumber * secondNumber); 
} else if (sign == "/" && secondNumber != 0) {
    console.log(firstNumber / secondNumber);
} else if (sign == "/" && secondNumber == "0") {
    console.log("Nelze dělit nulou. Druhé číslo nesmí být 0 při dělení!");
} else {
    console.log("Tuto matematickou operaci neznám.");
} 


var firstNumber = Number(prompt("Napiš první číslo"));
var secondNumber = Number(prompt("Napiš druhé číslo"));
var sign = prompt("Napiš znaménko + - * /");

    Number("20"); - Převod čísla na text.
    String(20); - Převod čísla na text.
    
if (sign == "+") {
    console.log(firstNumber + secondNumber);
} else if (sign == "-") {
    console.log(firstNumber - secondNumber);
} else if (sign == "*") {
    console.log(firstNumber * secondNumber);
} else if (sign == "/") {
    console.log(firstNumber / secondNumber);
} else {
    console.log("Tuto matematickou operaci neznám.");
}


var ageDavid = 20;
var ageJana = 20;
if (ageDavid > ageJana){
    console.log("David je starší než Jana.");
} else if (ageDavid < ageJana) {
    console.log("Jana je starší než David.");
} else {
    console.log("David i Jana jsou stejně staří.");
}

var age = prompt("Kolik je ti let?");
if (age >= 18) {
    console.log ("Jsi plnoletý. Můžeš vstoupit.");
} else {
    console.log("Ještě ti nebylo 18 let. Nemůžeš vstoupit.");
}

if (3>=5) {
        // Podmínka je true = pravda
    console.log("Je to pravda.")
} else {
        // Podmínka je false = nepravda
    console.log("Není to pravda.")
}

var age = prompt("Kolik je ti let?");
if (age >= 18) {
    console.log ("Jsi plnoletý. Můžeš vstoupit.");
} else {
    console.log("Ještě ti nebylo 18 let. Nemůžeš vstoupit.");
}


var ageDavid = 15;
var ageJana = 20;
if (ageDavid > ageJana) {
    console.log("David je starší než Jana.");
} else {
    console.log("Jana je starší než David.");
}





****************************** ZÁPISY ******************************

// Tři stejné zápisy.
x = x + 2;      x += 2      x ++; (U posledního pořád bude přičítat pouze 1. Říká se tomu "inkrementace".)
x = x - 2;      x -= 2      x --; (U posledního pořád bude odčítat pouze 1. Říká se tomu "inkrementace".)
console.log(x);

var x = 1;
x += 10;
console.log(x);
x -= 5;
console.log(x);
x *= 3;
console.log(x);
x /= 2;
console.log(x);

var x = 1;
console.log(x);
x++;
console.log(x);



****************************** TYPE OF ****************************** - JAKÝ TYP JE VYPSANÝ ZNAK

console.log(typeof(ageDavid));
console.log(typeof(ageJana));
console.log(typeof(result));
console.log(typeof(David));
console.log(typeof(true));



****************************** LOGICKÉ OPERÁTORY ******************************
<  >  ==  <==  >==
True / False - Pravda / Nepravda

var ageDavid = 15;
var ageJana = 20;

console.log(birthDavid + ((5+5)*(10+10)));

var result = ageJana < ageDavid;
var result = ageJana == ageDavid;
console.log(result);



***************************** ZÁKLADNÍ OPERÁTORY ******************************

+ - * / 

var ageDavid = 15;
var ageJana = 20;

var year = 2021;
var birthDavid = year - ageDavid;
var birthJana = year - 20;

console.log(birthDavid);
console.log(birthJana / 1000);
console.log(birthJana * 2);
console.log(birthJana + 5000);
console.log(birthJana - 500);

console.log(birthJana * 2 - 500);
console.log(birthDavid + ((5+5)*(10+10)));





****************************** VYSKAKOVACÍ OKNA ******************************

confirm("Jsi plnoletý?");
    Confirm má OK a Zrušit - dvě tlačítka
var resultConfirm = confirm("Jsi plnoletý/á?");
console.log(resultConfirm);

alert ("Ahoj, já jsem Kamil");
    Alert má jenom jedno tlačítko - OK
prompt("Kolik je ti let?");
    Promont má buňku s vypsání textu.

var age = prompt("Kolik je ti let?");
console.log(age - 18);
var adult = age - 18;
console.log(adult);


******************************  ******************************
var firstName = "Kamil";
var secondName = "Teuer";
var age = 33;

console.log("Tento člověk se jmenuje " + firstName + " " + secondName + " a je mu " + age + " let.");



****************************** PROMĚNNÉ - VAR ******************************

Můžeme vložit:
    number - číslo
    var age = 33;
    console.log(age);

string - text
    var firstName = "Kamil";
    console.log(firstName);

boolean - pravda / nepravda
    var adult = true;
    var adult = false;
    console.log(adult);

undefined - proměnná nemá hodnotu
    var secondName;    
    console.log(secondName);

null - proměnná neexistuje
    console.log(test);


var firstName = "Kamil";
console.log(firstName);

var lastName = "Teuer";
console.log(lastName);

var age = 33;
console.log(age);

var job = "Designer";
console.log(job);


******************************************* !!! JQUERY !!!  *********************************************************


SCROLL TO SECTIONS:
 
    $(".jq--scroll-our-pizza").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--our-pizza").offset().top }, 1000);
    });

    $(".jq--scroll-postup").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--postup").offset().top }, 1100);
    });


SCROLL BUTTONS TO SECTIONS:

    $(".jq--scroll-button-first").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--our-pizza").offset().top }, 1000);
    });

    $(".jq--scroll-button-second").click(function () {
        $("html, body").animate({ scrollTop: $(".jq--kontakt").offset().top }, 1800);
    });


MOBILE NAVIGATION:

    $(".jq--nav-icon").click(function () {
        $(".nav-background").slideToggle(1);
        $(".mobile-nav-back").fadeToggle(300);
        $("nav ul").fadeToggle();

    });


PODMÍNKY:

    if(5>3)
    {
            console.log("Je to pravda");
    }
    else {
            console.log("Není to pravda");
    }

******************************************************************************************************************************************

$("body").append("<h2>Já jsem přidaný element</h2>");

    $("ul").prepend("<li>Já jsem nový element</li>")
    $("ul").append("<li>Já jsem tady nový</li>");
    $("<li>Já jsem tady nový</li>").appendTo($("ul"));
    prepend = přidej na začátek
    append = přidej na konec
    Lepší je první verze zápisu.

    DOM = Document Object Model

    $("li").filter(function(index){
        return index % 3 === 1;
    }).css("background-color","rgba(250,100,0,0.5)");

    5 modulo 2 = 1
    6 modulo 2 = 0
    12 modulo 5 = 2
    14 modulo 5 = 4

    5 % 2 = 1
    6 % 2 = 0
    12 % 5 = 2
    14 % 5 = 4

    modulo = zbytek po celočíselném dělení
    Označuje se v porogramování znakem   %

    $("li").filter(function(index){
        return index === 0;
    }).css("background-color","rgba(250,100,0,0.5)");
    
    V programování se VŽDY čísluje od "nuly" !!!
    === : 3* "rovná se" znamená "ROVNO"

    $("#list").children("li").filter(":even").css("background-color","rgba(250,100,0,0.5")
    
    $("#list").find("li").filter(":even").css("background-color","rgba(250,100,0,0.5")
    Dva to obarvilo dvakrát, protože to vybarvilo jednou v "li" a potom přímo "li" DVA.

    $("li:first").next().css("background-color","rgba(150,150,40,0.7")
    $("li:last").prev().css("background-color","rgba(150,150,40,0.7")
    $("li:first").next().css("background-color","rgba(150,150,40,0.7")
    $("#list").siblings(":header").css("background-color","rgba(150,150,40,0.7")
    $("#list").siblings("h1,h2").css("background-color","rgba(150,150,40,0.7")
    Výběr h1,h2 a nebo :header = je to to samé.
    Next = další
    prev = předchozí
    siblings = sourozenci


    $("li:first").parents().css("background-color","rgba(150,150,40,0.7")
    $("li:first").parent().css("background-color","rgba(150,150,40,0.7")
    $("#list").children("li").css("background-color","rgba(150,150,40,0.7")
    Children = vezme jenom přímé potomky ID="list"

    $("#list").find("li").css("background-color","rgba(150,150,40,0.7")

    $("input:password").css("background-color","rgba(250,100,0,1");
    jQuery typ Email neumí !!!

    $("li:even").css("background-color","rgba(250,100,0,1)")
    even = lichý
    odd = sudý

    $("p:first").css("background-color","rgba(150,150,40,8"),
    $("li").css("background-color","rgba(25,100,0,1")
    $("li:first").css("background-color","rgba(250,100,0,1")
    $("li:last").css("background-color","rgba(250,100,0,1")

    $("p").css("background-color","rgba(150,150,40,8");
    $(".red-box").css("background-color","rgba(150,150,40,8")
    $("#list").css("background-color","rgba(150,150,40,8")

    $(".red-box").fadeTo(2000,0,function(){
        $(".blue-box").fadeTo(2000,0,function(){
            $(".green-box").fadeTo(2000,0);
        });
    });

    $(".red-box").fadeTo(2000,0,function(){
        alert("Toto se stane po animaci");
    });

    callback funkce - funkce, která se zavolá, když animace skončí!
    
    $(".red-box").fadeTo(1000,0.5).fadeOut(500).delay(500).fadeIn(500).fadeTo(1000,1);
    
    $(".red-box").fadeTo(1000,0.2);
    $(".blue-box").delay(1000).fadeTo(1000,0.4);
    $(".green-box").delay(2000).fadeTo(1000,0.6);


    $("p").animate({
        fontSize:"30px",
        color:"#fff"
        /* jQuery neumí animovat barvy - proto se nic nestane s barvou textu.
    },1000);


    $(".blue-box").animate({
        "margin-left":"250px",
        "opacity":"0",
        "width":"50px",
        "height":"50px",
        "margin-top":"25px"
    },1000);

    $(".red-box").animate({
        marginLeft:"250px",
        opacity:"0",
        width:"50px",
        height:"50px",
        marginTop:"25px"
        
        Nemusí se používat uvozovky, ale dvojslovné tagy se musí psát stylem, 
        kde druhé slovo má první písmeno velké.
    },1000);

    $(".green-box").animate({
        "margin-left":"+=600px"
    },1000);
    $(".green-box").animate({
        "margin-left":"-=600px"
    },1000);

    $(".blue-box").animate({
        "margin-left":"+=400px"
    },1000);

    $(".blue-box").animate({
            "margin-left":"-=400px"
        },1000);

    $(".red-box").animate({
        "margin-left":"+=300px",
    },1000);
    $(".red-box").animate({
        "margin-top":"300px"
    },1500);
    
    $(".red-box").fadeTo(2000, 0.2);
    .fadeTo(2000, 0.2) = po dobu 2 vteřin (2000 ms) se zprůhlední na 20% 

    $(".red-box").fadeToggle(2000).fadeToggle(2000);

    Toggle = přepínač
    fast = 200 ms
    slow = 600 ms

    $(".blue-box").fadeOut(2000);
    $(".green-box").fadeOut(2000);

    $("#logo").fadeOut(2000);


****************************** HRA S HÁZENÍM KOSTKY ******************************


// ZÁKLADNÍ PROMĚNNÉ
var totalScore, roundScore, activePlayer, dice, playGame;


newStart();

// NOVÁ HRA
function newStart() {
    totalScore = [0,0]; // totalScore[0] ,nebo totalScore[1]
    roundScore = 0;
    activePlayer = 0;
    playGame = true;

    // VYNULOVÁNÍ VŠEHO:
    document.getElementById("totalScorePlayer-0").textContent = 0;
    document.getElementById("totalScorePlayer-1").textContent = 0;
    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;

    // SKRYTÍ KOSTKY:
    document.querySelector(".diceImage").style.display = "none";

    // RESET VÍTĚZE NA TEXT HRÁČŮ:
    document.querySelector("#name-0").textContent = "Skóre 1. hráče";
    document.querySelector("#name-1").textContent = "Skóre 2. hráče";

    // VRÁTÍME ZVÝRAZNĚNÍ AKTIVNÍHO HRÁČE K PRVNÍMU A U DRUHÉHO ODSTRANÍME:
    document.querySelector(".totalScore0").classList.add("active");
    document.querySelector(".totalScore1").classList.remove("active");
}


// Měníme obrázek kostky podle náhodného čísla.



    document.querySelector(".rollDice").addEventListener("click", function(){
        
        if(playGame) {

            // 1. Generujeme náhodné číslo mezi 1 a 6.
            var dice = Math.ceil(Math.random()*6);
            
            // 2. Zobrazit správný obrázek.
            var diceElement = document.querySelector(".diceImage");
            diceElement.style.display = "block";
            console.log(diceElement.src = "img/" + dice + ".jpg"); 
            
            // 3. Načítáme čísla z kostky:
            if(dice !== 1){
                roundScore = roundScore + dice;
                document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
            } else {
                // Bude hrát další hráč.
                nextPlayer();
            }}
        });

function nextPlayer() {
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    roundScore = 0;

    document.getElementById("currentScore-0").textContent = 0;
    document.getElementById("currentScore-1").textContent = 0;
    document.querySelector(".diceImage").style.display = "none";

    document.querySelector(".totalScore0").classList.toggle("active");
    document.querySelector(".totalScore1").classList.toggle("active");

}

document.querySelector(".holdScore").addEventListener("click", function(){

    if(playGame){
        // Celkové skóre se vyplní současným skórem.
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore;
        // Přepis totalScore u aktivního hráče do Skore aktivního hráče.
        document.querySelector("#totalScorePlayer-" + activePlayer).textContent = totalScore[activePlayer];
        document.querySelector("#currentScore-" + activePlayer).textContent = 0;
        roundScore = 0;
    
    
        if ((totalScore[activePlayer]) >= 100) {
            document.querySelector("#name-" + activePlayer).textContent = "!!! VÍTĚZ !!!";
            document.querySelector(".diceImage").style.display = "none";
            playGame = false;
        } else {
            nextPlayer();
        }
    }

});


// NOVÁ HRA - RESTARTUJE VŠECHNO
document.querySelector(".newGame").addEventListener("click", newStart);





****************************** DVOJITÝ ÚVODNÍ BANNER ******************************

const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const slidesLength = slideRight.querySelectorAll("div").length;

let numberActiveSlide = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
// Počítání v JavaScript = `-${(slidesLength-1)*100}vh`

arrowUp.addEventListener("click",function(){
    changeSlide("up");
    // UP je parametr.
});

arrowDown.addEventListener("click",function(){
    changeSlide("down");
});

function changeSlide(direction){
    const sliderHeight = containerSlider.clientHeight;
    
    if (direction === "up"){
        numberActiveSlide++;
        if (numberActiveSlide > slidesLength - 1){
            numberActiveSlide = 0;
        };
    } else {
        numberActiveSlide--;
        if (numberActiveSlide < 0){
            numberActiveSlide = slidesLength - 1;
        }
    }
    slideRight.style.transform = `translateY(-${numberActiveSlide*100}vh)`;
    slideLeft.style.transform = `translateY(${numberActiveSlide*sliderHeight}px)`;
    // Dva stejné zápisy přes "vh" a sliderHeight (jeden jde nahoru a druhý dolů).

};

****************************** FILTR ******************************

const result = document.querySelector(".user-list");
const input = document.querySelector(".input-filter");
const userList = [];

getData();

// Jakmile se začne psát do inputu.
input.addEventListener("input", function(event){
        dataFilter(event.target.value);
});

async function getData(){
    // async    =   Asynchroní JavaScript (Nečeká na vyřešení, ale pokračuje dále ve čtení kódu).
    const allUsers = await fetch("https://randomuser.me/api?results=50");
    //  await   =   počká na stáhnutí těch 50 uživatelů a pak teprve vloží do konstanty allUsers.
    //  fetch   =   najdi, nebo stáhni z téhle adresy tyhle výsledky.
    const data = await allUsers.json();
    // console.log(data);
    // .json()  =   Zobrazí výsledky smysluplně pro člověka, než jako strojový kód.
    result.innerHTML = "";
    // Vymaže všechno (prázdný string) co obsahuje v "result" a to je classa "user-list".
    // Vyčistí seznam uživatelů. 
    // innerText    =   Vnitřní text

// Dva stejné zápisy: 
    data.results.forEach(function(user){
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class = "user-information">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.location.city}, ${user.location.country}</p>
        `
        result.appendChild(li);

        userList.push(li);  // Potřebujeme mít userList naplněný, aby jsme ho mohli prohledávat.
    // Přišpendlit "li" nakonec = appendChild !!! 

        // console.log(li);
    });
};

function dataFilter(inputText){
    userList.forEach(function(oneUser){
        if (oneUser.innerText.toLowerCase().includes(inputText.toLowerCase())){
            oneUser.classList.remove("hide");
        } else { 
            oneUser.classList.add("hide");
        }
    });
};

// toLowerCase  =   Převede všechny písmenka na malé písmenka.
// includes     =   Kontrola, jestli OBSAHUJE.

data.results.forEach(user => {
}); (Šipková notace)*/

/* Druhý zápis: (můj):
    <h3>${user.name.first + " " + user.name.last}</h3> */

    // Pracujeme s daty, ale jenom s results a ty jsou uložené jako pole.
    // forEach  =   projíždí pole.


// Do vyhledávače napsat:
// randomuser.me/api?results=50     =   50 náhodně vygenerovaných uživatelů.

/*


****************************** FILTR ******************************

const input = document.querySelector(".input");
const search = document.querySelector(".search");
const button = document.querySelector(".btn");


button.addEventListener("click", function(){
    search.classList.toggle("active");
    input.focus(); 
    // Může se ihned psát do vyhledávacího políčka. Je to přednastaené (focus).
});

*/


/*
MODERNÍ JAVASCRIPT:





*************************  *************************
*************************  *************************
*************************  *************************
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



*/
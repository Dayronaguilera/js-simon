/*
1-Un alert() espone 5 numeri generati casualmente.
2-Da lì parte un timer di 30 secondi.

3-Dopo 30 secondi l’utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().

4-Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// fa caricare prima l'html e poi avvia il JS
document.addEventListener('DOMContentLoaded', function () {

var results = document.getElementById("output2");

// per creare dei numeri random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);         
}

// array con i numeri random!
var numberpc = [];

//array del utente!
var userNumbList = [];

// numeri azzeccati!
var numbers = [];

//contatore punteggio
var score = 0;


    // conta per 5 volte all'interno del array!
while (numberpc.length < 5) {

    // generiamo numero random da 1 a 100!
    var randomNum = getRandomNumber(1, 50);

    // verifichiamo che non sia duplicato
    if (!numberpc.includes(randomNum)) {

        // pushamo nell'array (se non è duplicato)
        numberpc.push(randomNum);
    }
}

alert("Memorizza i seguenti numeri: " + numberpc);

console.log( numberpc);

setTimeout(function() {
    
    while (userNumbList.length < 5) {
        
        // inserisci i numeri memorizzati!   
        var userNumb = parseInt(prompt("Inserisci i numeri memorizzati"));

            // pushiamo il numero inserito dal utente e poi lo confrontiamo!
            userNumbList.push(userNumb);
        
        if (numberpc.includes(userNumb)) {
            
            numbers.push(userNumb);
            score += 1
   
        }    
    }
    
    results.innerHTML = ("i numeri presi sono: " + numbers + "</br> il tuo punteggio e: " + score);
    
}, 3000)


});   


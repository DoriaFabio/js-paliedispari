"use strict";
console.clear();    
// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const palindroma = prompt("Inserisci una parola");
console.log(palindroma);
const reversedText = contrpali(palindroma);
if (palindroma.toLowerCase() === reversedText.toLowerCase()) {
  console.log("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
}

function contrpali(parola) {
    let reverse = "";
  
    for (let i = parola.length - 1; i >= 0; i--) {
      reverse = reverse + parola[i];
      console.log(reverse);
    }
    return reverse;
  }

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let pardisp = prompt("Scrivi pari o dispari");
let num = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("L'utente ha scelto " + pardisp);
console.log("l'utente ha scelto il numero " +num);
let numPc = randnum(1, 5);


//Definisco i minimi e massimi dei numeri da giocare
const minimo = 1;
const massimo = 5;

//Chiedo all'utente le informazioni necessarie al gioco
let pariDispari = prompt("Scegli pari o dispari?");
let sceltaNumero = parseInt(prompt(`Scegli un numero compreso tra ${minimo} e ${massimo}`));

//Controllo se ci sono errori nei dati inseriti dall'utente
if (sceltaNumero < minimo || sceltaNumero > massimo || isNaN(sceltaNumero) || sceltaNumero == null) {

    sceltaNumero = randomNumber(1, 5);

    numero = alert(`Il numero scelto non è corretto, per giocare quindi ti verrà assegnato il numero ${sceltaNumero}`);

}

//Assegno un numero casuale al computer
let numeroComputer = randomNumber(minimo, massimo);

//Sommo i numeri dell'utente e del computer 
let risultato = sommaDueNumeri(sceltaNumero, numeroComputer);

//controllo se è un numero pari o dispari
if ((pari(risultato) == true && pariDispari == "pari") || (pari(risultato) == false && pariDispari == "dispari")) {
    alert(`Il numero che hai scelto era ${sceltaNumero} e il numero scelto dal computer era ${numeroComputer}, visto che hai scelto ${pariDispari}, HAI VINTO!!`);
}   
else if ((pari(risultato) == true && pariDispari == "dispari") || (pari(risultato) == false && pariDispari == "pari")) {
    alert(`Il numero che hai scelto era ${sceltaNumero} e il numero scelto dal computer era ${numeroComputer}, visto che hai scelto ${pariDispari}, HAI PERSO!!`);
}   
else {
    alert("C'è stato un errore di sintassi, riprova riscrivendo solo pari o dispari alla seconda domanda");
}




//Creo una funzione per avvertire se dei numeri inseriti non sono corretti
function erroreNumeri() {
    return alert("Il numero inserito non è corretto / I numeri inseriti non sono corretti");
}

//Creo funzione per un numero random compreso tra 2 numeri
function randomNumber(min, max) {

    let numero;

    numero = parseInt(Math.floor(Math.random() * (max - min + 1) + min));

    if (min >= max) {
        
        numero = alert("Il primo numero deve essere minore del secondo");

    } else if (isNaN(min) || isNaN(max)) {

        numero = erroreNumeri();

    }

    return numero;

}

//Creo una funzione per sommare 2 numeri 
function sommaDueNumeri(primo, secondo) {

    somma = parseInt(primo) + parseInt(secondo);

    if (isNaN(primo) || isNaN(secondo)) {

        numero = erroreNumeri();

    }

    return somma;

}

//Creo una funzione per vedere se un numero è pari 
function pari(numero) {

    let risultato;

    if (parseInt(numero) % 2 == 0) {

        risultato = true;

    } else {

        risultato = false;

    }

    if (isNaN(numero)) {

        risultato = erroreNumeri();

    }

    return risultato;

}

/* 
Per definire un numero random tra un range dato dall'utente
let numeroUtente = randomNumber(parseInt(prompt("Inserisci un minimo")), parseInt(prompt("Inserisci un massimo")));
 */


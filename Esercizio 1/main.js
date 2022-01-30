//Chiedo all'utente di inserire una parola 
let domanda = prompt("Inserisci una parola o una frase");

alert(parolaPalindroma(domanda));

//Creo una funzione che potrò riutilizzare
function parolaPalindroma(parola) {

    let frase;

    //Rendo tutto minuscolo per confrontare tutti i caratteri correttamente
    let minuscolo = parola.toLowerCase();
    console.log(minuscolo);

    //Utilizzo .replace per rimuovere gli eventuali spazi tra le frasi
    let togliSpazi = minuscolo.replace(/ /g, '');
    console.log(togliSpazi);

    //Utilizzo .split per dividere le lettere della parola e creare un array dove ad ogni carattere corrisponde un indice, partendo da 0.
    //Utilizzato senza spazi tra gli apici divide ogni carattere dal successivo
    let dividiParola = togliSpazi.split("");
    console.log(dividiParola);

    //Inverto la parola con .reverse, in questo modo inverto l'ordine dei caratteri nell'array
    let invertiParola = dividiParola.reverse();
    console.log(invertiParola);

    //Riunisco i caratteri invertiti in una stringa con .join, lascio gli apici senza spazi per non avere distanza tra i caratteri uniti
    let unisciParola = invertiParola.join("");
    console.log(unisciParola);

    //Confronto la sequenza di caratteri invertita con la sequenza di caratteri iniziale impostata dall'utente, se combaciano allora la frase/parola è palindroma
    //Calcolo se è una parola o una frase impostando la funzione di conteggio parole a = 1 o > 1
    if (togliSpazi == unisciParola && contaParole(domanda) == 1) {

        frase = "La parola è palindroma";

    } else if (togliSpazi == unisciParola && contaParole(domanda) > 1) {

        frase = "La frase è palindroma";

    } else if (togliSpazi != unisciParola && contaParole(domanda) == 1) {

        frase = "La parola non è palindroma";

    } else if (togliSpazi != unisciParola && contaParole(domanda) > 1) {

        frase = "La frase non è palindroma";

    }

    return frase;

}

//Creo una funzione per contare il numero di parole in una frase (non funziona con doppi spazi). 
//mi servirà per sapere se l'utente sta scrivendo una parola o una frase
function contaParole(parola) {

    return parola.split(" ").length;

}

console.log(contaParole(domanda));
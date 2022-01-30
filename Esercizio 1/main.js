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
    //Utilizzo .split per dividere le lettere della parola e creare un array dove ad ogni carattere corrisponde un indice, partendo da 0.
    //Utilizzato senza spazi tra gli apici divide ogni carattere dal successivo
    let dividiParola = minuscolo.replace(/ /g, '').split("");
    console.log(dividiParola);

    //Inverto la parola con .reverse, in questo modo inverto l'ordine dei caratteri nell'array
    let invertiParola = dividiParola.reverse();
    console.log(invertiParola);

    /* Questa funziona serve solo per confrontare le parole, non le frasi:
    //Riunisco i caratteri invertiti in una stringa con .join, lascio gli apici senza spazi per non avere distanza tra i caratteri uniti
    let unisciParola = invertiParola.join("");
    console.log(unisciParola);
    */

    //Confronto la sequenza di caratteri invertita con la sequenza di caratteri iniziale impostata dall'utente, se combaciano allora la frase/parola è palindroma
    if (dividiParola == invertiParola) {
        frase = "La frase/parola è palindroma";
    } else {
        frase = "La frase/parola non è palindroma";
    }

    return frase;

}

//Chiedo all'utente di inserire una parola 
let domanda = prompt("Inserisci una parola");

alert(parolaPalindroma(domanda));

//Creo una funzione che potrò riutilizzare
function parolaPalindroma(parola) {

    let frase;

    //Utilizzo .split per dividere le lettere della parola e creare un array dove ad ogni carattere corrisponde un indice, partendo da 0.
    //Utilizzato senza spazi tra gli apici divide ogni carattere dal successivo
    let dividiParola = parola.split("");
    console.log(dividiParola);

    //Inverto la parola con .reverse, in questo modo inverto l'ordine dei caratteri nell'array
    let invertiParola = dividiParola.reverse();
    console.log(invertiParola);

    //Riunisco i caratteri invertiti in una stringa con .join, lascio gli apici senza spazi per non avere distanza tra i caratteri uniti
    let unisciParola = invertiParola.join("");
    console.log(unisciParola);

    //Confronto la parola invertita con la parola iniziale impostata dall'utente, se combaciano allora è palindroma
    if (parola == unisciParola) {
        frase = "La parola è palindroma";
    } else {
        frase = "La parola non è palindroma";
    }

    return frase;

}

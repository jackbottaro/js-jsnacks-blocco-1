// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

// inizializzo variabile per la somma
let sum = 0;

// chiedo 10 numeri al utente
for (let i = 0; i < 10; i++) {
    const userNumbers = parseInt(prompt('Inserisci un numero'));
    if (!isNaN(userNumbers)){
    // sommo i numeri
    sum += userNumbers;
    }

}

console.log(sum)
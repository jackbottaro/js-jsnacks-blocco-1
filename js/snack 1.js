console.log('JS OK')

// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

// 1 chiedo primo numero
// 2 chiedo secondo numero
// 3 confronto numeri
// 4 stampo il maggiore

// 1 chiedo primo numero

const firstNumber = parseInt(prompt('Scrivi un numero'));
console.log('firstNumber', firstNumber);

// 2 chiedo secondo numero

const secondNumber = parseInt(prompt('Scrivi un numero'));
console.log('secondNumber', secondNumber);

// 3 confronto numeri
let message = 'Il numero maggiore è:';

// VALIDAZIONE
// se rileva che l'inpute non è un numero restituisce il messaggio di errore sennò prosegu il lavoro
if (isNaN(firstNumber) || isNaN(secondNumber)){  
    message = 'Uno dei valori non è valido!'
} else{
    // se il primo numero è maggiore del secondo restituisci il risultato sennò vai al prossimo else
    if (firstNumber > secondNumber){
        message += firstNumber;
    // se il secondo numero è maggiore del primo restituisci il risultato sennò vai al prossimo else
    } else if (firstNumber < secondNumber){
        message += secondNumber;
    // se i numeri sono uguali restituisci il seguente risultato
    } else{
        message = 'I numeri sono uguali';
    }
    
}


// 4 stampo il maggiore

console.log(message);


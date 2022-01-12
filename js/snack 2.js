// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// 1 chiedo prima e seconda parola
const firstWord = prompt('Inserisci una parola').trim();
console.log('prima parola' + firstWord);

const secondWord = prompt('Inserisci un altra parola').trim();
console.log('seconda parola' + secondWord);

// confronto due parole

let message = 'Le parole inserite sono ';

// VALIDAZIONE
if (!isNaN(firstWord) || !isNaN(secondWord)){
    message = 'Il valore inserito non valido';
} else{
    if (firstWord.length > secondWord.length){
        message += secondWord + ' ' + firstWord;
    
    } else if(firstWord.length < secondWord.length){
        message += firstWord + ' ' + secondWord ;
    }
}



console.log(message)

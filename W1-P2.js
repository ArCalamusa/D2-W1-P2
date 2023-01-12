/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//string: serie di caratteri racchiusi da apici singoli o doppi
let auto1 = "panda"; 
let auto2 = 'twingo';

//number: numeri float 
let numeroIntero = 42

console.log(numeroIntero);

let numeroVirgolaMobile = 3.14;

console.log(numeroVirgolaMobile);

let somma = numeroIntero + numeroVirgolaMobile;

console.log(somma) //stampa 45.14

//Boolean: rappresenta un valore "vero" o "falso"
let età = 18;
if(età >= 18);
console.log ("benvenuto nel sito");
else("spiacente non hai l'età per accedere");

//Null: utilizzato per indicare che una variabile ha un valore di “nessun oggetto”:

//Undefined: variabile dichiarata ma non ha ancora un valore assegnato;

/* ESERCIZIO 2
Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Un oggetto è una raccolta di coppie chiave-valore; un oggetto può rappresentare qlc cosa dalle info di una persona (nome, età ecc..), ai dati di un gioco (punteggio, livello ecc…)

let persona = {
    nome: “Mario”;
    età: “30”;
    sesso: “Maschio”;
    
} 

/* ESERCIZIO 3
Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
//Per effettuare un addizione (somma) dei numeri 12 e 20

let num1 = 12; //dichiaro una variabile
let num2 = 20; //dichiaro la variabile
let somma = num1 + num2; //dichiaro una terza variabile (somma delle precedenti)

console.log(somma); // risultato 32

/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Per creare una variabile in .js e assegnare un valore, si può utilizzare la parola chiave “let” seguita dal nome della variabile e del simbolo di assegnazione (=).

let x = 12;

/* ESERCIZIO 5
Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Per creare una variabile in .js e assegnare un valore, si può utilizzare la parola chiave “let” seguita dal nome della variabile e del simbolo di assegnazione (=).

let name = "Arcangelo";

console.log(name); //stampa Arcangelo

/* ESERCIZIO 6
Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Per eseguire una sottrazione tra il numero 4 e la variabile "x" (che contiene il numero 12), si può utilizzare l'operatore di sottrazione (-):

let x = 12; //dichiariamo una variabile
let y = 4; //dichiaro una variabile
let differenza = y - x; // dichiaro una terza variabile (differenza)

console.log(differenza); //stampa -8

/* ESERCIZIO 7
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//Per creare 2 variabili e assegnare 2 valori  utilizziamo let seguita dal nome delle variabili e dal simbolo di assegnazione =.

let name1 = 'john'; //dichiaro una variabile
let name2 = 'John'; //dichiaro una variabile

//per verificare che name1 è diversa da name2 occorre usare l’operatore di diseguaglianza !=

console.log(name1 != name2) //stampa true

//metodo alternativo

console.log(name1.toLowerCase() == name2.toLowerCase())




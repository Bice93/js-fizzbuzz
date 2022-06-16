// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// ----------------------------------------------------------------
// 1) stampo in console i numeri da 1 a 100
for (let index = 1; index <= 100; index++) {
    // console.log(index); 

    // ...5) stampo i numeri multipli sia di 3 che di 5
    if (index % 3 == 0 && index % 5 == 0) {
        console.log("fizzbuzz")
    }
    //...2) stampo "fizz" al posto del numero multiplo di 3
    else if (index % 3 == 0) {
        console.log("fizz")
    }
    // ...3) stampo "buzz" al posto del numero multiplo di 5
    else if (index % 5 == 0) {
        console.log("buzz")
    }
    // ...4) stampo il numero index 
     else {
        console.log(index)
    }
}
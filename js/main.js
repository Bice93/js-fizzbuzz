// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// BONUS 1: Crea un container nel DOM e aggiungendo (attravero la funzione append())
//          un elemento html con il numero o la stringa corretta da mostrare.

// BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
//          a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

// ----------------------------------------------------------------

// BONUS. Creo una variabile
const containerBox = document.getElementById(`container_box`);


// --START-------------------CICLO FOR--------------------------
// 1) stampo in console i numeri da 1 a 100
for (let index = 1; index <= 100; index++) {
    // console.log(index);

    // *********************BONUS***************************
    // mi creo un elemento vuoto all'interno del container_box
        const smallBox = document.createElement(`div`);

    // assegno all'elemento delle classi
        smallBox.classList.add(`small_box`);

    // inserisco il contenuto all'interno del mio nuovo elemento
        smallBox.innerHTML = index;

    // aggiungo il nuovo elemento al padre (in questo caso è: container_box)
        containerBox.append(smallBox);

    // ****************************************************
    // ---------------------------IF---------------------
    // ...5) stampo i numeri multipli sia di 3 che di 5
    if (index % 3 == 0 && index % 5 == 0) {
        console.log("fizzbuzz");
        smallBox.classList.add(`third_sp`);  //*bonus 2*
        smallBox.innerHTML = "fizzbuz"; //visualizzo sulla pagina l'output
    }
    //...2) stampo "fizz" al posto del numero multiplo di 3
    else if (index % 3 == 0) {
        console.log("fizz");
        smallBox.classList.add(`first_sp`); //*bonus 2*
        smallBox.innerHTML = `fizz`; //visualizzo sulla pagina l'output
    }
    // ...3) stampo "buzz" al posto del numero multiplo di 5
    else if (index % 5 == 0) {
        console.log("buzz");
        smallBox.classList.add(`second_sp`); //*bonus 2*
        smallBox.innerHTML = `buzz`; //visualizzo sulla pagina l'output
    }
    // ...4) stampo il numero index 
     else {
        console.log(index);
        smallBox.innerHTML = index; //visualizzo sulla pagina l'output
    }
};
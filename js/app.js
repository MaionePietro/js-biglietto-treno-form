// 0: Chiedere nome e cognome 

let nome, cognome;
console.log(nome, cognome);

// 1: Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere

km = parseInt(km);
console.log(km);

// 2: Chiedere l'età del passeggero

anni = parseInt(anni);
console.log(anni);

// 3: Calcolare il prezzo totale dei kilometri

const kmPrezzo = (0.21 );
console.log(kmPrezzo);

const totKm = (km * kmPrezzo);
console.log('prezzo chilometri: ' + totKm + ' €');

// 4: applicare sconto in base all'età 20% junior e 40% senior

let sconto =0, prezzoFinale, prezzoDecimali;
if(anni <= 18){
    sconto = (totKm / 100) * 20;
}else if(anni >= 65){
    sconto = (totKm / 100) * 40;
}
prezzoFinale = totKm - sconto;
prezzoDecimali = prezzoFinale.toFixed(2);
console.log('prezzo finale: ' + prezzoDecimali + '€');



const btcElement = document.querySelector('button');
let sconto =0, prezzoFinale, prezzoDecimali;
const kmPrezzo = (0.21 );

btcElement.addEventListener('click', function(){
    //nome cognome
    const nomeCognome = document.querySelector('input[type="nome"]')
    console.log(nomeCognome.value);
    document.getElementById('nome_id').innerHTML = nomeCognome.value;


    //km precorrere
    const kmPercorrere = document.querySelector('input[type="kmPercorsi"]')
    console.log(kmPercorrere.value);
    let km = parseInt(kmPercorrere.value);
    const totKm = (km * kmPrezzo);
    console.log('prezzo chilometri: ' + totKm + ' €');

    //fascia età
    const fasciaEta = document.querySelector('select[name="eta"]')
    console.log(fasciaEta.value);
    let color = fasciaEta.value;

    switch(color) {
        case '1':
            sconto = (totKm / 100) * 20;
            prezzoFinale = totKm - sconto;
            break
        case '2':
            sconto = (totKm / 100) * 40;
            prezzoFinale = totKm - sconto;
            break
        default:
            prezzoFinale = totKm
    }
    prezzoDecimali = prezzoFinale.toFixed(2);
    console.log(prezzoDecimali);
    document.getElementById('prezzo_id').innerHTML = prezzoDecimali;
})



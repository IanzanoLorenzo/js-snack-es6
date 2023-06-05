"use strict";

let biciclette = [
    {
        nome : 'Bici 1',
        peso : '8.6 kg'
    },
    {
        nome : 'Bici 2',
        peso : '7.5 kg'
    },
    {
        nome : 'Bici 3',
        peso : '6.8 kg'
    },
    {
        nome : 'Bici 4',
        peso : '8.2 kg'
    },
    {
        nome : 'Bici 5',
        peso : '9.1 kg'
    },
    {
        nome : 'Bici 6',
        peso : '7 kg'
    }
]

let pesoBiciLeggera = 0, biciLeggera;

biciclette.forEach((bici) => {
    let {peso} = bici
    if(pesoBiciLeggera === 0 || pesoBiciLeggera > peso){
        pesoBiciLeggera = peso;
        biciLeggera = bici
    }
})

console.log(biciLeggera)
"use strict";

const studenti = [
    {
        'id'    :213,
        'nome'  :'Marco della Rovere',
        'voti'  :78
    },
    {
        'id'    :110,
        'nome'  :'Paola Cortellessa ',
        'voti'  :96
    },
    {
        'id'    :250,
        'nome'  :'Andrea Mantegna',
        'voti'  :48
    },
    {
        'id'    :145,
        'nome'  :'Gaia Borromini',
        'voti'  :74
    },
    {
        'id'    :196,
        'nome'  :'Luigi Grimaldello ',
        'voti'  :68
    },
    {
        'id'    :102,
        'nome'  :'Piero della Francesca',
        'voti'  :50
    },
    {
        'id'    :120,
        'nome'  :'Francesca da Polenta',
        'voti'  :84
    }
]

//creato array con i nomi degli studenti in maiuscolo
let newClass = studenti.map((item) => item.nome.toUpperCase())

console.log(newClass)

//creato array con gli studenti con voti superiori a 70
let over70 = studenti.filter((item) => item.voti > 70)

console.log(over70)

//creato array con gli studenti con voti superiori a 70
let over70Over120 = studenti.filter((item) => item.voti > 70 && item.id > 120)

console.log(over70Over120)
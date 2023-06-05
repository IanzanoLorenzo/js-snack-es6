"use strict";

let squadre = [
    {
        nome    :'Juventus' 
    },
    {
        nome    :'Foggia' 
    },
    {
        nome    :'Inter' 
    },
    {
        nome    :'Milan' 
    },
    {
        nome    :'Napoli' 
    },
    {
        nome    :'Sampdoria' 
    },
    {
        nome    :'Pulcini di Villar Basso' 
    },
    {
        nome    :'Tom' 
    },
    {
        nome    :'Boh FC' 
    },    
    {
        nome    :'SC Non Conosco Squadre' 
    },
    {
        nome    :'Aspe\' Forse Una FC' 
    },
    {
        nome    :'La Grande Torino (ma quello bello no quello di ora)' 
    }    
]

function randomNumber(min,max){ 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

squadre.forEach((squadra) => {
    squadra.puntiFatti = randomNumber(1, 10)
    squadra.falliSubiti = randomNumber(1, 10)
})

let newSquadreArray = squadre.map((squadra) => {
    const {nome, falliSubiti} = squadra
    return {nome, falliSubiti}
})

console.log(newSquadreArray)
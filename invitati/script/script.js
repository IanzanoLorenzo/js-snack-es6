"use strict";

const tavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

let segnaposto = tavoloVip.map((item, i) => {
    let invitato = {
        "Nome Tavolo":"Tavolo Vip",
        "Nome dell'ospite": item,
        "Posto Occupato":i + 1
    };
    return invitato;
} 
)

console.log(segnaposto)
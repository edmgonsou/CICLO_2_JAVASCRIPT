
//for in - lista os objetos

let Pessoas = {
    nome : "Steve Rogers",
    idade : 90,
    heroi : "Capitão America"
}

for (let propriedades in Pessoas){
    console.log(propriedades);
}

// for of - lista arrays 
let Herois = [
    {
    nome : "Steve Rogers",
    heroi : "Capitão America"
    },
    {
    nome : "Tonny Stark",
    heroi : "Homen de Ferro"
    },
    {
       nome : "Peter Parker",
    heroi : "Homen Aranha"
    }
];
Herois.push({nome:"Clark Kent",heroi:"Superman"});

for ( let marvel of Herois){
    for(let m in marvel){
        console.log(`${m} -> ${marvel[m]}`);
    }
}
let Frutas = [
    {
        nome: 'Manga',
        preço: 2.35,
    },
    {
        nome: 'Amora',
        preço: 2.55,
    },
    {
        nome: 'Goiaba',
        preço: 1.89,
    },
    {
        nome: 'Uva',
        preço: 4.29,
    },
];
 let soma =0;

function relacao(fru){
    for(let x of fru){
        for(let y in x ){
            console.log(`${y} -> ${x[y]}`);           
                                              
        }
        
        console.log("");
    }
    console.log("-----------------");
    for (let i=0;i<Frutas.length; i++){
        soma = soma + (Frutas[i].preço);
    }
    console.log(`Total -> R$ ${soma}`);
}
relacao(Frutas);
let palavra = (palavra, indice)=>{
    indice2 = indice - 1;
    console.log(`Esta palavra tem ${palavra.length} carácteres`);
    console.log(`A palavra ${palavra} ficou ${palavra.toUpperCase()}`);
    console.log(`A letra ${palavra.match(palavra[indice2])} é o ${indice}º carácter da palavra ${palavra}`);
    console.log(`${palavra} ficou ${palavra.replace(palavra[indice2], 'x')}`)

    

}
palavra('Marcelo',3);


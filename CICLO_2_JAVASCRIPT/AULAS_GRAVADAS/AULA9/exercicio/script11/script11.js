let nome = ["Alessandra", "Daniela", "Marcela", "Cecilia", "Kelly"]

const manipulaNome = (nome, NovoNome, NumIndice)=>{
    console.log(`A quantidade de elemento do array...: ${nome.length}`);
    nome.push(NovoNome);
    console.log(`Você escolheu o índice ${NumIndice} que é o elemento ${nome[NumIndice]}`);
    console.log(`A quantidade atual de elementos do array é de..: ${nome.length}`);
}


manipulaNome(nome, 'Mariana', 5);
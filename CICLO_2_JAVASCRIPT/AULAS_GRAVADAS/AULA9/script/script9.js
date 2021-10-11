//concat() - Junta dois ou mais arrays

let nomes = ["Edmilson", "Luiz", "Marcelo", "Evandro","Jonas"];
let nomes2 = ["Pierre", "Ivans", "Kimberly", "Katarina"];

console.log(nomes);
console.log(nomes2);

let juntaArrays = nomes.concat(nomes2);
console.log(juntaArrays);

//indexof() - Procura um determinado elemento de um array, e retorna posição

//let nomes2 = ["Pierre", "Ivans", "Kimberly", "Katarina"];

alert(nomes2.indexOf("Pierre"))
let buscaNome = "Kimberly";

if(nomes2.indexOf(buscaNome) != (-1)){
    alert(`Eu encontrei o ${buscaNome} na posição ${nomes2.indexOf(buscaNome)}`);
}else{
    alert("Nome não encontrado!");
}

//join() - transforma elementos de um array em uma string

console.log(nomes2);
console.log(nomes2.join());

//push() - insere elemento no fim do array

let frutas = ["Manga", "Banana", "Jaca"];

frutas.push("Melancia", "Laranja", "Pera");
console.log(frutas);

//pop() - Remove o último elemento de um array

frutas.pop();
console.log(frutas);

//reverse() - Inverte a ordem dos elementos de um array

frutas.reverse();
console.log(frutas);

//shift() Remove o primeiro elemento de um array

frutas.shift();
console.log(frutas);

//sort() - Ordena elementos de um array em ordem crescente

let numeros = [200, 2, 180, 3, 1, 600, 410]; // em numeros não é preciso
numeros.sort();
console.log(numeros);

let pessoa = ["Jenny", "Edmilson", "Aline", "Berenice", "Abadiel"];
pessoa.sort();
console.log(pessoa);

//tostring() - Converte um array em uma string e retorna esta string

console.log(frutas.toString());

//unshift() -Insere um elemento no inicio do array

frutas.unshift("Limão");
console.log(frutas);

//splice() - Corta ou remove um elemento de um array em um ponto indicado

let turma = ["Ana Maria", "Xuxa","Eliana","Fautão", "Huck"];
console.log(turma);

let NomeRemovido = turma.splice(2,1);
console.log(NomeRemovido);
console.log(turma);
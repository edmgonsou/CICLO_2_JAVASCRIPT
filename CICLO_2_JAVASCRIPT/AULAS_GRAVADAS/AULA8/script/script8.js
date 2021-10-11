//TEMPLATE STRING
let str = `Qualquer conteúdo`;
let str2 = `Uma outra string ${str}`;

console.log(str2);

//ARRAYS

const frutas = ['Banana','laranja','Melancia','Maçã'];
console.log(frutas[3]);
let euGosto = `Eu gosto de ${frutas[2]}`;
console.log(euGosto);

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

const pessoa = [
    "josé",
    23,
    "Solteiro",
    "Bola",
    1.7,
    cores = ["Azul","amarelo","vermelho","preto"]
];

(function(){
    const jose = `Meu nome é ${pessoa[0]} eu tenho ${pessoa[1]} anos e sou ${pessoa[2]}
                eu também gosto de jogar ${pessoa[3]}. Eu tenho ${pessoa[4]} de altura 
                e gosto da cor ${pessoa[5][2]}`;
    document.write(jose);
})(pessoa)
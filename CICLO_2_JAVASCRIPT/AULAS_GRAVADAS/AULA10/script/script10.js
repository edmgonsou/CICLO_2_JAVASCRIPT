//match() - O método match procura uma palavra em uma string
// g/i/m

let nome = "Edmilson Gonzaga";
console.log(nome.match(/N/i));
console.log(nome.match('G'));

//search() - O método que procura ocorrência e retornando a posição na cadeia da string

console.log( nome.search('i'));
console.log(nome[3]);

//replace() - Este método substitui um string por outra, simples assim, ele pesquisa

let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat'; 

let strOut = str.replace(/i/gi, 'sim');
console.log(strOut);

// localeCompare() - método que efetua comparação entre duas strings

let gato = "gato";
let outroGato = "gato";

console.log(gato.localeCompare(outroGato));

//tostring() - o uso irá converter um valor qualquer em uma string.
let num = 12;
console.log(num.toString());

// tolowerCase() - Faz a conversão de uma string inteira para caracteres minúsculas(caixa baixa)

let min = 'ESTE  É UMA EXEMPLO DE CONVERSÃO PARA CAIXA BAIXA';
console.log(min.toLowerCase());

// toupperCase() - Faz a conversão de uma string inteira para caracteres maiúscula(caixa alta)

console.log(str.toUpperCase());

// trim() - Faz a remoção de espaços antes e depois da string espeficiada.

let str1 = '      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque repellat'   ;
console.log(str1.trim());

// isNaN() quando não consegue fazer a conversão com Number() ele retorna NaN

let num1 = '1';
console.log(isNaN(num1));
if (isNaN(num1) ){
    console.log("Isto não é uma número");
}else{
    console.log("Isto é uma número");



    //tofixed() analisa um valor flutuante e retorna uma string conforme o parâmentro
    // de casas, ou seja valor decimais aredonda para cima.

    let nu = 2.5738;
    console.log(nu);
    console.log(nu.toFixed(2));
}

//toLocaleString() irá retornar uma string com um respresentação da moeda definida
//como parâmetro currency.
// toLocaleString('pt-br', { style: 'currency', currency: 'BRL'})

let real = Number(6.5738);
console.log(real.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));
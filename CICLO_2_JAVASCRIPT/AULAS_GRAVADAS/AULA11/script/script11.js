function Pessoa(nome){
    this.nome = nome;
}

Pessoa.prototype.msg = function(){
    alert(`Olá ${this.nome}`);
}

let NovaPessoa = new Pessoa("José");
let outraPessoa = new Pessoa("Maria");

NovaPessoa.msg();
outraPessoa.msg();

console.log(NovaPessoa);
console.log(outraPessoa);

//OUTRA MANEIRA DE CRIAR UM OBJETO
let Pessoa2 = {
    'nome' : '',
    'idade' : ''
}
Pessoa2.__proto__.msg = function(){
    alert(`Olá ${Pessoa2.nome}`);
}
let p = Pessoa2;

p.nome = "Edmilson";
postMessage.msg();
console.log(p);

//CRIANDO OBJETO COM ARRAY

let Pessoa3 = [
    {
        'nome' : 'Edmilson',
        'idade' : 36,
        'sexo' : 'M'
    },
    {
        'nome' : 'Joselina',
        'idade' : 23,
        'sexo' : 'F'
    },
    {
        'nome' : 'Casandra',
        'idade' : 50,
        'sexo' : 'F'
    },    

]

let Np = Pessoa3;
 console.log(Np[1].nome);
 console.log(`Existem ${Np.length} cadastrados`);


//FUNÇÕES ANONIMAS

let msg = ()=>{
    alert("Estou feliz com o JavaScrip");
}
msg();

function teste(){
    let nome = "Edmilson";
return nome;
}
document.write(teste());

//FUNCOES AUTOEXECUTAVEL

(function(prod, preco){
    alert("O produto "+prod+" custa R$ "+preco);
})("Arroz", 10.50)

let v1 = prompt("Digite o primeiro numero:");
let v2 = prompt("Digite o segundo numero");

const soma =(valor1, valor2)=>{
    let result = Number(valor1) + Number(valor2);
    console.log(result);
} 
soma(v1, v2);

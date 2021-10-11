//while

let loop = 0;

let cores = ['Azul', 'Vermelho','Roxo'];
while(loop < cores.length){
    console.log(cores[loop]);
    loop++;
}

//do while

let teste=0;
do{
    teste = Number(prompt('Digite 0 para sair'));
    switch(teste){
        case 0:
            alert("Encerrando o Sistema");
        break;
        case 1:
            alert('Consultando');
        break;
        case 2:
            alert("Cadastrando");
        break;
        default:
            alert("Opção invalida");
        break;
    }

}while(teste != 0);
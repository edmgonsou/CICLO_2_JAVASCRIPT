import{selecaoItensCesta, listaDinamica} from "./logicaDesafio1.js";  
window.onload = function(){
       
    let itensKitanda = [
        {nome: 'Mamão Papaia', preco:'4.25'},
        {nome: 'Laranja', preco:'2.49'},
        {nome: 'Banana', preco:'3.50'},
        {nome: 'Melancia', preco:'7.50'},
        {nome: 'Abacate', preco:'6.89'},
    ];

    listaDinamica(itensKitanda, "produtos");
    selecaoItensCesta("produtos","cestaDoCliente","mostraTotalCompra");    
}
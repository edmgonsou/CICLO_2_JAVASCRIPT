window.onload = function(){
    let veiculos =[
        {tipo: 'Onibus'},
        {tipo: 'Motocicleta'},
        {tipo: 'Patinete'},
    ]

    const listaVeiculos = document.querySelector("#transportes");
    const botao = document.querySelector("#btn");

    botao.addEventListener('click',function(){
        for(let tran of veiculos){
            let li = document.createElement('li');
            listaVeiculos.appendChild(li).textContent+= tran.tipo;
        }
        
    })
  
}
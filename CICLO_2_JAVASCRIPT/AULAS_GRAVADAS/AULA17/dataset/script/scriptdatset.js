window.onload = function(){
    
    const btnBuscar = document.querySelector("#btnBuscar");
    const txtNameCli = document.querySelector("#nomeCliente");

    btnBuscar.addEventListener('click',function(){
        let datasetcliente = txtNameCli.dataset.codigo;
        console.log(datasetcliente);
    })
}
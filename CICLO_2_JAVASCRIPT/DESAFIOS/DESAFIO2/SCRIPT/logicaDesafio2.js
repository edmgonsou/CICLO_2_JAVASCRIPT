    
    function dadosEncontrados(enderecoCompleto){    
        for(let nomeCampo in enderecoCompleto){
            if(document.querySelector(`#${nomeCampo}`)){
            document.querySelector(`#${nomeCampo}`).value = enderecoCompleto[nomeCampo];
            }
        }
    }

    let meAcha = async function(numCep){        
        let url = `https://viacep.com.br/ws/${numCep}/json/`;
        try{
            let buscarFetch = await fetch(url);
            let endercoCompletojson = await buscarFetch.json();               
            dadosEncontrados(endercoCompletojson);
        }catch(error){
            alert(error);
        }
    }

    function clicar(btn, cep){
        const botaoBuscar = document.querySelector(`#${btn}`);
        const capturaCEP = document.querySelector(`#${cep}`);

        botaoBuscar.addEventListener('click', function(){            
                 meAcha(capturaCEP.value)

         });

    }

    export{clicar};



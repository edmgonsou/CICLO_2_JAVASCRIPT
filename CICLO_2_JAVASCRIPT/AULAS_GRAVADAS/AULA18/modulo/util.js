

    function calcular (idproduto, resultado){
        const preco = document.querySelectorAll(`#${idproduto} >li`);
        const valorResultado =document.querySelector(`#${resultado}`);

        let totalzinho = 0;

        for(let i of preco){
            totalzinho += Number(i.dataset.preco);
        }
        valorResultado.value = totalzinho;
    
    }
    function removeProdutos(id){
        const lista = document.querySelectorAll(`#${id} > li`);

        for(let produto of lista){
            produto.addEventListener('click',function(){
                produto.remove();
                calcular('produtos','somatotal');
            })
        }
    }
    removeProdutos('produtos');
    calcular('produtos','somatotal');

       

export {calcular,removeProdutos};

 
 


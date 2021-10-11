window.onload = function(){
    let produtos = [
        {descricao: 'Biscoito Mirabel', preco:'2.20'},
        {descricao: 'Marmelada', preco:'3.50'},
        {descricao: 'Sabonete', preco:'2.50'},
        {descricao: 'Pamonha', preco:'5.50'},
    ]
    const listaProdutos = document.querySelector("#listaProdutos");
    const Total = document.querySelector("#total");

    (()=>{
        let totalzinho = 0;
        for(let pro of produtos){
            const filhoLi = document.createElement('li');

            for(listp in pro){
                if(listp=='preco'){
                    listaProdutos.appendChild(filhoLi).setAttribute('data.preco', pro[listp]);
                    totalzinho += Number(pro[listp]);
                    }else{
                    listaProdutos.appendChild(filhoLi).textContent = `${pro[listp]}`;
                }
               
            }
        }
        Total.value = totalzinho.toFixed(2);
    })(produtos)
}
window.onload=function(){
    

    const botao = document.querySelector("#btn");
    const txtBox = document.querySelector("#txtbox");
    const saida = document.querySelector("#baixo");

    botao.addEventListener('click',function(){        
    

        let num = Number(txtBox.value);
        
            let tabuada=0;
            if (typeof num !== 'number'){
                alert("Digite um valor numérico válido");
            }else{
                if(num < 1 || num > 10){
                    alert("Digite um valor entre 1 e 10");
                }else{
                    saida.innerHTML = '';               
                    while(tabuada<=10){                                   
                        saida.innerHTML += `<br>${num} x ${tabuada}   =>   ${(num * tabuada)}`;
                        tabuada++;
                    }
                }
            }
            
        
    })  
        
}
    



 

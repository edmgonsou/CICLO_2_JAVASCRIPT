let numero = 2;

function tabuada(num){
    let tabuada=0;
    if (typeof num !== 'number'){
        alert("Digite um valor numérico válido");
    }else{
        if(num < 1 || num > 10){
            alert("Digite um valor entre 1 e 10");
        }else{
            console.log(`Tabuada do ${num}`);
            while(tabuada<=10){                
                console.log(`${num} x ${tabuada} = ${(num * tabuada)}`);
                tabuada++;
            }
        }
    }
    
}
tabuada(numero);
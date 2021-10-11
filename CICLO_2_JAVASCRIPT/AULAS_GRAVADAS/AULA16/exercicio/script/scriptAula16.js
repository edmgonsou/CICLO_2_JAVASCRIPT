window.onload = function(){

    const num1 = document.querySelector("#numero1");
    const num2 = document.querySelector("#numero2");
    const soma = document.querySelector("#somar");

    num2.addEventListener('blur', function(){
        soma.value = Number(num1.value) + Number(num2.value);             
    })

    
            
    
}
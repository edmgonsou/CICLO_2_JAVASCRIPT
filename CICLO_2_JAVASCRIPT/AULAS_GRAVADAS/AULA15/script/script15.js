window.onload=function(){
    //alert("Olá povo do JS");


    const botao = document.getElementById('btn');
    const txtBox = document.querySelector("#txtBox");
    const caixa = document.querySelector("#caixa");


    botao.addEventListener('click',function(){
       // alert(txtBox.value);
       caixa.innerHTML += ' ' + txtBox.value + '';
    })
}
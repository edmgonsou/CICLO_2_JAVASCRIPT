(function(){
    let nome = prompt("Informe seu nome");
    let altura = prompt("Informe sua altura");
    let peso = prompt("Informe seu peso");
    let imc = Number(peso)/(Number(altura)*2);
    document.write(`Nome: ${nome} <br>`, `Altura: ${altura}<br>`, `Peso: ${peso}<br>`,
    `IMC: ${imc}`)
})()
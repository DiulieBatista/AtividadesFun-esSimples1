const ler = require('readline-sync');

var alcool = 4.70;
var gasolina = 5.86;
let preco =0;

function cliente () {
    
let combustivel = ler.question("- Digite o tipo de combustível (A - Álcool, G - Gasolina): ").toLowerCase();
let litro = ler.questionFloat("- Digite a Quantidade de Litros: ").toLowerCase();


if (combustivel === "a") {
    if (litro <= 25) {
        preco = (litro * alcool) * (2 / 100);
    } else {
        preco = (litro * alcool) * (4 / 100);
    }
} else if (combustivel === "g") {
    if (litro <= 25) {
        preco = (litro * gasolina) * (3 / 100);
    } else {
        preco = (litro * gasolina) * (5 / 100);
    }
  
}
exibirTotal(preco);

}

function exibirTotal(preco) {
    let p = preco;
    console.log("Total a ser pago: R$ " +  p.toFixed(2));

}


cliente();


const ler = require('readline-sync');


let parcelas;
let result=0;

function dados() {
    

let salario = ler.questionFloat("imforme o valor do seu salario bruto   :");
 parcelas = ler.questionFloat("imforme o valor da prestação :");


return result = salario *0.25;
}


if( parcelas <= result ){

console.log( "o  emprestimo  pode ser consedido ");

} else{
    console.log( "o  emprestimo não pode ser consedido ");
}

dados();


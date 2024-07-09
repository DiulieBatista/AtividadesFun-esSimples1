const ler = require('readline-sync');
let meta=0;
let num =0;

function premio() {
meta =1500.00;
num = ler.questionFloat("Digite o valor da venda: ");
resul(num) ;  

}
 function resul (num) {
    

if (num >= meta) {
     console.log(" voce ganhou o premio ");
} else {
    console.log(" voce não  ganhou o premio ");
}
 
}
 premio();
 
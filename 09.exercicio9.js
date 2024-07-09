const ler = require('readline-sync');
let nome;
let vendas;

function usuario() {

 nome = ler.question("Informe seu nome  ");
 vendas = ler.questionFloat("Informe a quantidade de produtos vendidos ");

 soma(vendas)
}
function soma (vendas) {

 if (vendas >=450 ) {
    result  = vendas*10;
    

} else if (vendas >=200 ) {
    result = vendas* 7.50;
   
    

}else if (vendas < 200) {
    result  = vendas* 5.00;
   
} else {
    
}
resultado(result)

}
function resultado (result) {
    console.log("O valor da comissão é: ", nome, ",",result   );
 
}
usuario();
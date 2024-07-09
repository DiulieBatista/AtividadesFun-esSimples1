const ler = require('readline-sync');
let num=0;

function diasSemana() {
    
let num = ler.questionInt("digite um numero de 1 a 7 ");
usuario(num);

}
function usuario(num) {

    if (num == 1 ) {
        console.log("o dia da semana e domingo");
    
    } else if (num ==2 ) {
        console.log( " o dia da semana e segunda-feira ");
    
    } else if (num== 3) {
    console.log( " o dia  da semana e terça-feira");
    
    } else if (num ==4 ) {
        console.log(" o dia da semana e quarta-feira");
    
    } else if (num==5) {
        console.log( " o dia da semna e quinta-feira ");
    
    } else if (num == 6 ) {
        console.log(" o dia da semana e sexta-feira ");
    
    } else if (num == 7 ) {
        console.log(" o dia da semana e sabado ");
    } else {
    console.log(" opção digitada e invalida ");
    }
        
}
diasSemana();




const ler = require('readline-sync');

let time1=0;
let time2=0;
let gol1=0;
let gol2=0;

function jogos() {
 time1 = ler.question("Informe o nome do time ");
 time2 = ler.question("Informe o nome do time ");
 gol1 = ler.questionFloat("Informe a quantidade de gols marcados ");
 gol2 = ler.questionFloat("Informe a quantidade de gols marcados ");

 placar(gol1,gol2);
}

function placar(gol1,gol2) {
    
if (gol1 > gol2) {
    
} else if (gol2 > gol1){

}else{
    console.log (" empate ")
}
exibir (time1,time2)
}
function exibir(time1,time2) {
    console.log (" venceu "+ time1)
    console.log (" venceu "+ time2)
}

jogos();

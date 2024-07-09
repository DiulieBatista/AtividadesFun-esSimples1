const ler = require('readline-sync');

let homem1;
let homem2;
let mulher1;
let mulher2;

function usuario() {
    homem1 = ler.questionFloat("Informe a idade do homem 1: ");
    homem2 = ler.questionFloat("Informe a idade do homem 2: ");
    mulher1 = ler.questionFloat("Informe a idade da mulher 1: ");
    mulher2 = ler.questionFloat("Informe a idade da mulher 2: ");

    let soma1 = 0;
    let soma2 = 0;

    if (homem1 > homem2) {
        if (mulher1 > mulher2) {
            soma1 = homem1 + mulher2;
            soma2 = homem2 + mulher1;
        } else {
            soma1 = homem1 + mulher1;
            soma2 = homem2 + mulher2;
        }
    } else {
        if (mulher1 > mulher2) {
            soma1 = homem2 + mulher2;
            soma2 = homem1 + mulher1;
        } else {
            soma1 = homem2 + mulher1;
            soma2 = homem1 + mulher2;
        }
    }

    exibir(soma1, soma2);
}

function exibir(soma1, soma2) {
    console.log("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1);
    console.log("A soma da idade do homem mais novo com a mulher mais velha é: " + soma2);
}

usuario();

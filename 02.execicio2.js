
const ler = require('readline-sync');


let num =0;

function numeros() {
    
 let num = ler.questionFloat("Digite um número: ");
 opt(num);
 
}


function opt (num) {

    if (num % 10 == 0) { 
        num = num /10 ;
        console.log("o numero e divisivel por 10: " + num );
        
     } else if (num % 2 == 0) { 
         num = num /2 ;
         console.log("o numero e divisivel por 2: " + num );
     
      } else if (num % 5 == 0) { 
         num = num /5;
         console.log("o numero e divisivel por 5 : " + num );
     
      }else { 
         
         console.log("o numero  não e divisivel por 10,2 ou 5 : "+ num );
      }
     
}

numeros();
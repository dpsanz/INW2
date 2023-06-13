    const leia = require ("prompt-sync")()
//receba um numero do usuario. 5 e 9 : 5, multiplicar por 3, acima de 100, programa para
// 5, 15, 45, 135
    let numero = 0
    numero = parseInt(leia("Digite um número entre 5 e 9: "))

    //console.log(numero)
  //  do {
    //    numero = numero * 3 
   // } while () 


if (numero <= 4) {
    console.log ("Você digitou um numero abaixo de 5...")
}
else if (numero >= 10){
    console.log ("Você digitou um numero acima de 9... ")
}
else {
    while (numero < 100) {
        numero = numero *3
        console.log(numero)
    }
}
//funcao arrow que recebe um numero e mostra na tela o numero e diz se é par ou impar, negativo ou zerado
const mostrarParImpar = (numero) =>{
    if(numero < 0){
        console.log(numero, "é um número NEGATIVO")
    }
    else if(numero == 0){
        console.log (numero, "é ZERO")
    }
    else if((numero%2)==0){
        console.log(numero, "é PAR")
    }
    else {
        console.log(numero, "é IMPAR")
    }
}

mostrarParImpar (12)
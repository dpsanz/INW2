const leia = require ("prompt-sync") ()

let numero
let total = 0

numero = parseInt(leia("Digite um número inteiro negativo: "))

for (let x=1; x<=numero; x++) {
    if (x % 2 == 1) {
        console.log(x)
        total = (total+x)

    }
}

console.log ("A soma desses números é "+total)
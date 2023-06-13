// o usuario vai digitar 3 numeros
// 1 - mostrar o somatorio destes numeros
// 2 - mostrar qual foi o maior numero digitado
// 3 - colocar numeros digitados em ordem decrescente
// 4 - o programa para de solicitar numeros quando o usuario digitar um numero negativo
// a soma dos numeros nao deve considerar o numero negativo

    const leia = require ("prompt-sync")();
    numero = 0
    qntdNum = 0
    total = 0
    maiorNum = 0

while (numero > 0) {
    numero = parseInt(leia("Digite um numero inteiro positivo: "))
    total = numero + total
    qntdNum = qntdNum+1
    if (maiorNum < numero) {
        maiorNum = numero
    }
}
total = total - numero
qntdNum = qntdNum - 1
console.log ("O total é "+total+". A quantidade de numeros digitados é: "+qntdNum+". E o maior número é: "+ maiorNum)
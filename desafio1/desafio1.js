    const leia = require ("prompt-sync") ();

    //leia o nome de usuario
    //ler o salario do usuario
    // se o salario for menor 2500 a pessoa é isenta
    // se o salario for acima de 2500 e menor que 5000 paga imposto de 15%
    // mostra imposto e salario
    // se o salario for acima de 5000 paga imposto de 25%
    // mostra imposto e salario

    //variaveis
    let nomeusuario = leia("Digite o nome do usuário : ");
    let salario = parseFloat(leia("Digite o salário do usuário : "));
    let imposto = 0

    if (salario < 2500) {
        imposto = 0
        console.log (nomeusuario+" está isento de imposto :)")
    }
    else if (salario < 5000 && salario >= 2500) {
        imposto = salario*0.15
        console.log (nomeusuario+" tem imposto de 15% | Ou "+imposto+" | Salario líquido: "+(salario-imposto)) 
    }
    else {
        imposto = salario*0.25
        console.log (nomeusuario+" tem imposto de 25% | Ou "+imposto+" | Salario líquido: "+(salario-imposto))
    }

    //fim de programa
    console.log ("Fim de Programa ")
    


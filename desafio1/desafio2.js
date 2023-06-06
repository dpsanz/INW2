//programa que solicita o nome e a idade da pessoa
//ano referencia: 2023
//se a pessoa for menor q 3 anos -"Nao aceitamos Bebes"
// idade maior 3 e menor/igual que 13 - "[nome] = faixa infantil"
// idade maior que 13 e menor/igual que 17 - "[nome] = faixa adolescente"
// idade maior que 17 e menor/igual a 65 - "[nome] = faixa adultos"
// idade maior que 65 - "[nome] - n atendemos idosos"

    const leia = require ("prompt-sync") ();

    //variaveis
    let nomeusuario = leia("Digite o nome do cliente : ");
    let anoNascimento = parseInt(leia("Digite o ano de nascimento : "));
    let idade = 2023-anoNascimento

    if (idade <= 3) {
        console.log (nomeusuario+" | NÃO ACEITAMOS BEBÊS")
    }
    else if (idade > 3 && idade <= 13) {
        console.log (nomeusuario+" | FAIXA INFANTIL") 
    }
    else if (idade > 13 && idade <= 17) {
        console.log (nomeusuario+" | FAIXA ADOLESCENTE") 
    }
    else if (idade > 17 && idade <= 65) {
        console.log (nomeusuario+" | FAIXA ADULTA") 
    }
    else {
        console.log (nomeusuario+" | NÃO ACEITAMOS IDOSOS")
    }

    //fim de programa
    console.log ("Fim de Programa ")
    



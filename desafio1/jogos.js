    const leia = require ("prompt-sync")()

    let aluno1, aluno2
    let nota1, nota2

    aluno1 = leia ("Digite o nome do aluno 1 : ")
    nota1 = leia ("Digite a nota do aluno 1 : ")

    aluno2 = leia ("Digite o nome do aluno 2 : ")
    nota2 = leia ("Digite a nota do aluno 2 : ")

    if (nota1<5) {
        console.log ("Oi "+aluno1+". Você tá de rec...")
    }

    else
    {
        console.log("Oi "+aluno1+". Você foi aprovado! ")
    }
    
    if (nota2<5) {
        console.log ("Oi "+aluno2+". Você tá de rec...")
    }

    else
    {
        console.log("Oi "+aluno2+". Você foi aprovado! ")
    }
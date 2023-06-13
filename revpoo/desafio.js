const leia = require("prompt-sync")()

let alunos = ['', '', '', '' ]
let nota = [0,0,0,0]

for (let x = 0; x < alunos.length; x++){
    console.log (alunos[x])
    alunos[x] = leia("Digite o nome do aluno: ")
    nota[x] = parseInt(leia("Digite a nota: "))
}

console.log ("BOLETIM")

console.log("Aluno\tNota\tAprovado")
for(let i = 0; i < alunos.length; i++){
    if (nota [i] >= 5){
    console.log(alunos[i]+'\t'+nota[i]+'\tS')
}
else {
    console.log(alunos[i]+'\t'+nota[i]+'\tN')
}
}



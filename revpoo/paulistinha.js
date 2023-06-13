//let equipe1 = 'SFC'
//let equipe2 = 'SPFC'
//let equipe3 = 'SCCP'
//let equipe4 = 'SEP'

//let pontos1 = 3
//let pontos2 = 3
//let pontos3 = 3
//let pontos4 = 3

//array ou vetores
    const leia = require("prompt-sync")()

let equipes = ['SFC', 'SPFC', 'SCCP', 'SEP' ]
let pontos = [0,0,0,0]

for (let x = 0; x < equipes.length; x++){
    console.log (equipes[x])
    pontos[x] = parseInt(leia("Digite quantos pontos: "))
}

console.log ("TABELA")

console.log("Time\tPontos")
for(let i = 0; i < equipes.length; i++){
    console.log(equipes[i]+'\t'+pontos[i])
}


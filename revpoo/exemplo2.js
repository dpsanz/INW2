const leia = require("prompt-sync")()

let mat = []


mat [0] = "m01"
mat [1] = "m02"
mat [2] = "m03"

let nomes = ["Abby","Bella","Chris"]

let notas = []
notas [0] = 5
notas [1]= 7
notas [2]= 4

console.log (mat)
console.log (nomes)
console.log (notas)

let situacao 
console.log ("MAT\tNOME\tNOTA\tSITUACAO") //MONTAR UM CABEÇALHO
for (let x=0; x<nomes.length; x++){
    if (notas [x]<=5){
        situacao = "REC"
    }
    else {
        situacao = "APROVADO"
    }
    console.log(mat[x]+'\t'+nomes[x]+'\t'+notas[x]+'\t'+situacao)
}

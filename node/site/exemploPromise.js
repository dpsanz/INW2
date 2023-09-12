function falarDepoisDE (segundos, frase){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundos * 1000)
    })
}

falarDepoisDE(3, "Ola 2MIB")
.then(frase => frase.concat (' ?!?'))
.then(outraFrase => console.log(outraFrase))

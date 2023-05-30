const leia = require("prompt-sync")()


class Papelaria{
    constructor (id, descricao, ativo, estoque, preco, marca, cor){
        this.id=id;
        this.descricao=descricao;
        this.ativo=ativo;
        this.estoque=estoque;
        this.preco=preco;
        this.marca=marca;
        this.cor=cor;

    }
    ativar() {
        this.ativo=true;

    }

    retirarEstoque(quantidade){
        if (this.ativo) {
            if (quantidade<0) {
                console.log ("Impossível, valor negativo...")
            }
        else if (quantidade==0) {
            console.log ("Impossível, valor zerado...")

        }
        else if (quantidade>this.estoque) {
            console.log("Impossível, não há estoque...")
        }
        else {
            this.estoque += quantidade
        }
    }
    else {
        console.log("Inativa...")
    }
}


    incluirEstoque(quantidade){
        if (this.ativo) {
            if (quantidade<0) {
                console.log ("Impossível, valor negativo...")
            }
        else if (quantidade==0) {
            console.log ("Impossível, valor zerado...")

        }

        else {
            this.estoque += quantidade
        }
    }
    else {
        console.log("Inativa...")
        }
    }
}

//Programa principal

console.log("Danz Papelaria ");
console.log("Danz: O compasso perfeito para a sua imaginação desenhar!\n")

const querComprar = leia(
    "Quer fazer compras? S/N: "
);

if (querComprar = "S") {
    console.log ("Cadastro inicial do produto")
    
    let id = parseInt (leia("Digite o ID do produto: "));
    let descricao = leia ("Digite a descrição do produto: ");
    let preco = parseFloat(leia("Digite o valor unitário do produto"))
    let marca = leia ("Digite a marca do produto: ");
    let cor = leia ("Digite a cor do produto: ")

    console.log ("Produto cadastrado ")

    let produto1 = new Papelaria (id, descricao, preco, marca, cor)

    for (let x = 1; x <= 5; x++ ) {
        console.log ("Venda: "+x);
        console.log ("Produto: "+Id);
        console.log ("Descricao: "+descricao);
        console.log ("Estoque atual: "+estoque);

        let quantidade = parseInt(leia("Quantos produtos deseja comprar? "))
        let valorCompra = quantidade*preco; 
        
        console.log("Valor a pagar: "+valorCompra);

        prodouto1.retirarEstoque(quantidade)
    }
}
else {
    console.log("Até breve!")
}





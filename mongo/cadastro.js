//This code is not translated. Original language: Brazilian Portuguese (PT-BR)
//To run this code remember to change The nodemon start to the name of this file
const mongoose = require('mongoose');
mongoose.connect ('mongodb://127.0.0.1:27017/livros', 
{useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind (console, 'connection.error'))
db.once ('open', function(){
    console.log("Estamos logados no MongoDB");
});

const produtoSchema = new mongoose.Schema ({
    descricao : String, 
    ano : Number, 
    valor : Number,
    estoque : Number
});

const Produto = mongoose.model ("Produto", produtoSchema);
const StarWars = new Produto ({
    descricao : 'Star Wars II',
    ano : 2007,
    valor : 30,
    estoque : 15
})
console.log (StarWars.descricao)
console.log (StarWars.ano)
console.log (StarWars. valor)
console.log (StarWars.estoque)

StarWars.save();

const Biblia = new Produto ({
    descricao : 'Biblia',
    ano : 2001,
    valor : 240,
    estoque : 1005
})
console.log (Biblia.descricao)
console.log (Biblia.ano)
console.log (Biblia. valor)
console.log (Biblia.estoque)

Biblia.save();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    } 
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao MongoDB")
})

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
})

const Alunos = mongoose.model('Alunos', alunoSchema)

const alice = new Alunos({
    matricula : 'rm10300',
    nome : 'Alice Zenit',
    idade : 18,
    turma : '3MIB'
});
alice.save();

const bella = new Alunos({
    matricula : 'rm12900',
    nome : 'Bella Yeong',
    idade : 16,
    turma : '2MIB'
});
bella.save();


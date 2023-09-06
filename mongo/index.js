const mongoose = require('mongoose');
mongoose.connect ('mongodb://127.0.0.1:27017/exemples', 
{useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS : 10000});

const db = mongoose.connection;

db.on('error', console.error.bind (console, 'connection.error'))
db.once ('open', function(){
    console.log("We are logged in MongoDB");
});

const personSchema = new mongoose.Schema ({
    name : String, 
    age : Number, 
    profession : String
});

const Person = mongoose.model ("Person", personSchema);
const annie = new Person ({
    name : 'Annie',
    age : 25,
    profession : 'Engineer'
})
console.log (annie.name)
console.log (annie.age)
console.log (annie. profession)

annie.save();
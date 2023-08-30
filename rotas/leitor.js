const { error } = require('console')
const fs = require('fs')

fs.readFile ('/index.html', (error, archive)=>{
    if (error) {
        throw error;
    }
    console.log(archive)
})

var archive = fs.readFile('/index.html');
console.log(archive);
// var os = require('os')
// console.log(os.platform());

// var express = require('express')
// var app = express()

// app.get("/", (req, res) => {
//     res.send("<h1>Cool Hacker</h1>")
// })

// app.get('/names/:name', (req, res) => {
//     let name = req.params.name
//     res.send(`Hello ${name}`)
// })

// app.get('/google', (req, res) => {
//     res.redirect(`https://www.google.com/`);
// })

// app.get(`/google/:search`, (req,res) => {
//     let search = req.params.search
//     res.redirect("https://www.google.com/");
//     res.redirect('https://www.google.com/search?q=${search}');
// })

// app.listen(3000, () => {
//     console.log("Port: 3000");

// })

var fs = require('fs')
fs.appendFileSync("my.txt","Hello dude")
fs.appendFileSync("my.txt","\nHello man")


var obj = {
    name:"Dude",
    age:10,
    email:"coolDude@icloud.com"
}

fs.appendFileSync("my.txt",JSON.stringify(obj))
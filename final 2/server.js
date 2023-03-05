var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs')

app.use(express.static("."));
fs.writeFileSync("data.json", '')
app.get('/', function (req, res) {
res.redirect('index.html');

});

server.listen(3000);

io.on('connection', function (socket) {
    socket.on("Send data",(data)=>{
        fs.appendFileSync("data.json", JSON.stringify(data)+"\n")
    console.log(data);
    
    });
    
    });
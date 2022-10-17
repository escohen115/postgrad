console.log("hello world")



//global is a global node object
//process is another useful global node object that informs you of the currently running node process (the current platform or OS)
//the runtime works via an event loop 


const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Error: file not found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error){
        console.log('error')
    }
    else{
        console.log('server is listening port ' + 3000)
    }
})
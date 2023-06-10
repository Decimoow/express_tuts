const http = require('http');
const fs = require('fs');
const mime = require('mime-types');

const server = http.createServer((req,res)=>{
    const mimeType = mime.lookup('express.html');
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': mimeType});
        console.log(mimeType)
        fs.readFile('final/express.html', 'utf-8', (err, data) => {
            res.write(data)
            res.end()
          });
        
    }else{
        res.writeHead(404)
        res.end('404 not found')
    }
})

server.listen(5000,()=>{
    console.log('listening port 5000')
})
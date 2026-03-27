http=require('http')
fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(`<html><head><link rel="stylesheet" href='style.css'></head><body><h1 id='demo'>hello welcome</body></html>`)
        res.end()
    }
    else if(req.url==='/1.png'){
    res.writeHead(200,{'Content-Type':'image/png'})
    data=fs.readFileSync('1.png')
    res.write(data)
    res.end()
   }
    else if(req.url=='/style.css'){
        res.writeHead(200,{'Content-Type':'text/css'})
       data=fs.readFileSync('style.css','utf-8')
       res.end(data)
    }
}).listen(5000,()=>{
    console.log('server-connected')
})
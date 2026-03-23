http=require('http')
fs=require('fs')
let server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('<h1>hello</h1><img src="1.png"/>')
   }
   else if(req.url==='/1.png'){
    res.writeHead(200,{'Content-Type':'image/png'})
    data=fs.readFileSync('1.png')
    res.write(data)
    res.end()
   }
    else if(req.url==='/callback.html'){
    res.writeHead(200,{'Content-Type':'text/html'})
    data=fs.readFileSync('callback.html')
    res.write(data)
    res.end()
   }

   else{
     res.writeHead(200,{'Content-Type':'text/html'})
    res.end('page not found')
   }
}).listen(3009,()=>{
    console.log('server connected')
})
http=require('http')
let server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>hello</h1>')
    res.end()
   }
   else if(req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
   }
   else{
     res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('page not found')
   }
}).listen(3010,()=>{
    console.log('server connected')
})
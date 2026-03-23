http=require('http')
let server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/html'})
   res.write('hiiii')
    res.write('<h1>hello server</h1>')
    res.end('how are you')
})
server.listen(6008,()=>{
    console.log('server connected')
})
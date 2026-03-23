http=require('http')
let server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/html'})
 res.write('<h1>hello</h1><img src="1.png"/>')
 res.end()
}).listen(3007,()=>{
    console.log('server connected')
})
http=require('http')
let server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'text/html'})
  res.write(req.url+"<br>")
  res.end("url fetched")
}).listen(3006,()=>{
    console.log('server connected')
})
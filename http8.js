

http=require('http')
setTimeout(()=>{
var server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    setTimeout(()=>{
        res.write('<h1>hello welcome</h1>')
    },500)
    res.end()
   }
   
}).listen(3011,()=>{
console.log('server connected')
})},5000)

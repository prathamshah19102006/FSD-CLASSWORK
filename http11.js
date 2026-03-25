http=require('http')
let server=http.createServer((req,res)=>{
   if(req.url==='/'){
   
   res.writeHead(200,{'content-type':'text/html'})
   res.write(`<html><body><a href='about'>About</a><br><a href='/'>home</a><br><a href='contact'>contact</a><br><p1 id='demo' style='color:blue;fontSize:20px'></p><script>
    document.getElementById('demo').innerHTML='this is home page'</script></body></html>`)
    res.end()
   }
   else if(req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
   }
   else if(req.url=='/contact'){
     res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>contact page</h1>')
    res.end()
   }
   else{
     res.writeHead(200,{'Content-Type':'text/html'})
    res.end('page not found')
   }
}).listen(5008,()=>{
    console.log('server connected')
})
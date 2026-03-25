http=require('http')
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`<html><body><p id='demo'></p>
         <script>
         setTimeout(()=>{
            document.getElementById('demo').innerHTML='welcome student'},5000)</script></body></html>`)
            res.end()
}).listen(5007)
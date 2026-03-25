http=require('http')
http.createServer((req,res)=>{
    setTimeout(()=>{
        res.write('dear mysy')
        res.end()
    },5000)
}).listen(5006)
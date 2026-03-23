const { json } = require('stream/consumers')

http=require('http')
let data={'name':'rohit','runs':56}
let server=http.createServer((req,res)=>{
   res.writeHead(200,{'Content-Type':'application/json'})

    res.end(JSON.stringify(data))
})
server.listen(5006,()=>{
    console.log('server connected')
})
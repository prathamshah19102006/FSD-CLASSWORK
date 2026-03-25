u=require('url')
fs=require('fs')
http=require('http')
addr='http://localhost:8006/login.html'
process.noDeprecation=true
q=u.parse(addr,true)
c=q.pathname
console.log(c)
f=c.split('/').pop()
console.log(f)
http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    data=fs.readFileSync(f,'utf-8')
    res.write(data)

    res.end()
}).listen(5010)
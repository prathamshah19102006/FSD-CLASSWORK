u=require('url')
fs=require('fs')
http=require('http')
addr='https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest'
process.noDeprecation=true
q=u.parse(addr,true)
// console.log(q)
q1=q.query
// console.log(q1)
data=`${q1.c1}!
${q1.c3} ${q1.c2}
${q.hash}`
console.log(data)
pn=q.pathname
fpn=pn.split('/').pop()
console.log(fpn)
fs.writeFileSync(fpn,data)
http.createServer((req,res)=>{
    if(req.url=='/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    data1=fs.readFileSync(fpn,'utf-8')
    console.log(data1)
    res.write(`<html><body><p style='color:blue'><pre>${data1}</pre></p></body></html>`)
    res.end()}
    else{
       res.writeHead(200,{'content-type':'text/plain'})
       res.write('page not found')
       res.end() 
    }
}).listen(5012,()=>{
    console.log('server-connected')
})
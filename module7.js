const data={data:{a:15,b:20,c:[40,30]}}
fs=require('fs')
// fs.writeFileSync('input.txt',JSON.stringify(data))
var d=fs.readFileSync('input.txt','utf-8')
d1=JSON.parse(d)
var add=d1.data.a+d1.data.b
var sub=Math.abs(d1.data.c[1]-d1.data.b)
mul=d1.data.c[1]*d1.data.c[0]
console.log(add,sub,mul)
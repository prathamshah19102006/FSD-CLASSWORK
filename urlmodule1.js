fs=require('fs')
var u=require('url')
let addr='http://localhost:8000/test?t1=25&t2=24&t3=25#abc'
process.noDeprecation=true
var q=u.parse(addr,true)
var m1=q.query.t1
console.log(m1)
var m2=q.query.t2
console.log(m2)
var m3=q.query.t3
console.log(m3)
var average=(parseInt(m1)+parseInt(m2)+parseInt(m3))/3
console.log(average)
fs.writeFileSync('result.txt',`avg mark of abc student is ${average}`)

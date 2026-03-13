fs=require('fs')
fs.writeFileSync('number.txt','1 0 -9 12 12')
var data=fs.readFileSync('number.txt','utf-8')
console.log(data)
var newarr=data.split(" ").sort((a,b)=>a-b)
console.log(newarr)
fs.appendFileSync('number.txt','\n sorted array'+newarr)
max_num=newarr[newarr.length-1]
console.log(max_num)
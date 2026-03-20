var u = require('url')
let addr ='http://localhost:8000/default.html?year=2024&month=March#warupdate'
process.noDeprecation=true
var q=u.parse(addr,true)
// console.log(q)
let data=q.query
console.log(data)
console.log(data.year)
if(data.year%4==0||data.year%400==0){
    console.log('year is leap year')
}
else{
    console.log('not a leap year')
}
// console.log(q.port)
// console.log(q.search)
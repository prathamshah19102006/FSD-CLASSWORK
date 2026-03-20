addr='http://localhost:8080/data?name=jay&age=25'
let data=new URL(addr)
console.log(data)
console.log(data.searchParams.get('name'))
console.log(data.searchParams.get("age"))
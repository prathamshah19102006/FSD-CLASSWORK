const student=[
    {
        'name':'abc',
        'age':25
    },
    {
        'name':'pqr',
        'age':30
    }
]
fs=require('fs')
fs.writeFileSync('student.txt',JSON.stringify(student))
data=fs.readFileSync('student.txt','utf-8')
console.log(data)
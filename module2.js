fs=require('fs')
fs.writeFile('Lec1.txt','JSON',(err)=>{
    if(err) throw err
    console.log('write operation done')
// })
fs.appendFile('Lec1.txt','we are student of 4th sem-branch',(err)=>{
    if(err) throw err
    console.log('append done')
// })
fs.readFile('Lec1.txt','utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
 })
})
})
 console.log('process end')
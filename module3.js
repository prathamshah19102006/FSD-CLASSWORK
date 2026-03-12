fs=require('fs')
fs.writeFile('hello/data.txt','Async operation',function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log('operation completed')
    }
})
//there is no hello folder so error
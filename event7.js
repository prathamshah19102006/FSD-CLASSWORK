fs=require('fs')
var EventEmitter=require('events')
const { futimesSync } = require('fs')
var ee=new EventEmitter()
var write=function(){
    fs.writeFile('new.txt','this is data',(err)=>{
        if(err) throw err
        console.log('writing done')
         ee.emit('update')
    })
}
var app=function(){
    fs.appendFile('new.txt','that is data',(err)=>{
        if(err) throw err
        console.log('append done')
         ee.emit('read')
    })
}
var read2=function(){
    data=fs.readFile('new.txt','utf-8',(err,data)=>{
        if(err) throw err
        console.log(data)
        console.log('thank you!!')
    }
)
}
ee.on('write',write)
 ee.on('update',app)
 ee.on('read',read2)
 ee.emit('write')
// ee.emit('update')
// ee.emit('read')

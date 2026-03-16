const { constants } = require('buffer')
var EventEmitter=require('events')
var ee=new EventEmitter()
fs=require('fs')
var create=function(){
    fs.mkdirSync('test2')

}
var createFile=function(){
     fs.writeFileSync('test2/abc.txt','file created successfully!!')
  
}
var appendFile=function(){
      fs.appendFileSync('test2/abc.txt','\ndata aPPENDED')
      console.log('data appended')
}
var read=function(){
    var data=fs.readFileSync('test2/abc.txt','utf-8')
    console .log(data)
}
var copy=function(){
    fs.copyFileSync('test2/abc.txt','test2/pqr.txt')
}
var del=function(){
    fs.unlinkSync('test2/abc.txt')
}
ee.on('create',create)
ee.on('createf',createFile)
ee.on('appendf',appendFile)
ee.on('readf',read)
ee.on('copyf',copy)
ee.on('delf',del)
ee.emit('create')
ee.emit('createf')
ee.emit('appendf')
ee.emit('readf')
ee.emit('copyf')
ee.emit('delf')
console.log('operations successfull')

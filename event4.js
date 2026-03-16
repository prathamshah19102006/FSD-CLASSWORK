var EventEmitter=require('events')
var ee=new EventEmitter()
var connection=function(){
console.log('connection successfull')
}
var datareceived=function(){
    console.log('data-reveived')
}
ee.on('connection',connection)
ee.on('datareceived',datareceived)
ee.emit('connection')
ee.emit('datareceived')
console.log('thank you')

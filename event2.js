var EventEmitter=require('events')
var ee=new EventEmitter()
ee.on('mrgfunction',()=>{
    console.log('today is wedding day')
})
ee.emit('mrgfunction')
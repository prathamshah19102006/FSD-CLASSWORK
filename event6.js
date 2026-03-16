var EventEmitter=require('events')
var ee=new EventEmitter()
let l1=function l1(){
    console.log('this is l1')
}
let l2=function l2(){
    console.log('this is l2')
}
ee.addListener('conn',l1)
ee.on('conn',l2)
//ee.emit('conn')
let d=ee.listenerCount('conn')
console.log(d)
ee.emit('conn')
ee.removeListener('conn',l1)
var d1=ee.listenerCount('conn')
console.log(d1)
ee.emit('conn')
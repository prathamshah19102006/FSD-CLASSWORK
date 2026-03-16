var EventEmitter=require('events')
var ee=new EventEmitter()
var p=function(){
    console.log('photographer coming.....!')
}
var d=function(){
    console.log('decoration done')
}
var c=function(){
    console.log('catering in progress..!')
}
var stage=function(){
    console.log('on going to stage')
}
var don=function(){
    console.log('happy ending!!')
}
ee.once('mrffunction',d)
ee.on('mrffunction',c)
ee.on('mrffunction',p)
ee.on('mrffunction',stage)
ee.on('mrffunction',don)
console.log('check my position')
ee.emit('mrffunction')
console.log('thank you!!')
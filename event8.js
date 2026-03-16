var EventEmitter=require('events')
var ee=new EventEmitter() 
ee.on('negr',()=>{
    console.log('radius must be +ve')
})
ee.on('negs',()=>{
    console.log('side must be +ve')
})
ee.on('final',(r,s)=>{
    if(r<0){
        ee.emit('negr')
    }
    else{
        var ans1=2*3.14*r
        console.log(ans1)
    }
    if(s<0){
        ee.emit('negs')
    }
    else{
        var ans2=4*s
        console.log(ans2)
    }
})
ee.emit('final',4,9)
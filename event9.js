var EventEmitter=require('events')
var ee=new EventEmitter()
  var arr=[10,10,10,10,10]
  ee.on('cal',(arr)=>{
    total=0
    for(i of arr){
        total=total+i
    }
    console.log(`total is${total}`)
    ee.emit('per',total)
  })
ee.on('per',(t)=>{
    percentage=(t/125)*100
    console.log(percentage)
})
ee.emit('cal',arr)

fs=require('fs')
data={
    "Entry 1": "Success",
    "Entry 2": "Success",
    "Entry 3": "Success"
}
fs.mkdir('tempReports',(err)=>{
    if(err) throw err
    console.log('dirtectory created')
    fs.writeFile('tempReports/daily.txt',"Report Start\n",(err)=>{
       if(err) throw err
         fs.appendFile('tempReports/daily.txt',JSON.stringify(data),(err)=>{
            if(err) throw err
            fs.readFile('tempReports/daily.txt','utf-8',(err,data)=>{
                if(err) throw err
                console.log(data)
    
                var d=data.split('Success\n')
                console.log(d)
                var c=d.length-1
                console.log(c)
                // for(var i in data){
                //     if(data[i]=='Success\n'){
                        
                //          count1++
                //     }

                // }
                if(c>=3){
                           fs.unlink('tempReports/daily.txt',(err)=>{
                            if(err) throw err
                           })
                }
                
            })
         })
    })
  
})
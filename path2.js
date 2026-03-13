fs=require('fs')
path=require('path')
let p='fsd-mern/path.txt'
let dir=path.dirname(p)
let fname=path.basename(p)
let newpath=dir+'/'+fname
fs.mkdir(dir,(err)=>{
    if(err) throw err
    console.log('directory crerated')
    fs.writeFile(newpath,'data write',(err)=>{
        if(err) throw err
        console.log('WRITE SUCCESS')
        fs.copyFile(newpath,dir+'/temp.txt',(err)=>{
            if(err) throw err
            console.log('COPIED')
            fs.unlink(newpath,(err)=>{
                if(err) throw err
                console.log('deleted')
                console.log('all done')
            })
        })
  })
})

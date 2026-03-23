

var data=[{'name':'rohit','runs':52},{'name':'kohli','runs':96},{'name':'gill','runs':20},{'name':'rahul','runs':33},{'name':'tilak','runs':30}]
fs=require('fs')
fs.writeFileSync('score.txt',JSON.stringify(data))
var d=fs.readFileSync('score.txt','utf-8')
var data1=JSON.parse(d)
console.log(data1)
var data2={'name':'Hardik','runs':52}
data1.push(data2)
console.log(data1)
// fs.appendFileSync('score.txt',JSON.stringify(data1.push(data2)))
var total_runs=data[0].runs+data1[1].runs+data1[2].runs+data1[3].runs+data1[4].runs+data1[5].runs
console.log(total_runs)
var runrate=total_runs/20
console.log(runrate)
var runs_all=[]
runs_all.push(data1[0].runs)
runs_all.push(data1[1].runs)
runs_all.push(data1[2].runs)
runs_all.push(data1[3].runs)
runs_all.push(data1[4].runs)
runs_all.push(data1[5].runs)
console.log(runs_all)
count=0
for(i of runs_all){
    if(i>50){
        
        console.log(i)
        console.log(data1[count].name)

    }
    count=count+1
}
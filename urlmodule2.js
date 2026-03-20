var u=require('url')
let addr='https://www.google.com/search?q=good+morning&rlz=1C1YTUH_enIN1039IN1039&oq=good+morning&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABixAxiABDIKCAIQABixAxiABDIKCAMQABixAxiABDIHCAQQABiABDIKCAUQABixAxiABDIKCAYQABixAxiABDIHCAcQABiABDIKCAgQABixAxiABDIKCAkQABixAxiABNIBCDM3NTZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'
process.noDeprecation=true
let q=u.parse(addr,true)
console.log(q)
console.log(`user search ${q.query.q} on ${q.host}  `)
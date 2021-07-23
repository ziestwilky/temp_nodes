const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf8')

console.log(first)
fs.writeFileSync('./content/result-sync.txt',`here is the result: ${first}`);


/// asynchronous
fs.readFile('./content/second.txt','utf8',(err,result) =>{
    if (err) {
        console.log(err)
        return
    }
   const first = result
   fs.readFile('./content/first.txt','utf8',(err,result) =>{
   
          if(err){
              console.log(err);
              return;
          }
          const second = result
          fs.writeFile('./content/result-async.txt',`here is the result: ${first},${second}`,(err,result) =>{
              if (err) {
                  console.log(err)
                  return
              }
           console.log('done with task');
          })
 
})
})

console.log('starting next')
const {readFile , writeFile} = require('fs')
readFile('content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    else
    {
        const first = result
        readFile('content/subfolder/text.txt','utf8',(err,result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            else
            {
                const text = result
                writeFile('./content/async.txt',`Here is the result ${first}, ${text}`,(err,result)=>{
                    if(err)
                    {
                        console.log(err)
                        result
                    }
                    else
                    {
                        console.log(result)
                    }
                })
            }
        })
    }
})
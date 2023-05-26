const {readFileSync,writeFileSync} = require('fs')
const text = readFileSync('content/subfolder/text.txt','utf8')

const first =readFileSync('./content/first.txt','utf8')
// console.log(text)
// console.log(first)

//C:\Users\DEVESH KUMAR\OneDrive\Desktop\tutorial\content\first.txt
writeFileSync('./content/result.txt',`This is the redulr : ${text} , ${first}`)
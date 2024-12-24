var http = require('http')

var a=10
var b=20
var c=a+b
var msg
if(c==30){
    msg="sum is 10"
}else{
    msg="sum is not 10"
}

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(" A valus is "+a) 
    res.write("<br/>B valus is"+b)
    res.write(`<br/>Sum is ${a+b}</br>`)
    res.end("<br/>"+msg+ "DONE!")

}).listen(4000)

console.log(`Server is running at http://127.0.0.1:4000 `)
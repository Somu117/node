const http = require("http")
 const server = http.createServer((req,res)=>{
    res.write("hello world")
    res.end("response provided")

})
server.listen("2002", () => {
    console.log("server created")
});

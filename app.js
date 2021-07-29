
const http=require('http');

const server= http.createServer((req, res)=>{
    res.end("Connection succesfully established like the Gods")
})

const port=5000;


server.listen(port, ()=>{

    console.log("Listening to port...");
})
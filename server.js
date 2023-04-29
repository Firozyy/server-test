const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

const publicDir = path.join(__dirname, "public");

const indexFile = path.join(publicDir, "/index.html");

console.log(indexFile);

app.get('/',function(req,res){
    res.status(200).sendFile(indexFile);
});


app.get('/welcome', function(req,res){
    res.status(200).send("Welcome");
})

app.listen(4000,function(){
    console.log("Server is running on port 4000");
})

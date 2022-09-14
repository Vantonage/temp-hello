const express = require('express');
const app = express();


const HTTP_PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.json({message: "ss"});
});

app.listen(HTTP_PORT, ()=>{
    console.log(`server is listening on `);
})
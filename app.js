const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
})
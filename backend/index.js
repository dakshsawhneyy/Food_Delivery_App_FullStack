const connectToMongo = require("./db");
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

    app.use((req,res,next) => {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");      //projects mei copy paste krdo bs bina
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        )
        next();
    })

app.use(express.json())                 // required

app.use('/', require ("./Routes/CreateUser"))         
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require("express")
const app = express()
const port = 3000
const path = require("path")

app.use(express.static("public"))


app.get('/', (req, res)=>{
    //res.send('Hello Mateen') //----> to send a file we need to use sendFile insted of send
    res.sendFile(path.join(__dirname, "index.html"))   // and we have to send the location of the file, the ___dirn
})

app.get('/about', (req, res)=>{
    //res.send('Hello Mateen') //----> to send a file we need to use sendFile insted of send
    res.sendFile(path.join(__dirname, "public\about.html"))   // and we have to send the location of the file, the ___dirn
})
app.get('/form', (req, res)=>{
    //res.send('Hello Mateen') //----> to send a file we need to use sendFile insted of send
    res.sendFile(path.join(__dirname, "public\form.html"))   // and we have to send the location of the file, the ___dirn
})


app.listen(port, ()=>{
    console.log(`starting http://localhost:${port}`)
})
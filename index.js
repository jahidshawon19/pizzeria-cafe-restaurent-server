const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000 


// MIDDLEWARE 
app.use(cors())
app.use(express.json())


app.get('/', (req, res)=>{
    res.send('Tarteeb server is running')
})  

app.listen(port, ()=>{
    console.log(`tarteeb server is running at port ${port}`)
})
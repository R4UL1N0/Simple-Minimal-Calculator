const express = require('express')
const fs = require('fs')
const path = require('path')


const port = process.env.PORT || 3000

const app = express()

app.use(express.static(path.join(__dirname, '/../client')))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => 
    console.log('SERVER IS RUNNING'))


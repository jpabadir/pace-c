const express = require('express')
const port = 8000
var cors = require('cors')
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("Server received GET request! 🚀");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
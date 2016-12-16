const express = require('express')
const app = express()
const path = require('path')
const router = require('./router')

app.use(express.static(path.join(__dirname, '../public')))

router(app)

const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log('Server listening at http://%s:%s', host, port)
})

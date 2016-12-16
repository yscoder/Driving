const path = require('path')
const controller = require('./controller')

module.exports = app => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

    app.get('/favicon.ico', (req, res) => {
        res.status(200)
        res.end()
    })

    app.get('/cates', (req, res) => controller.cates(req, res))

    app.get('/list/:type/:page?', (req, res) => controller.list(req, res))

    app.get('/details/:type/:id/:page?', (req, res) => controller.details(req, res))
}

const request = require('./request')
const cheerio = require('cheerio')
const url = require('url')

exports.cates = (req, res) => {
    request('http://www.duotoo.com/meinvtupian/').get().then(body => {
        const $ = cheerio.load(body)
        const $menus = $('.LeftNav dd a')

        let data = []
        $menus.each((i, el) => {
            const $item = $(el)
            // console.log($item.attr('title'))
            data.push({
                text: $item.attr('title'),
                path: url.parse($item.attr('href')).pathname
            })
        })

        res.send(data)
    })
}

exports.list = (req, res) => {
    const args = req.params

    request('http://www.duotoo.com/' + args.path).get().then(body => {
        // const $ = cheerio.load(body)
    })
}

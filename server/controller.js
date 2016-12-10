const request = require('./request')
const cheerio = require('cheerio')
const url = require('url')

const remote = 'http://m.duotoo.com/'

exports.cates = (req, res) => {
    request(`${remote}meinvtupian/`).get().then(body => {
        const $ = cheerio.load(body)

        let data = []
        $('#AutoNavWidth a').each((i, el) => {
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
    const type = req.params.type
    const page = req.params.page ? `${type}_${req.params.page}.html` : ''

    request(`${remote + type}/${page}`).get().then(body => {
        const $ = cheerio.load(body)

        let list = []
        $('.listUll, .listUlr').each((i, el) => {
            let items = []
            $(el).find('.libox a').each((j, a) => {
                const $link = $(a)
                items.push({
                    id: $link.attr('href').match(/(\d+)\.html/)[1],
                    title: $link.find('p').text(),
                    url: $link.find('img').attr('lazysrc'),
                    type
                })
            })
            list.push(items)
        })

        res.send({
            pageCount: parseInt($('#pageinfo').attr('pageinfo')),
            list
        })
    })
}

exports.details = (req, res) => {
    const url = remote + req.params.type + '/' + req.params.id
    const pageNo = parseInt(req.params.page || 1)
    const pageMax = req.params.max ? Math.min(parseInt(req.params.max), pageNo + 4) : pageNo + 4
    let queue = []

    for (let i = pageNo; i <= pageMax; i++) {
        queue.push(request(url + (i > 1 ? `_${i}` : '') + '.html').get())
    }

    Promise.all(queue).then(contents => {
        let list = []
        let pageCount = 0

        contents.forEach(body => {
            const $ = cheerio.load(body)
            const src = $('.ArticleBox').find('img').attr('src')

            list.push({
                src,
                id: src.match(/\/(\w+)\.[a-zA-Z]+$/)[1]
            })
            pageCount = pageCount || parseInt($('#pageinfo').attr('pageinfo'))
        })

        res.send({
            list,
            pageCount
        })
    })
}

const http = require('http')
const url = require('url')
const querystring = require('querystring')
const iconv = require('iconv-lite')

function request(method, urlStr, args) {
    let option = url.parse(urlStr)
    option.method = method

    if (args) {
        let query = '?' + querystring.stringify(args) + (option.query ? '&' + option.query : '')
        option.path = option.pathname + query
    }

    return new Promise((resolve, reject) => {
        const req = http.request(option, res => {
            var chunks = []

            res.on('data', chunk => {
                chunks.push(chunk)
            })

            res.on('end', () => resolve(iconv.decode(Buffer.concat(chunks), 'gb2312')))
        })

        req.on('error', e => reject(e))

        req.end()
    })
}

module.exports = url => {
    return {
        get: args => request('GET', url, args),
        post: args => request('POST', url, args),
        put: args => request('PUT', url, args),
        delete: args => request('DELETE', url, args)
    }
}

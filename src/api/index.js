import Vue from 'vue'

const TO_JSON = res => res.json()
const ERR_HANDLE = res => console.error('HTTP error: ', res.status, res.statusText)

const GET = (...args) => Vue.http.get.apply(Vue.http, args).then(TO_JSON, ERR_HANDLE)

export default {
    cates: () => GET('/cates'),
    list: (type, page) => GET(`/list/${type}/${page}`),
    details: (type, id, page, args) => GET(`/details/${type}/${id}/${page}`, args)
}

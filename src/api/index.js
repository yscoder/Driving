import Vue from 'vue'

const TO_JSON = res => res.json()
const ERR_HANDLE = res => console.error('HTTP error: ', res.status, res.statusText)

const GET = url => Vue.http.get(url).then(TO_JSON, ERR_HANDLE)

export default {
    cates: () => GET('/cates'),
    list: (type, page) => GET(`/list/${type}/${page}`),
    details: (type, id, page) => GET(`/details/${type}/${id}/${page}`)
}

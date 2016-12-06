import Vue from 'vue'

export default {
    getCates() {
        return Vue.http.get('/cates')
            .then(res => res.json(),
            res => console.error('error: ', res.status, res.statusText))
    }
}

<template>
    <transition name="fade-in-left">
        <gallery :url="item" :type="type" @on-touch="onTouch"/>
    </transition>
</template>
<script>
import Gallery from 'components/Gallery'
import Api from '../api'

export default {
    components: {
        Gallery
    },
    data() {
        return {
            id: 0,
            item: '',
            page: 1,
            pageCount: 0,
            type: ''
        }
    },
    methods: {
        onTouch(type) {
            console.log('touch')
            this.page = type === 'PREV' ? (this.page === 0 ? this.pageCount : this.page - 1)
                : (this.page === this.pageCount ? 0 : this.page + 1)
            console.log(this.page)
            this.$router.push(`/${this.type}/${this.id}/${this.page}`)
        },
        fetch() {
            this.type = this.$route.params.type
            this.id = this.$route.params.id
            this.page = parseInt(this.$route.params.page) || 1
            Api.details(this.type, this.id, this.page > 1 ? this.page : '').then(data => {
                this.item = data.url
                this.pageCount = data.pageCount
                this.transitionName = 'fade-out-left'
            })
        }
    },
    watch: {
        $route(to, from) {
            console.log('imageView', to.params, from.params)
            if (to.params.id !== from.params.id || to.params.page !== from.params.page) {
                this.fetch()
            }
        }
    },
    created() {
        this.fetch()
    }
}
</script>

<template>
    <transition name="fade-in-left">
        <gallery :key="key"
            :items="items"
            :show="true"
            :count="pageCount"
            @on-touch="onTouch"
            @on-back="onBack"/>
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
            items: [],
            page: 1,
            pageCount: 0,
            type: '',
            key: Date.now()
        }
    },
    methods: {
        onTouch(index) {
            this.page = index + 2
            if (this.page === this.items.length + 1 && this.page <= this.pageCount) {
                console.log(this.page)
                this.fetch()
            }
        },
        fetch() {
            this.type = this.$route.params.type
            this.id = this.$route.params.id
            this.key = this.type + this.id
            Api.details(this.type, this.id, this.page > 1 ? this.page : '', {
                params: { max: this.pageCount || '' }
            }).then(data => {
                this.items = this.items.concat(data.list)
                this.pageCount = data.pageCount
                // this.transitionName = 'fade-in-left'
            })
        },
        onBack() {
            this.$destroy()
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

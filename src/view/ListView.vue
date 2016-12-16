<template>
    <transition name="fade-in-left" mode="in-out">
        <scroll-list
            :key="type"
            :data="items"
            :showLoading="showLoading"
            @on-tap="onTap"
            @on-load="onLoad"/>
    </transition>
</template>
<script>
import ScrollList from 'components/ScrollList'
import Api from '../api'

export default {
    components: {
        ScrollList
    },
    data() {
        return {
            showLoading: true,
            items: [[], []],
            page: 1,
            pageCount: 0,
            type: ''
        }
    },
    methods: {
        onTap(item) {
            console.log(item)
            this.$router.push(`/${item.type}/${item.id}`)
        },
        fetch() {
            Api.list(this.type, this.page > 1 ? this.page : '').then(data => {
                const list = data.list
                this.pageCount = data.pageCount
                list.forEach((items, i) => this.items.splice(i, 1, this.items[i].concat(items)))
                this.showLoading = false
                console.log(this.items)
            })
        },
        onLoad() {
            this.page = this.page + 1
            this.showLoading = true
            this.fetch()
        },
        reset(type) {
            if (!type) return
            this.showLoading = true
            this.type = type
            this.page = 1
            this.items = [[], []]
            this.fetch()
        }
    },
    watch: {
        $route(to, from) {
            console.log('listView', to, from)
            if (to.params.type !== this.type) {
                this.reset(this.$route.params.type)
            }
        }
    },
    mounted() {
        this.reset(this.$route.params.type)
    }
}
</script>
<style lang="less">
.scroll-load {
    padding-top: 48px;
}
</style>

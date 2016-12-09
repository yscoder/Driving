<style lang="less">
@import './less/app';
</style>
<template>
    <div id="app">
        <tabs v-if="items && items.length" :items="items" @on-change="onChange"/>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>
<script>
import Tabs from 'components/Tabs'
import Api from './api'

export default {
    components: {
        Tabs
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        onChange(item, i) {
            this.$router.push({
                path: item.path
            })
        }
    },
    created() {
        Api.cates().then(data => {
            this.items = this.items.concat(data)
            this.$router.push({
                path: data[0].path
            })
        })
    }

}
</script>

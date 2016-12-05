<style lang="less">
@import './less/app';
</style>
<template>
    <div id="app">
        <tabs :items="items" @on-change="onChange"></tabs>
        <router-view></router-view>
    </div>
</template>
<script>
import Tabs from 'components/Tabs'

export default {
    components: {
        Tabs
    },
    data() {
        return {
            items: [
                {
                    text: 'aaa'
                },
                {
                    text: 'bbb'
                },
                {
                    text: 'ccc'
                },
                {
                    text: 'aaa'
                },
                {
                    text: 'bbb'
                },
                {
                    text: 'ccc'
                },
                {
                    text: 'aaa'
                },
                {
                    text: 'bbb'
                },
                {
                    text: 'ccc'
                }
            ]
        }
    },
    methods: {
        onChange(item, i) {

        }
    }

}
</script>

<template>
    <keep-alive>
        <main class="container">
            <scroll-list :data="items" @on-tap="onTap"></scroll-list>
        </main>
    </keep-alive>
</template>
<script>
import ScrollList from 'components/ScrollList'
// import Api from '../api'

export default {
    components: {
        ScrollList
    },
    data() {
        return {
            items: [
                {
                    src: '//placekitten.com/300/500',
                    text: 'placekitten'
                },
                {
                    src: '//placekitten.com/301/500',
                    text: 'placekitten'
                },
                {
                    src: '//placekitten.com/302/500',
                    text: 'placekitten'
                },
                {
                    src: '//placekitten.com/303/500',
                    text: 'placekitten'
                },
                {
                    src: '//placekitten.com/304/500',
                    text: 'placekitten'
                }
            ]
        }
    },
    methods: {
        onTap(item) {

        }
    },
    watch: {
        $route() {
            console.log(this.$route.path)
        }
    },
    created() {

    }
}
</script>
<style lang="less">
.container {
    .scroll-load {
        padding-top: 48px;
    }
}
</style>

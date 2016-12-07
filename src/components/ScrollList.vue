<template>
    <scroll-load :showLoading="showLoading" @on-load="onLoad">
        <waterfall slot :items="data" @selected="onSelected"></waterfall>
    </scroll-load>
</template>
<script>
import ScrollLoad from './ScrollLoad'
import Waterfall from './Waterfall'

export default {
    components: {
        ScrollLoad,
        Waterfall
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        showLoading: Boolean
    },
    methods: {
        onSelected(item) {
            this.$emit('on-tap', item)
        },
        onLoad() {
            this.$emit('on-load')
        }
    }
}
</script>

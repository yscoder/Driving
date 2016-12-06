<template>
    <scroll-load>
        <waterfall slot :items="items" @selected="onSelected"></waterfall>
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
        }
    },
    methods: {
        onSelected(item) {
            this.$emit('on-tap', item)
        }
    },
    computed: {
        items() {
            return [
                this.data.filter((item, i) => i % 2 === 0),
                this.data.filter((item, i) => i % 2 !== 0)
            ]
        }
    }
}
</script>

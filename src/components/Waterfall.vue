<template>
    <div class="waterfall">
        <div class="waterfall-group"
            v-if="items && items.length"
            v-for="group in items">
            <div class="waterfall-item" v-for="item in group">
                <img :src="item.url" :alt="item.title" @click="onClick(item)">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: Array
    },
    methods: {
        onClick(item) {
            this.$emit('selected', item)
        }
    }
}
</script>
<style lang="less">
.waterfall {
    display: flex;
}
.waterfall-group {
    width: 50%;
    flex: 1;
}
.waterfall-item {
    width: 100%;
    padding: 2px;
    img {
        width: 100%;
    }
}
</style>

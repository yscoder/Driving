<template>
    <div class="waterfall">
        <div class="waterfall-group">
            <div class="waterfall-item" v-if="items[0]" v-for="item in items[0]">
                <img :src="item.src" :alt="item.text" @click="onClick(item)">
            </div>
        </div>
        <div class="waterfall-group">
            <div class="waterfall-item" v-if="items[1]" v-for="item in items[1]">
                <img :src="item.src" :alt="item.text" @click="onClick(item)">
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

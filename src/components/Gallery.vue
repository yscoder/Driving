<template>
    <div class="gallery" v-show="show">
        <header class="gallery-hd">
            <a class="left" @click="back">
                <i class="material-icons">arrow_back</i>
            </a>
            <span>{{index + 1}}/{{count}}</span>
        </header>
        <div class="gallery-box"
            :class="{ transition: isPan }"
            :style="{ width: width, transform: transform}"
            @transitionend="onPanEnd">
            <figure class="gallery-item"
                v-for="item in items"
                v-touch:panstart="onPan"
                v-touch:tap="onTouch"
                v-touch:swipeleft="onTouch"
                v-touch:swiperight="onTouch">
                <img :src="item.src" @load="onLoad">
            </figure>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: Array,
        show: false,
        count: Number
    },
    data() {
        return {
            index: 0,
            isPan: false
        }
    },
    computed: {
        width() {
            return this.items.length + '00%'
        },
        transform() {
            return `translate3d(${(-100 * this.index / this.items.length) + '%'}, 0, 0)`
        }
    },
    methods: {
        back() {
            this.$router.back()
            this.$emit('on-back')
        },
        onPan() {
            this.isPan = true
        },
        onPanEnd() {
            this.isPan = false
        },
        onTouch(e) {
            this.index = e.type === 'swiperight' ? Math.max(this.index - 1, 0)
                : Math.min(this.index + 1, this.items.length - 1)
            this.$emit('on-touch', this.index)
            e.preventDefault()
        },
        onLoad() {

        }
    }
}
</script>
<style lang="less">
.gallery {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    z-index: 9999;
}
.gallery-box {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    &.transition {
        transition: transform .2s ease-in-out
    }
}
.gallery-hd {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 56px;
    line-height: 56px;
    padding: 0 56px;
    text-align: center;
    color: #fff;
    font-size: 18px;

    a {
        padding: 16px;
        height: 56px;
        line-height: 1;
        color: #fff;
    }
    .left {
        position: absolute;
        top: 0;
        left: 0;
    }
}
.gallery-item {
    width: 100vw;
    height: 100vh;
    line-height: 100vh;
    img {
        width: 100%;
    }
}
</style>

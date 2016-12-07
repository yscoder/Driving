<template>
    <div class="gallery">
        <header class="gallery-hd">
            <a @click="back">
                <i class="material-icons">arrow_back</i>
            </a>
        </header>
        <figure class="gallery-box"
            v-if="url"
            v-touch:tap="onTouch"
            v-touch:swipeleft="onTouch"
            v-touch:swiperight="onTouch">
            <img :src="url" @load="onLoad">
        </figure>
    </div>
</template>
<script>
export default {
    props: {
        url: String,
        type: String
    },
    methods: {
        onTouch(e) {
            console.log(e.type)
            this.$emit('on-touch', e.type === 'swiperight' ? 'PREV' : 'NEXT')
        },
        back() {
            this.$router.push('/' + this.type)
        },
        onLoad() {

        }
    },
    mounted() {
        console.log('ready')
    }
}
</script>
<style lang="less">
.gallery,
.gallery-box {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.gallery {
    z-index: 9999;
    background: #000;
}
.gallery-box {
    z-index: 1;
    line-height: 100vh;

    img {
        width: 100%;
    }
}
.gallery-hd {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 56px;
    line-height: 56px;
    a {
        display: inline-block;
        padding: 16px;
        height: 56px;
        line-height: 1;
        color: #fff;
    }
}
</style>

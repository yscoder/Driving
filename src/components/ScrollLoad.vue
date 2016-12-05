<template>
    <div class="scroll-load">
        <div class="scroll-content">
            <slot></slot>
        </div>
        <div class="scroll-loading" v-if="showLoading">正在加载。。。</div>
    </div>
</template>
<script>
export default {
    data() {
        showLoading: true
    }
}
</script>
<style lang="less">
.scroll-load {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.scroll-content {

}
.scroll-loading {

}
</style>

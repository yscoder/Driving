<template>
    <div class="scroll-load" @scroll="onScroll">
        <div class="scroll-content">
            <slot></slot>
        </div>
        <div class="scroll-loading" v-if="showLoading">
            <i class="material-icons md-36">refresh</i>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        showLoading: Boolean
    },
    methods: {
        onScroll(e) {
            const $el = this.$el

            if ($el.scrollHeight - $el.scrollTop === $el.offsetHeight) {
                this.$emit('on-load')
            }
        }
    },
    mounted() {

    }
}
</script>
<style lang="less">
@import '../less/variables';

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
    padding: 8px 0;
    text-align: center;
    color: @primary-color;
    i {
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 -1px 5px rgba(0, 0, 0, .2);
        transition: transform .3s;
        animation: fa-spin .8s infinite linear;
    }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>

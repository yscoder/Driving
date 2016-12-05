<template>
    <div class="md-tabs">
        <nav class="md-tabs-list">
            <a class="md-tabs-link"
                v-for="(item, i) in items"
                @click="onClick($event, i)"
                :class="{ active: i === activeIndex }">{{item.text}}</a>
            <span class="md-tabs-highlight" :style="highlightStyle"></span>
        </nav>
    </div>
</template>
<script>
export default {
    props: {
        items: Array
    },
    data() {
        return {
            highlightStyle: {
                width: 0,
                transform: 'translate3d(0, 0, 0)'
            },
            activeIndex: 0
        }
    },
    methods: {
        onClick(e, i) {
            this.activeIndex = i
            this.$emit('on-change', this.items[i], i)
        },
        setHighlightStyle(index) {
            const $item = this.$el.querySelectorAll('.md-tabs-link').item(index)
            this.highlightStyle = {
                width: `${$item.offsetWidth}px`,
                transform: `translate3d(${$item.offsetLeft}px, 0, 0)`
            }
        }
    },
    watch: {
        activeIndex(val, oldVal) {
            if (val === oldVal) return
            this.setHighlightStyle(val)
        }
    },
    mounted() {
        this.setHighlightStyle(this.activeIndex)
    }
}
</script>
<style lang="less">
@import '../less/variables';

.md-tabs {
    position: relative;
    width: 100%;
    overflow: hidden;
    background: @primary-color;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
}
.md-tabs-list {
    position: relative;
    z-index: 1;
    overflow-x: auto;
    overflow-y: hidden;
    height: 48px;
    display: flex;
}
.md-tabs-link {
    display: block;
    padding: 0 12px;
    height: 48px;
    line-height: 48px;
    white-space: nowrap;
    color: @primary-light-color;
    &.active,
    &:hover,
    &:focus {
        color: @text-primary-color;
    }
}
.md-tabs-highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    height: 3px;
    background: @text-primary-color;
    transition: transform .3s;
    backface-visibility: hidden;
}
</style>

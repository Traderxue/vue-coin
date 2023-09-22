<script setup>
    import { defineProps } from 'vue'

    // 接收父组件传递过来的值
    const props = defineProps(['title'])
</script>

<template>
    <div class="module">
        <span></span>
        <h4>{{props.title}}</h4>
    </div>
</template>

<style lang="scss" scoped>
.module{
    width: auto;
    height: 25px;
    display: flex;
    span{
        height: 25px;
        width: 4px;
        background: linear-gradient(to bottom ,#5F6ED5,#F6F9FF);
    }
    h4{
        margin-left: 10px;
    }
}
</style>
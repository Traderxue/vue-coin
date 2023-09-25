<script setup>
import chart from "@/components/chart.vue"
import { ref } from "vue"

const props = defineProps({
    //说明：百分比，必填
    percentage: {
        required: true,
        type: Number,
        default: 0,
    },
    //说明：进度条是否有动态效果
    isAnimation: {
        type: Boolean,
        default: false,
    },
    // 动画时长(单位：毫秒)
    time: {
        type: Number,
        default: 3000,
    },
})
</script>
<template>
    <chart/>
    <div><el-progress :percentage="50"></el-progress></div>
</template>
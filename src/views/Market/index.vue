<script setup>
import chart from "@/components/chart.vue"
import { ref } from "vue"


</script>
<template>
    <chart/>
    <div class="btn">
        <el-button class="buy">买入</el-button>
        <el-button class="sell">卖出</el-button>
    </div>
</template>

<style lang="scss" scoped>
    .btn{
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-around;
        bottom: 105px;
        .el-button{
            width: 35%;
            color: #f5f5f5;
        }
        .buy{
            // background: rgb(74, 236, 74);
            background:#18BE6C;
        }
        .sell{
            background: #FB3534;
        }
    }
</style>
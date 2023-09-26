<script setup>
import { ref } from "vue"

    const data = ref([
        {
            name:"直推人数",
            num:0
        },
        {
            name:"直推人数",
            num:0
        },
        {
            name:"直推人数",
            num:0
        },
        {
            name:"直推人数",
            num:0
        },
        {
            name:"直推人数",
            num:0
        },
        {
            name:"直推人数",
            num:0
        },
        {
            name:"直推人数",
            num:0
        },
        {
            name:"直推人数",
            num:0
        }
    ])
</script>

<template>
    <div class="container">
        <div class="header">
            <p>团队</p>
            <span>推广团队排行</span>
        </div>
        <div class="banner">
            <div v-for="(item,index) in data" :key="index">
                <p>{{item.name}}</p>
                <span>{{item.num}}</span>
                <span class="right_span"></span>
            </div>
        </div>
        <div class="notice">
            <p>当前团队总人数0，有效客户0</p>
        </div>
        <div class="rules">
            <p>规则：</p>
            <p>团队总算力达到1GH为xxx</p>
            <p>团队总算力达到1GH为xxx</p>
            <p>团队总算力达到1GH为xxx</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    width: auto;
    height: auto;
    padding: 15px;
    .header{
        width: auto;
        height: 30px;
        position: relative;
        p{
            font-size: 16px;
            line-height: 30px;
            color: #333;
            text-align: center;
        }
        span{
            position: absolute;
            font-size: 16px;
            color: #333;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            text-align:right;
        }
    }
    .banner{
        margin: 20px 0px;
        width: auto;
        padding: 20px 0px;
        height: 180px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        background: linear-gradient(to right bottom,#55ADF7,#336BFC);
        position: relative;
        border-radius: 5px;
        overflow: hidden;
        .right_span{
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 20px ;
            position: absolute;
            right: -10px;
            top: 10px;
            background: #FBD518;
        }
        div{
            width: 25%;
            text-align: center;
        }
    }
    .notice{
        width: auto;
        height: 35px;
        background: #FFF1D4;
        border-radius: 8px;
        p{
            color: #EFC677;
            line-height: 35px;
        }
    }
    .rules{
        margin-top: 15px;
        p{
            padding: 5px 0px;
        }
    }

}
</style>
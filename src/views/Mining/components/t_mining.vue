<script setup>
import { ref } from "vue";

const miningData = ref([
    {
        name:"DC4级矿机",
        time:"90天",
        gh:"330.00",
        u_price: "5000.00 USDT",
        income:"14695.79 USDT",
        incomeDc:"14652.60 DC"
    },
    {
        name:"DC5级矿机",
        time:"180天",
        gh:"550.00",
        u_price: "10000.00 USDT",
        income:"284163.62 USDT",
        incomeDc:"28652.15 DC"
    },
    {
        name:"DC5级矿机",
        time:"180天",
        gh:"550.00",
        u_price: "10000.00 USDT",
        income:"284163.62 USDT",
        incomeDc:"28652.15 DC"
    },
    {
        name:"DC5级矿机",
        time:"180天",
        gh:"550.00",
        u_price: "10000.00 USDT",
        income:"284163.62 USDT",
        incomeDc:"28652.15 DC"
    }
])
</script>

<template>
    <div class="container">
        <div class="max_box" v-for="(item,index) in miningData" :key="index">
            <div class="box">
                <img src="@/assets/img/mining.png" alt="">
                <div>
                    <h5>{{item.name}}</h5>
                    <p>到期时间:{{item.time}}</p>
                    <p>算力(GH/s):{{item.gh}}</p>
                </div>
                <button>购买</button>
            </div>
            <div class="jdt">
                <span>85%</span>
            </div>
            <div class="price">
                <div class="left">
                    <p>矿机单价</p>
                    <span>{{item.u_price}}</span>
                </div>
                <div class="right">
                    <p>预计收益≈{{item.income}}</p>
                    <span>{{item.incomeDc}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        width: auto;
        height: auto;
        margin-bottom: 70px;
        .max_box{
            width: auto;
            height: 170px;
            margin: 10px 0px 25px 0px;
            .box{
                display: flex;
                justify-content: space-between;
                align-items: center;
                div{
                    h5{
                        font-size: 18px;
                        color: #333;
                    }
                    p{
                        color: #B9BBC7;
                        padding-top: 8px;
                        font-size: 14px;
                    }
                }
                button{
                    width: 75px;
                    height: 35px;
                    background: #0051FF;
                    color: #f5f5f5;
                    border: 0;
                    border-radius: 5px;
                }
            }
            .jdt{
                width: 100%;
                height: 20px;
                margin-top: 10px;
                span{
                    display: block;
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    background: #F3C320;
                    color: #333;
                    border-radius: 10px;
                }
            }
            .price{
                margin-top:10px;
                display: flex;
                justify-content: space-between;
                p{
                    font-size: 14px;
                    color: #333;
                    padding-bottom: 5px;
                }
                span{
                    font-size: 14px;
                    font-weight: 600;
                    color: #333;
                }
                .left{
                    text-align: left;
                }
                .right{
                    text-align: right;
                }
            }
        }
    }
</style>
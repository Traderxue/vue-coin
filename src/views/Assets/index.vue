<script setup>
import { ref } from "vue";

const percentage = ref(60)
</script>


<template>
    <div class="container">
        <div class="top">
            <div class="header">
            <p>我的资产</p>
            </div>
            <div class="avator">
                <img src="https://avatars.githubusercontent.com/u/128983356?s=48&v=4" alt="">
                <p>xxx用户</p>
                <button>VIP0</button>
            </div>
            <div class="improve">
                <p>还有500点升级</p>
                <!-- <span class="line"></span>            -->
            
                <van-progress :pivot-text="percentage" color="#f2826a" :percentage="percentage" class="line" stroke-width="9px" :show-pivot="false"/>     
                <div>
                    <span>vip0</span>                    
                    <span>vip1</span>
                </div>
            </div>
        </div>
        <div class="daili">
            <span>暂无代理等级</span>
            <button>查看详情></button>
        </div>
        <div class="asset">
            <h3>我的资产</h3>
            <p class="zzc">账户总资产</p>
            <p class="num_usdt">4.447(USDT)</p>
            <div>
                <span>充币</span>
                <span>提币</span>
            </div>
        </div>
        <div class="list">
            <h3>资产列表</h3>
            <div class="unit_div">
                <div>
                    <span>USDT</span>
                    <span class="material-symbols-outlined">
                    arrow_forward_ios
                    </span>
                </div>
                <div class="mid">
                    <span>可用</span>
                    <span>冻结</span>
                    <span>折合</span>
                </div>
                <div>
                    <span>3.789</span>
                    <span>0</span>
                    <span>3.789</span>
                </div>                
            </div>
            <div class="unit_div">
                <div>
                    <span>ETH</span>
                    <span class="material-symbols-outlined">
                    arrow_forward_ios
                    </span>
                </div>
                <div class="mid">
                    <span>可用</span>
                    <span>冻结</span>
                    <span>折合</span>
                </div>
                <div>
                    <span>3.789</span>
                    <span>0</span>
                    <span>3.789</span>
                </div>                
            </div>
            <div class="unit_div">
                <div>
                    <span>DC</span>
                    <span class="material-symbols-outlined">
                    arrow_forward_ios
                    </span>
                </div>
                <div class="mid">
                    <span>可用</span>
                    <span>冻结</span>
                    <span>折合</span>
                </div>
                <div>
                    <span>3.789</span>
                    <span>0</span>
                    <span>3.789</span>
                </div>                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.container{
    width: auto;
    height: auto;
    padding: 15px;
    margin-bottom: 70px;
    .top{
        width: auto;
        height: 190px;
        background: url("@/assets/img/asset_bg.png") no-repeat;
        background-size: cover;
        margin: -15px;
        padding: 15px;
        .header{
            width: auto;
            height: 30px;
            text-align: center;
            p{
                color: #333;
                font-weight: 600;
                line-height: 30px;
            }
        }
        .avator{
            width: auto;
            height: auto;
            position: relative;
            box-sizing: border-box;
            padding-left: 70px;
            margin-top: 15px;
            p{
                font-size: 16px;    
                color: #f5f5f5;
                padding: 5px 0px;
            }
            button{
                width: 50px;
                font-size: 12px;
                background: #FEC39B;
                color: #87591E;
                border: 0;
                height: 20px;
                border-radius: 20px;
            }
            img{
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                border-radius: 50%;
            }
        }
        .improve{
            margin-top: 25px;
            width: auto;
            height: 40px;
            color: #f5f5f5;
            font-size: 14px;
            .line{
                display: block;
                background: #2351B8;
                margin: 5px 0px;
                overflow: hidden;
            }
            div{
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .daili{
        width: auto;
        height: 35px;
        margin: 0px -15px;
        padding: 0px 15px;
        background: #383838;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #f5f5f5;
        button{
            width: 80px;
            height: 20px;
            border: 0;
            border-radius: 20px;
            background: #EEC707;
        }
    }
    .asset{
        margin-top: 15px;
        margin-bottom: 25px;
        h3{
            color: #333;
        }
        .zzc{
            text-align: center;
            color: #818181;
            padding-bottom: 10px;
        }
        .num_usdt{
            padding: 15px;
            text-align: center;
            color: #333;
            font-size: 24px;
            font-weight: 600;
        }
        div{
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
        }

    }
    .list{
        margin-top: 5px;
        .unit_div{
            margin: 15px 0px;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            div{
                display: flex;
                justify-content: space-between;
                margin: 8px 0px;
            }
            .mid{
                color:#818181;
            }
        }
    }


}
</style>
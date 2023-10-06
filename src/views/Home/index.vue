<script setup>
import Header from "@/views/Home/components/header.vue"
import Notice from "@/views/Home/components/notice.vue"
import Recharge from "@/views/Home/components/recharge.vue"
import module from "./components/module.vue"
import trade from "./components/trade.vue"
</script>

<template>
    <div class="container">
        <div class="header">
            <Header/>
        </div>
        <div class="banner">
            <!-- <img src="@/assets/img/banner.png" alt=""> -->
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="@/assets/img/banner.png" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="@/assets/img/banner.png" alt="">
                </van-swipe-item>
            </van-swipe>

        </div>
        <!-- <Notice class="notice"/> -->
        <van-notice-bar
        class="notice"
            left-icon="volume-o"
            :text="$t('home.notice_content')"
            mode="closeable"
            />
        <div class="topup">
            <div>
                <img src="@/assets/img/topup1.png" alt="">
                <p>充值</p>
            </div>
            <div>
                <img src="@/assets/img/topup2.png" alt="">
                <p>提现</p>
            </div>
            <div>
                <img src="@/assets/img/topup3.png" alt="">
                <p>锁仓</p>
            </div>
            <div>
                <img src="@/assets/img/topup4.png" alt="">
                <p>矿机</p>
            </div>
            <div>
                <img src="@/assets/img/topup5.png" alt="">
                <p>客服</p>
            </div>
            <div>
                <img src="@/assets/img/topup6.png" alt="">
                <p>签到</p>
            </div>
            <div>
                <img src="@/assets/img/topup7.png" alt="">
                <p>活动中心</p>
            </div>
            <div>
                <img src="@/assets/img/topup8.png" alt="">
                <p>更多</p>
            </div>
        </div>
        <Recharge/>
        <module class="hy_module" title="会员模块"/>
        <div class="hy">
            <div>
                <h4>VIP1</h4>
                <p>购买矿机</p>
                <p>价格：500.00 USDT</p>
                <p>奖励固定算力 5</p>
                <button>购买矿机</button>
                <img src="@/assets/img/vip.png" alt="">
            </div>
            <div>
                <h4>VIP2</h4>
                <p>购买矿机</p>
                <p>价格：1000.00 USDT</p>
                <p>奖励固定算力 10</p>
                <button>购买矿机</button>
                <img src="@/assets/img/vip.png" alt="">
            </div>
        </div>
        <trade/>
    </div>
</template>

<style lang="scss" scoped>
.container{
    width: auto;
    height: 100%;
    padding: 15px 15px 90px 15px;
    .banner{
        margin: 10px 0px 15px 0px;
        width: auto;
        height: 150px;
        border-radius: 5px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .notice{
        margin-bottom: 20px;
    }
    .topup{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 20px;
        div{
            width: 25%;
            text-align: center;
            margin: 5px 0px;
            img{
                height: 40px;
                width: 40px;
            }
            p{
                font-size: 14px;
            }
        }
    }
    .hy_module{
        margin: 20px 0px;
    }
    .hy{
        height: 120px;
        width: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        div{
            width: 45%;
            height: 120px;
            position: relative;
            h4{
                color: #61737E;
            }
            p{
                margin: 2px 0px;
                font-size: 14px;
                color:#81888E
            }
            button{
                background: #E6EBFE;
                width: 100%;
                height: 30px;
                border: 0;
            }
            img{
                position: absolute;
                right: 3px;
                top: 0px;
                width: 45px;
                height: 45px;
            }
        }
    }
}

</style>
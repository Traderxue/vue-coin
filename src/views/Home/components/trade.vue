<script setup>
import module from "./module.vue"
</script>

<template>
    <module class="hy_module" title="最新交易对"/>
    <div class="container">
        <div class="per_div">
            <div>交易对</div>
            <div>最新价格</div>
            <div>24H涨幅</div>
        </div>
        <div class="per_div">
            <div>
                <img src="@/assets/img/doge_coin.png" alt="">
                <span>DOGE/USDT</span></div>
            <div class="price">0.00974</div>
            <div><button>-2.6%</button></div>
        </div>
        <div class="per_div">
            <div>
                <img src="@/assets/img/doge_coin.png" alt="">
                <span>DOGE/USDT</span></div>
            <div class="price">0.00974</div>
            <div><button>-2.6%</button></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.hy_module{
        margin: 20px 0px;
    }
.container{
    font-size: 14px;
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding-bottom: 90px;
    .per_div{
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0px;
        div{
            width: 33%;
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
            button{
                background: #D8393D;
                color: #f5f5f5;
                font-weight: 600;
                border: 0;
                width: 70px;
                height: 30px;
            }
        }
        .price{
            color: #DC9A9E;
        }

        img{
            vertical-align: middle;
        }
    }
}
</style>
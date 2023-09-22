<template>
    <div class="recharge">
        <div class="left">
            <h2>快速充值 <span>NEW</span></h2>
            <p>点击体验快速充值</p>
            <button>立即充值</button>
        </div>
        <div class="right">
            <div>
                <img src="@/assets/img/buy_invite.png" alt="">
                <p>邀请好友</p>
                <span>点击邀请好友</span>
            </div>
            <div>
                <img src="@/assets/img/buy_daili.png" alt="">
                <p>代理介绍</p>
                <span>点击查看详情</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.recharge{
    height: 220px;
    width: auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .left{
        width: 48%;
        height: 220px;
        background:linear-gradient(to right bottom ,#92b2fd,#3C74FF);
        background-size:cover;
        box-sizing: border-box;
        padding: 15px;
        border-radius: 8px;
        overflow: hidden;
        h2{
            color: #f5f5f5;
            span{
                font-size: 14px;
                color: #f5f5f5;
            }
        }
        p{
            font-size: 16px;
            color: #f5f5f5;
            font-weight: 600;
            margin: 20px 0px;
        }
        button{
            border: 0;
            border-radius: 5px;
            background: skyblue;
            width: 100%;
            height: 40px;
            color: #f5f5f5;
            font-size: 18px;
            font-weight: 600;
        }

    }
    .right{
        width: 48%;
        height: 220px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        div{
            width: 100%;
            height: 32%;
            position: relative;
            padding-left: 55px;
            padding-top: 30px;
            background: linear-gradient(to right bottom,#FCF5D9,#FEE4A9);
            border-radius: 8px;
            img{
                position: absolute;
                left:10px;
                top: 50%;
                transform: translateY(-50%);
            }
            p{
                font-weight: 600;
                font-size: 16px;
                color: #705A20;
            }
            span{
                font-size: 14px;
                color: #D1B576;
            }
        }
    }

}
</style>
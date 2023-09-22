<template>
        <div class="hedaer">
            <div class="left">
                <span class="material-symbols-outlined">
                account_circle
                </span>
            </div>
            <div class="title">
                <p>首页</p>
            </div>
            <div class="right">
                <span class="material-symbols-outlined">
                circle_notifications
                </span>
                <span class="material-symbols-outlined">
                dark_mode
                </span>
                <span class="material-symbols-outlined">
                language
                </span>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.hedaer{
    width: auto;
    display: flex;
    justify-content: space-between;
    div{
        width: 33%;
    }
    .right {
        text-align: right;
        span{
            padding: 0px 2px;
        }
    }
    .title{
        text-align: center;
    }
}
</style>
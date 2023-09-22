<template>
    <div class="notice">
            <div>
                <span>公告</span>
                <span class="material-symbols-outlined">
                brand_awareness
                </span>
            </div>
            <div class="notic_content"><span>公告内容:欢迎来到xxx平台</span></div>
            <div>
                <span>更多</span>
            <span class="material-symbols-outlined" style="font-size:21px;">
                arrow_forward_ios
            </span>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.notice{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;
        div{
            display: flex;
        }
        .notic_content{
            line-height: 24px;
            width: 68%;
            overflow: hidden;
            white-space: nowrap; /* 防止文本换行 */
            span{
                display: block;
                width: auto; /* 由于是横向滚动，不需要设置固定宽度 */
                animation: scrollText 10s linear infinite; /* 文本滚动动画 */
            }
            @keyframes scrollText {
            0% {
                transform: translateX(100%*2); /* 初始位置，将文本向右移动一个容器宽度 */
            }
            100% {
                transform: translateX(-100%); /* 结束位置，将文本向左移动一个容器宽度 */
            }
            }
        }
    }
</style>
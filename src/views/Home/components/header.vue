<script setup>
import i18n from "@/i18n/index";

const switchLanguage = (lang)=>{
    i18n.global.locale = lang;
}
</script>
<template>
        <div class="hedaer">
            <div class="left">
                <span class="material-symbols-outlined">
                account_circle
                </span>
            </div>
            <div class="title">
                <p>{{$t('home.title')}}</p>
            </div>
            <div class="right">
                <span class="material-symbols-outlined">
                circle_notifications
                </span>
                <span class="material-symbols-outlined">
                dark_mode
                </span>
                <el-dropdown>
                        <span class="material-symbols-outlined">
                        language
                        </span>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="switchLanguage('zh')">
                                中文简体
                            </el-dropdown-item>
                            <el-dropdown-item @click="switchLanguage('zh_hk')">
                                中文繁体
                            </el-dropdown-item>
                            <el-dropdown-item @click="switchLanguage('en')">
                                English
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                <!-- <span class="material-symbols-outlined">
                language
                </span> -->
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
    :focus {outline: 0;}
    .el-dropdown{
        cursor: pointer;
    }
}
</style>
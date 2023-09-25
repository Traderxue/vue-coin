<script setup>
import { onMounted, ref,computed } from "vue";
import {useRouter} from 'vue-router'

    const router = useRouter()
    const tabData = ref([
        {
            name:"总览",
            path:"/t_mining"
        },
        {
            name:"我的矿机",
            path:"/my_mining"
        }
    ])
    const currentIndex = ref(0)

    const tabChange = (index,path)=>{
        router.push(path)
        currentIndex.value = index
    }

</script>
<template>
    <div class="container">
        <div class="header">
            <p>矿机</p>
            <span>矿机排行</span>
        </div>
        <div class="banner">
            <img src="@/assets/img/banner.png" alt="">
        </div>
        <div class="tab">
            <span :class="currentIndex===index?'active':''" v-for="(item,index) in tabData" :key="index" @click="tabChange(index,item.path)">{{item.name}}</span>
        </div>
        <RouterView :key="$route.fullPath"/>
    </div>
</template>

<style lang="scss" scoped>
.container{
    width: auto;
    height: auto;
    padding: 15px;
    .header{
        width: auto;
        height: 25px;
        text-align: center;
        position: relative;
        p{
            line-height: 25px;
            font-size: 16px;
        }
        span{
            font-size: 16px;
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            line-height: 25px;
        }
    }
    .banner{
        margin: 15px 0px;
        width: auto;
        height: 150px;
        border-radius: 5px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .tab{
        width: auto;
        height: auto;
        margin-bottom: 20px;
        span{
            margin-right: 15px;
            padding-bottom: 5px;
        }
    }
    .active{
        color: #517FB2;
        border-bottom: 2px solid #517FB2;
    }

}
</style>
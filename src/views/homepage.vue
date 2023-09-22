<script setup >
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const currentIndex =ref(0)

const navData = ref([
    {
        name:"首页",
        path:"/",
        className:"home"
    },
    {
        name:"挖矿",
        path:"/mining",
        className:"elevation"
    },
    {
        name:"市场",
        path:"/market",
        className:"monitoring"
    },
    {
        name:"团队",
        path:"/team",
        className:"group_add"
    },
    {
        name:"资产",
        path:"/assets",
        className:"account_balance_wallet"
    }
])

const tabChange = (index,path)=>{
    currentIndex.value = index
    router.push(path)
}
</script>

<template>
    <router-view/>
    <div class="footer">
        <div v-for="(item,index) in navData" :key="index" :class="currentIndex==index?'active':''" @click="tabChange(index,item.path)">
            <p class="material-symbols-outlined">{{item.className}}</p>
            <p class="p_font">{{item.name}}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.footer{
    width: 100%;
    height: 70px;
    background: #f5f5f5;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        text-align: center;
        font-size: 16px;
        color: #333;
    }
}
.active{
    color: #3B84FD !important;
}
.p_font{
    font-size: 14px;
}
</style>

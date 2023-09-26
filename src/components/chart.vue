<script setup>
import { onMounted, ref } from "vue";
import {useMyStore} from "@/stores/myStore.js"
import * as echarts from "echarts"

const myStore = useMyStore()

const option = {
  xAxis: {
    data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27','2017-10-28', '2017-10-29', '2017-10-30']
  },
  yAxis: {},
  series: [
    {
      type: 'candlestick',
      data: [
        [20, 34, 10, 38],
        [40, 35, 30, 50],
        [31, 38, 33, 44],
        [38, 35, 15, 42],
        [43, 48, 40, 50],
        [52, 48, 48, 59],
        [48, 68, 48, 69]
      ]
    }
  ],
  dataZoom: [
    {
      type: 'inside',
    },
    {
      show: false,
      type: 'slider',
      top: '90%',
    }
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
};

const main = ref(null)
onMounted(()=>{
    const myChart =echarts.init(main.value);
    option && myChart.setOption(option) 

    window.addEventListener('resize',()=>{
        myChart.resize()
    })
})

const timeData  = ref(['1分钟','5分钟','15分钟','1小时','4小时','1天'])
const currentIndex = ref(0)

const tabChange = (index)=>{
    currentIndex.value = index
}


</script>

<template>
    <div class="container">
        <div class="top">
            <span class="material-symbols-outlined">
            arrow_back_ios
            </span>
            <p>BTC/USDT</p>
        </div>
        <div class="ban">
            <div>
                <p class="left_p">195934.69</p>
                <span class="left_span">+0.31%</span>
            </div>
            <div>
                <p>最低</p>
                <p>最高</p>
                <p>24H量</p>
            </div>
            <div>
                <p>19440.36</p>
                <p>19625</p>
                <p>1928.16</p>
            </div>
        </div>
        <div class="time">
            <span :class="currentIndex===index?'active':''" v-for="(item,index) in timeData" :key="index"  @click="tabChange(index)">{{item}}</span>
        </div>
        <div class="chart" ref="main" style="width: 100%;height: 520px;"></div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    width: auto;
    height: auto;
    padding: 15px;
    .top{
        height: 35px;
        width: auto;
        display: flex;
        align-items: center;
        p{
            margin: auto;
            font-weight: 500;
            font-size: 18px;
        }
    }
    .ban{
        margin: 20px 0px;
        display: flex;
        justify-content: space-around;
        div{
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            p{
                font-size: 14px;
                padding: 3px 0px;
            }
        }
        .left_p{
            font-size: 22px;
            color: #F63640;
            font-weight: 600;
        }
        .left_span{
            font-size: 14px;
            font-weight: 600;
            color: #F63640;
        }
    }
    .time{
        width: auto;
        height: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span{
            padding-bottom: 6px;
        }
    }
    .active{
        color: #5675BF;
        border-bottom: 3px solid #5675BF;
    }
}

</style>
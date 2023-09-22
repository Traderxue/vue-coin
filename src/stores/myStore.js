import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {getDate} from "@/api/btckine.js"

export const useMyStore = defineStore('myStore', () => {
    const dataList  = ref([])

    const getDateList = async ()=>{
        const res = await getDate()
        dataList.value = res.data
    }

  return { 
    getDateList,
    dataList
   }
})

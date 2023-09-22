import http from "@/http/index.js"

export const getDate = ()=>{
    return http({
        url:"/api/v5/market/index-candles?instId=BTC-USD"
    })
}
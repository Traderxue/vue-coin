import axios from "axios";

const http = axios.create({
    baseURL:"https://www.okx.com/",
    timeout:5000
})


//拦截器

export default http
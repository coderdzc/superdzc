import axios from "axios";

export function request(config) {
    //axios请求
    //1. 创建axios实例，并传入基本配置
    //2. 对响应数据进行拦截判断，并把拦截结果返回给实例
    //3. 将值为请求结果的实例返回出去
    const instance1 = axios.create({
        baseURL: "http://152.136.185.210:7878/api/hy66",
        timeout: 5000
    })

    //请求拦截
    // instance1.interceptors.request.use(res => {
    //     return res
    // }, err => {
    //     console.log(err);
    // })

    //相应拦截
    instance1.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance1(config)
}
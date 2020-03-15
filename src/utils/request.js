import axios from 'axios'
import { Notify } from 'vant'

const $axios = axios.create({
    baseURL: '/api',
    timeout: 10000
})

export default function request(url, data={}, method="GET"){
    return new Promise((resolve) => {

        let promise

        switch(method){
            case 'GET':
                promise = $axios.get(url, {params: data})
                break
            case 'POST':
                promise = $axios.post(url, data)
                break
            default:
                Notify({
                    message: '请求方法错误！',
                    type: 'danger'
                })
        }

        promise.then((res)=>{
            resolve(res.data)
        }).catch((err)=>{
            Notify({
                message: `请求出错：${ err.message }`,
                type: 'danger'
            })
        })
    })
}

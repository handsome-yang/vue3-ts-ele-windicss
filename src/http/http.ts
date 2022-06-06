
import axios from "axios"
// import {  }
import { router } from "../router";
let stepTimer: any;
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

const service = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    baseURL: import.meta.env.VITE_APP_API_BASE_URL as string
})



// 请求拦截器
service.interceptors.request.use((config: any) => {
    headerXAuthToken(config)
    // const getToken: any = sessionStorage.getItem("access_token")
    // const access_token = getToken ? JSON.parse(getToken).access_token : '';
    // let token = access_token ? `Bearer ${access_token}` : ''
    // token && (config.headers.Authorization = token)
    store.commit("changeProcessState", true);
    setStepInterval()
    return config
})
// 响应拦截器
service.interceptors.response.use((response:any) => {
    // 对响应数据做点什么
    storeXAuthToken(response)
    response.headers['Content-type'] = 'application/json;charset=UTF-8';
    if (response.data.code === 302 && response.data.msg == 'oauth2') {
        window.location.href = response.data.data.location
    }
    // if (response.data.code == 401 || response.data.msg == 'UNAUTHORIZED') {
    //     window.location.href = JSON.parse(sessionStorage.getItem('data')).loginPageUrl
    // }

    store.commit("changeCurrentStep", 100)
    store.commit("changeProcessState", false);
    return response;
}, (error:any) => {
    
    // 对响应错误做点什么
    console.log(error.response);
    checkoutStatus(error.response)
    store.commit("changeCurrentStep", 100)
    store.commit("changeProcessState", false);
    return Promise.reject(error);
});

export function http(options: object) {
    return new Promise((resolve, reject) => {
        service(options)
            .then((res: any) => {
                resolve(res.data)
            })
            .catch((err: any) => {
                reject(err)
            })
    })
}


function setStepInterval() {
    stepTimer = setInterval(() => {
        if (store.getters.getStep >= 99) {
            clearInterval(stepTimer)
            return
        } else {
            store.commit("changeCurrentStep", store.getters.getStep + 1);
        }
    }, 50)
}

const specialURL = []

function checkoutStatus(response:any) {
    let status = response.status
    let errorMessage = response.data.detail || response.data.title
    switch (true) {
        case status == 401:
            ElMessage.error(errorMessage || "登录已失效,请重新登录!")
            let data:any = sessionStorage.getItem('data')
            window.location.href = JSON.parse(data).loginPageUrl
            break;
        case (status >= 500):
            ElMessage.error(errorMessage || "服务器内部错误,请联系开发人员!")
            break;
        case (status >= 400):
            ElMessage.error(errorMessage || "客户端内部错误,请联系开发人员!")
            break;
        default:
            ElMessage.error(errorMessage || "请求错误")
            break;
    }
}


let storeXAuthToken = (response:any) => {
    console.log(response);
    let xAuthToken = response.headers['x-auth-token'];
    if (response.headers.hasOwnProperty('x-auth-token')) {
        if (xAuthToken != null) {
            localStorage.setItem('x-auth-token', xAuthToken);
        } else {
            localStorage.removeItem('x-auth-token');
        }
    }
}
let headerXAuthToken = (config:any) => {
    let xAuthToken = localStorage.getItem('x-auth-token');
    if (xAuthToken != null) {
        config.headers['x-auth-token'] = xAuthToken;
    } else { if (sessionStorage.getItem('data')) { config.headers['x-auth-token'] = JSON.parse(sessionStorage.getItem('data')).sessionId; } }
}
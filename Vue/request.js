import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
      if (store.getters.token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers["X-Token"] = getToken();
        config.headers["Authorization"] = store.getters.token;
      }
    // config.headers["x-forwarded-for"] = "61.178.1.255";
    // config.headers["WL-Proxy-Client-IP"] = "61.178.1.255";
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    let token = response.headers["authorization"];
    if (token) {
      // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
      store.dispatch("user/token", token);
    }

    if (res.errcode !== 0) {
      if (
        res.errcode === 508 ||
        res.errcode === 512 ||
        res.errcode === 514 ||
        res.errcode === 401
      ) {
        MessageBox.confirm("请重新登录？", "提示", {
          confirmButtonText: "确定",
          type: "error"
        })
          .then(() => {
            store.dispatch("user/resetToken").then(() => {
              location.reload();
            });
          })
          .catch(() => {
            store.dispatch("user/resetToken").then(() => {
              location.reload();
            });
          });
        return;
      }
    }
    if (
      res.errcode === 40001 ||
      res.errcode === 40002 ||
      res.errcode === 40003
    ) {
      let url = res.errmsg;
      window.location.href = url;
    }
    return res;
  },
  error => {
    Message.error("程序错误！");
    // setTimeout(()=>{
    //   store.dispatch('user/resetToken').then(() => {
    //     location.reload()
    //   })
    // },500)

    // console.log(error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    return Promise.reject(error);
  }
);

export default service;

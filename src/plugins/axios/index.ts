import Vue from 'vue'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

class HttpModel {
  async request<T> (cfg: AxiosRequestConfig, isLogin = false) {
    const instance = axios.create()
    let result
    try {
      result = await instance.request<T>(cfg)
      return Promise.resolve(result)
    } catch (throwError) {
      return Promise.reject(throwError)
    }
  }
}

const model = new HttpModel()

export default model

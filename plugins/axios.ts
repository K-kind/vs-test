import { Plugin } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

// declare module 'vue/types/vue' {
//   interface Vue {
//     $axios: NuxtAxiosInstance
//   }
// }

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance
  }
}

const axios: Plugin = ({ $axios }) => {
  $axios.onRequest(config => {
    config.baseURL = 'http://katahira.co.jp/api'
    config.headers.common.withCredentials = true
    return config
  })
}

export default axios

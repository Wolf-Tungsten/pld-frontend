import axios from 'axios'

export default axios.create({
  baseURL: 'https://myseu.cn/ws3/',
  validateStatus: () => true
})

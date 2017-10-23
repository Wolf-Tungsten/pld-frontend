import axios from 'axios'

export default axios.create({
  baseURL: 'https://myseu.cn/',
  timeout: 1000,
  validateStatus: () => true
})

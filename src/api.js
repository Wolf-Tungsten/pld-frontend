import axios from 'axios'

export default axios.create({
  baseURL: 'http://www.mediosz.club:8083',
  validateStatus: () => true
})

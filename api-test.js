const api = require('./src/api')

(async () => {
  console.log(await api.get('api/notice'))
})()

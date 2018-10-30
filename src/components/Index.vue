<template lang='pug'>
  div.app
    div.appbar
      p.title 基于目标检测的公共空间管理系统
    div.main
      div.slider
        el-carousel(v-loading="loadingImage" trigger="click" height="400px" type="card" indicator-position="none")
          el-carousel-item
            .item
              el-card.card(:body-style="{ padding: '0px' }")
                img.image(src="static/pld-test-img.JPG")
          el-carousel-item
            .item
              el-card.card(:body-style="{ padding: '0px' }")
                img.image(src="static/pld-test-img.JPG")
          el-carousel-item
            .item
              el-card.card(:body-style="{ padding: '0px' }")
                img.image(src="static/pld-test-img.JPG")
          el-carousel-item
            .item
              el-card.card(:body-style="{ padding: '0px' }")
                img.image(src="static/pld-test-img.JPG")
      div.time-picker
        el-date-picker.picker(v-model="timeRange" 
                type="datetimerange" 
                range-separator="至" 
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="pickTime"
                )
        el-slider.range(v-model="timeFilter" range :max="10")
      div.controller
        el-switch(v-model="auto" active-text="自动控制" inactive-text="手动控制")
        el-switch(v-model="onOff" active-text="电源开" inactive-text="电源关")
        el-switch(v-model="enable"   active-color="#13ce66"
                  inactive-color="#ff4949" active-text="空间启用" inactive-text="空间停用")
</template>

<script>
  import api from '../api'
  import { Message } from 'element-ui'

  export default {
    data () {
      return {
        timeRange:{},
        timeFilter:[],
        loadingImage:false,
        log:[], // 渲染数据的容器
        auto:true,
        onOff:true,
        enable:true
      }
    },
    async created () {
      let res = await api.get('/web')
      console.log(res.data)
    },
    methods: {
      pickTime: async(timeRange) => {
        let start = timeRange[0].getTime()
        let end = timeRange[1].getTime()
        let res = await api.get(`/web?start=${start}&end=${end}`)
        res = res.data.result
        if(res.length>0){
          this.log = res
        } else {
          Message({
          message: '此区间内没有日志',
          type: 'warning'
          });
        }
      }
    }
  }
</script>

<style lang="stylus">
  .app
    width 100%
    display flex
    flex-direction column
    align-items stretch
    
    .appbar
      width 100%
      overflow hidden
      margin auto
      background-color #409EFF
      .title
        padding-left 10px
        margin 20px 0px 20px 20px
        color #f0f0f0
        font-weight bold
        font-size 20px
        border-left solid 5px #f0f0f0
    
    .main
      display flex
      flex-direction column
      align-items stretch
      .slider
        margin-bottom 15px
        .item
          padding-top 20px
          display flex
          align-items center
          justify-content center
        border-bottom solid 0.5px #f0f0f0
        .card
          width 568px
        .image 
          height 320px
          width auto
      .time-picker
        display flex
        padding-left 30px
        border-bottom solid 0.5px #f0f0f0
        .picker
          flex-basis: 300px
        .range
          flex-grow: 1
          padding: 0 30px 20px 30px
      .controller
        display flex
        justify-content space-around
        padding-top 30px

      


        
</style>

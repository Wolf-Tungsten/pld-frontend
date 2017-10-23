import { Log } from '../logger'

export default {

  data () {
    return {
      pagerCurrentPage: 0,
      pagerIsEnded: false
    }
  },

  created () {
    this.pagerLoadNextPage()
  },

  methods: {
    async pagerLoadNextPage () {
      if (this.pagerIsEnded) {
        return
      }
      try {
        this.pagerIsEnded = await this.pagerGetter(this.pagerCurrentPage + 1)
        this.pagerCurrentPage++
        if (this.pagerIsEnded) {
          new Log().blue('Pager').cyan('ended').fire()
        } else {
          new Log().blue('Pager').cyan('loaded page ' + this.pagerCurrentPage).fire()
        }
      } catch (e) {
        new Log().red('Pager').cyan('error').auto(e).fire()
      }
    },

    pagerReload () {
      this.pagerIsEnded = false
      this.pagerCurrentPage = 0
      this.pagerLoadNextPage()
    }
  }
}
import { fetch } from "../api/xls";
// title-mixin.js
function getTitle (vm) {
  const { title } = vm.$route.meta ? vm.$route.meta : {};

  return title[vm.$ssrContext.lang];
}
const serverTitleMixin = {
  created () {
    const title = getTitle(this)
    this.$ssrContext.title = title || '';
  },
  methods: {
    fetch
  }
}
const clientTitleMixin = {
  mounted () {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
  }
}
// 可以通过 `webpack.DefinePlugin` 注入 `VUE_ENV`
export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin
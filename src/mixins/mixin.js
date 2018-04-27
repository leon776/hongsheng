import { async, httpGet } from "../api/xls";

// mixin.js
function getTitle (vm) {
  const { title } = vm.$route.meta ? vm.$route.meta : {};
  const lang = process.env.VUE_ENV === 'server' ? vm.$ssrContext.lang : 'zh';
  return title[lang];
}
const serverMixin = {
  data() {
    return {
      headData: [],
      lang: this.$ssrContext.lang,
    }
  },
  created () {
    const title = getTitle(this)
    this.$ssrContext.title = title || '';
    this.fetch('headData', '导航');
  },
  methods: {
    fetch(...args) {
      const res = async.call(this, this.$ssrContext.dirname, ...args);
      this.$ssrContext.state[args[1]] = res;
      this[args[0]] = res;
    },
    head(index) {
      return this.headData[index][this.lang];
    },
  }
}
const clientMixin = {
  data() {
    return {
      lang: 'zh',
      headData: [],
    }
  },
  mounted () {
    const title = getTitle(this)
    if (title) {
      document.title = title
    }
    if(!this.headData) {
      this.fetch('headData', '导航');
    }
  },
  methods: {
    fetch(...args) {
      // httpGet.call(this, ...args);
      const ssrData = window.__INITIAL_STATE__[args[1]];
      if(ssrData) {
        this[args[0]] = ssrData;
      } else {
        httpGet.call(this, ...args);
      }
    },
    head(index) {
      return this.headData[index] ? this.headData[index][this.lang] : null;
    },
  }
}
// 可以通过 `webpack.DefinePlugin` 注入 `VUE_ENV`
export default process.env.VUE_ENV === 'server' ? serverMixin : clientMixin
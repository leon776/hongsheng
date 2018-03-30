<template>
<div class="main customer-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">客户及行业</h2>
              <p class="c-intro">Customers and Industry</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
    <div class="page-guide type1">
        您的位置：<a href="index.html">首页</a><em class="song"> &gt; </em><a href="/customer" class="cur">客户及服务</a>
    </div>
    <div class="left-bar left-bar-inline">
        <a href="/customer?p=s1" class="w-btn" :class="{'active' : page === 's1'}">食品、饮料类客户</a>
        <a href="/customer?p=s2" class="w-btn" :class="{'active' : page === 's2'}">电子、线束加工类客户</a>
        <a href="/customer?p=s3" class="w-btn" :class="{'active' : page === 's3'}">集团市场分布</a>
    </div>

    <div class="tab-content-list">
        <s1 v-if="page === 's1'"></s1>
        <s2 v-if="page === 's2'"></s2>
        <s3 v-if="page === 's3'"></s3>
    </div>
  </div>
  <v-footer></v-footer>
  <template v-html="script"></template>
</div>
</template>

<script>
import vFooter from '@/components/footer.vue';
import s1 from '@/components/customer/s1.vue';
import s2 from '@/components/customer/s2.vue';
import s3 from '@/components/customer/s3.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'about',
  components: {
      vFooter,
      s1,
      s2,
      s3,
  },
  mixins: [mixin],
  data () {
    return {
      lang: this.$ssrContext.lang,
      page: this.$route.query.p || 's1',
      head: [],
      body: [],
      script: `\<script src="/static/js/echarts.common.min.js"\><\/script\>\<script src="/static/js/inject/customer.js"\><\/script\>`,
    }
  },
  created() {

  },
}
</script>
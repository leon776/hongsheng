<template>
<div class="main product-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">产品及服务</h2>
              <p class="c-intro">Products & Services</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="left-bar">
          <a href="/product?p=s1" class="w-btn" :class="{'active' : page === 's1'}">电子产品、标签、烘焙能力</a>
          <a href="/product?p=s2" class="w-btn" :class="{'active' : page === 's2'}">产品线</a>
          <a href="/product?p=s3" class="w-btn" :class="{'active' : page === 's3'}">线束装配和印刷电路板组件</a>
          <a href="/product?p=s4" class="w-btn" :class="{'active' : page === 's4'}">纸张切割</a>
          <a href="/product?p=s5" class="w-btn" :class="{'active' : page === 's5'}">原始设计制造商及项目早期介入</a>
          <a href="/product?p=s6" class="w-btn" :class="{'active' : page === 's6'}">售后服务</a>
          <a href="/product?p=s7" class="w-btn" :class="{'active' : page === 's7'}">供应链管理</a>
          <a href="/product?p=s8" class="w-btn" :class="{'active' : page === 's8'}">烘培和甜点</a>
      </div>
      <div class="right-main-wrapper">
          <div class="page-guide">
              您的位置：<a href="/">首页</a><em class="song"> &gt; </em><a href="/product?p=s1" class="cur">产品及服务</a>
          </div>
          <div class="tab-content-list">
              <s1 v-if="page === 's1'"></s1>
              <s2 v-if="page === 's2'"></s2>
              <s3 v-if="page === 's3'"></s3>
              <s4 v-if="page === 's4'"></s4>
              <s5 v-if="page === 's5'"></s5>
              <s6 v-if="page === 's6'"></s6>
              <s7 v-if="page === 's7'"></s7>
              <s8 v-if="page === 's8'"></s8>
          </div>
      </div>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
import vFooter from '@/components/footer.vue';
import s1 from '@/components/product/s1.vue';
import s2 from '@/components/product/s2.vue';
import s3 from '@/components/product/s3.vue';
import s4 from '@/components/product/s4.vue';
import s5 from '@/components/product/s5.vue';
import s6 from '@/components/product/s6.vue';
import s7 from '@/components/product/s7.vue';
import s8 from '@/components/product/s8.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'about',
  components: {
      vFooter,
      s1,
      s2,
      s3,
      s4,
      s5,
      s6,
      s7,
      s8,
  },
  mixins: [mixin],
  data () {
    return {
      lang: this.$ssrContext.lang,
      page: this.$route.query.p || 's1',
      head: [],
      body: [],
      script: `\<script src="/static/js/inject/product.js"\><\/script\>`,
    }
  },
  created() {
      this.head = this.fetch('lang', 0);
      this.body = this.fetch('lang', 1);
      // console.log(this.$ssrContext)
  },
}
</script>
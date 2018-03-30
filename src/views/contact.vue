<template>
<div class="main contact-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">联络我们</h2>
              <p class="c-intro">Contact us</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="page-guide type1">
          您的位置：<a href="index.html">首页</a><em class="song"> &gt; </em><a href="/contact" class="cur">联络我们</a>
      </div>
      <div class="left-bar left-bar-inline">
          <a href="/contact?p=s1" class="w-btn" :class="{'active' : page === 's1'}">工厂</a>
          <a href="/contact?p=s2" class="w-btn" :class="{'active' : page === 's2'}">销售部</a>
          <a href="/contact?p=s3" class="w-btn" :class="{'active' : page === 's3'}">仓库</a>
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
import mixin from '@/mixins/mixin';
import s1 from '@/components/contact/s1.vue';
import s2 from '@/components/contact/s2.vue';
import s3 from '@/components/contact/s3.vue';

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
      script: `\<script src="/static/js/inject/contact.js"\><\/script\>`,
    }
  },
  created() {

  },
}
</script>
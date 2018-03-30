<template>
<div class="main work-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">求职</h2>
              <p class="c-intro">career</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="page-guide type1">
          您的位置：<a href="/">首页</a><em class="song"> &gt; </em><a href="/work" class="cur">为什么选择鸿昇</a>
      </div>
      <div class="left-bar left-bar-inline">
          <a href="/work?p=s1" class="w-btn" :class="{'active' : page === 's1'}">为什么选择鸿昇</a>
          <a href="/work?p=s2" class="w-btn" :class="{'active' : page === 's2'}">工作机会</a>
          <a href="/work?p=s3" class="w-btn" :class="{'active' : page === 's3'}">人力资源联络窗口</a>
      </div>
      <div class="tab-content-list">
          <s1 v-if="page === 's1'"></s1>
          <s2 v-if="page === 's2'"></s2>
          <s3 v-if="page === 's3'"></s3>
      </div>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
import vFooter from '@/components/footer.vue';
import s1 from '@/components/work/s1.vue';
import s2 from '@/components/work/s2.vue';
import s3 from '@/components/work/s3.vue';
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
      script: `\<script src="/static/js/inject/work.js"\><\/script\>`,
    }
  },
  created() {
   
  },
}
</script>
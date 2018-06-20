<template>
<div class="main work-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">{{head(17)}}</h2>
              <p class="c-intro">career</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="page-guide type1">
          {{head(25)}}：<a href="/">{{head(0)}}</a><em class="song"> &gt; </em><a href="/work" class="cur">{{head(17)}}</a>
      </div>
      <div class="left-bar left-bar-inline">
          <a href="/work?p=s1" class="w-btn" :class="{'active' : page === 's1'}">{{head(18)}}</a>
          <a href="/work?p=s2" class="w-btn" :class="{'active' : page === 's2'}">{{head(19)}}</a>
          <a href="/work?p=s3" class="w-btn" :class="{'active' : page === 's3'}">{{head(20)}}</a>
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
import vFooter from '@/components/pc/footer.vue';
import s1 from '@/components/pc/work/s1.vue';
import s2 from '@/components/pc/work/s2.vue';
import s3 from '@/components/pc/work/s3.vue';
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
      page: this.$route.query.p || 's1',
      headData: [],
      body: [],
      script: `\<script src="/static/js/inject/work.js"\><\/script\>`,
    }
  },
  created() {
   
  },
  
}
</script>
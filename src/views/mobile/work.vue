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
  <div class="hash-nav-wrapper">
    <div class="hash-nav" v-if="page === 's1'">
      <a href="javascript:" class="sub-nav-a" :class="{'active' : page === 's1'}">{{head(18)}}</a>
      <a href="/work?p=s2" class="sub-nav-a" :class="{'active' : page === 's2'}">{{head(19)}}</a>
      <a href="/work?p=s3" class="sub-nav-a" :class="{'active' : page === 's3'}">{{head(20)}}</a>
    </div>
    <div class="hash-nav" v-if="page === 's2'">
      <a href="javascript:" class="sub-nav-a" :class="{'active' : page === 's1'}">{{head(19)}}</a>
      <a href="/work?p=s1" class="sub-nav-a" :class="{'active' : page === 's2'}">{{head(18)}}</a>
      <a href="/work?p=s3" class="sub-nav-a" :class="{'active' : page === 's3'}">{{head(20)}}</a>
    </div>
    <div class="hash-nav" v-if="page === 's3'">
      <a href="javascript:" class="sub-nav-a" :class="{'active' : page === 's1'}">{{head(20)}}</a>
      <a href="/work?p=s1" class="sub-nav-a" :class="{'active' : page === 's2'}">{{head(18)}}</a>
      <a href="/work?p=s2" class="sub-nav-a" :class="{'active' : page === 's3'}">{{head(19)}}</a>
    </div>
    <i class="icon sub-nav-icon"></i>
  </div>
  <div class="container">
  <div class="main-wrapper">
      <div class="tab-content-list">
          <s1 v-if="page === 's1'"></s1>
          <s2 v-if="page === 's2'"></s2>
          <s3 v-if="page === 's3'"></s3>
      </div>
  </div>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
import vFooter from '@/components/mobile/footer.vue';
import s1 from '@/components/mobile/work/s1.vue';
import s2 from '@/components/mobile/work/s2.vue';
import s3 from '@/components/mobile/work/s3.vue';
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
      script: `\<script src="/mobile/static/js/inject/work.js"\><\/script\>`,
    }
  },
  created() {
   
  },
  
}
</script>
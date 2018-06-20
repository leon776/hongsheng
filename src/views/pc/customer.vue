<template>
<div class="main customer-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">{{head(17)}}</h2>
              <p class="c-intro">Customers and Industry</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
    <div class="page-guide type1">
        {{head(25)}}：<a href="index.html">{{head(0)}}</a><em class="song"> &gt; </em><a href="/customer" class="cur">{{head(13)}}</a>
    </div>
    <div class="left-bar left-bar-inline">
        <a href="/customer?p=s1" class="w-btn" :class="{'active' : page === 's1'}">{{head(14)}}</a>
        <a href="/customer?p=s2" class="w-btn" :class="{'active' : page === 's2'}">{{head(15)}}</a>
        <a href="/customer?p=s3" class="w-btn" :class="{'active' : page === 's3'}">{{head(16)}}</a>
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
import vFooter from '@/components/pc/footer.vue';
import s1 from '@/components/pc/customer/s1.vue';
import s2 from '@/components/pc/customer/s2.vue';
import s3 from '@/components/pc/customer/s3.vue';
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
      script: `
        \<script src="/static/js/echarts.common.min.js"\><\/script\>
        \<script src="/static/js/inject/customer.js"\><\/script\>`,
    }
  },
  created() {

  },
}
</script>
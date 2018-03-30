<template>
<div class="main contact-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">{{head(21)}}</h2>
              <p class="c-intro">Contact us</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="page-guide type1">
          {{head(25)}}：<a href="index.html">{{head(0)}}</a><em class="song"> &gt; </em><a href="/contact" class="cur">{{head(21)}}</a>
      </div>
      <div class="left-bar left-bar-inline">
          <a href="/contact?p=s1" class="w-btn" :class="{'active' : page === 's1'}">{{head(22)}}</a>
          <a href="/contact?p=s2" class="w-btn" :class="{'active' : page === 's2'}">{{head(23)}}</a>
          <a href="/contact?p=s3" class="w-btn" :class="{'active' : page === 's3'}">{{head(24)}}</a>
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
      headData: [],
      body: [],
      script: `\<script src="/static/js/inject/contact.js"\><\/script\>`,
    }
  },
  created() {

  },
}
</script>
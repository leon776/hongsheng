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
  <div class="hash-nav-wrapper">
      <div class="hash-nav" v-if="page === 's1'">
        <a href="javascript:" class="sub-nav-a" :class="{'active' : page === 's1'}">{{head(22)}}</a>
        <a href="/contact?p=s2" class="sub-nav-a" :class="{'active' : page === 's2'}">{{head(23)}}</a>
        <a href="/contact?p=s3" class="sub-nav-a" :class="{'active' : page === 's3'}">{{head(24)}}</a>
      </div>
      <div class="hash-nav" v-if="page === 's2'">
        <a href="javascript:" class="sub-nav-a" :class="{'active' : page === 's1'}">{{head(23)}}</a>
        <a href="/contact?p=s1" class="sub-nav-a" :class="{'active' : page === 's2'}">{{head(22)}}</a>
        <a href="/contact?p=s3" class="sub-nav-a" :class="{'active' : page === 's3'}">{{head(24)}}</a>
      </div>
      <div class="hash-nav" v-if="page === 's3'">
        <a href="javascript:" class="sub-nav-a" :class="{'active' : page === 's1'}">{{head(24)}}</a>
        <a href="/contact?p=s1" class="sub-nav-a" :class="{'active' : page === 's2'}">{{head(22)}}</a>
        <a href="/contact?p=s2" class="sub-nav-a" :class="{'active' : page === 's3'}">{{head(23)}}</a>
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
import vFooter from '@/components/pc/footer.vue';
import mixin from '@/mixins/mixin';
import s1 from '@/components/pc/contact/s1.vue';
import s2 from '@/components/pc/contact/s2.vue';
import s3 from '@/components/pc/contact/s3.vue';

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
      // script: `\<script src="/mobile/static/js/inject/contact.js"\><\/script\>`,
    }
  },
  created() {

  },
}
</script>
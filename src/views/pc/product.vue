<template>
<div class="main product-main">
  <div class="page-banner">
      <div class="container">
          <div class="title-box">
              <h2 class="c-title">{{head(4)}}</h2>
              <p class="c-intro">Products & Services</p>
              <div class="line"></div>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="left-bar">
          <a href="/product?p=s1" class="w-btn" :class="{'active' : page === 's1'}">{{head(5)}}</a>
          <a href="/product?p=s2" class="w-btn" :class="{'active' : page === 's2'}">{{head(6)}}</a>
          <a href="/product?p=s3" class="w-btn" :class="{'active' : page === 's3'}">{{head(7)}}</a>
          <a href="/product?p=s4" class="w-btn" :class="{'active' : page === 's4'}">{{head(8)}}</a>
          <a href="/product?p=s5" class="w-btn" :class="{'active' : page === 's5'}">{{head(9)}}</a>
          <a href="/product?p=s6" class="w-btn" :class="{'active' : page === 's6'}">{{head(10)}}</a>
          <a href="/product?p=s7" class="w-btn" :class="{'active' : page === 's7'}">{{head(11)}}</a>
          <a href="/product?p=s8" class="w-btn" :class="{'active' : page === 's8'}">{{head(12)}}</a>
      </div>
      <div class="right-main-wrapper">
          <div class="page-guide">
              {{head(25)}}：<a href="/">{{head(0)}}</a><em class="song"> &gt; </em><a href="/product?p=s1" class="cur">{{head(4)}}</a>
          </div>
          <div class="tab-content-list">
              <s1 v-if="page === 's1'" :base-data="base" :lang="lang"></s1>
              <s2 v-if="page === 's2'" :base-data="base" :lang="lang"></s2>
              <s3 v-if="page === 's3'" :base-data="base" :lang="lang"></s3>
              <s4 v-if="page === 's4'" :base-data="base" :lang="lang"></s4>
              <s5 v-if="page === 's5'" :base-data="base" :lang="lang"></s5>
              <s6 v-if="page === 's6'" :base-data="base" :lang="lang"></s6>
              <s7 v-if="page === 's7'" :base-data="base" :lang="lang"></s7>
              <s8 v-if="page === 's8'" :base-data="base" :lang="lang"></s8>
          </div>
      </div>
      <div id="modal" class="c-modal" style="display: none;">
          <div class="clearfix inner">
              <div class="img-box">
                  <img src="" class="modal-pic" id="modalPic">
              </div>
              <div class="content-box">
                  <div class="title" id="modalTitle"></div>
                  <div id="modalContent"></div>
                  <div style="margin-top:12px;">
                    <span id="modalProk"></span>: <span id="modalProv"></span>
                  </div>
                  <p><a id="modalHref" href="#" target="_blank"></a></p>
              </div>
          </div>
      </div>
  </div>
  <v-footer></v-footer>
  <template v-html="script"></template>
</div>
</template>

<script>
import vFooter from '@/components/pc/footer.vue';
import s1 from '@/components/pc/product/s1.vue';
import s2 from '@/components/pc/product/s2.vue';
import s3 from '@/components/pc/product/s3.vue';
import s4 from '@/components/pc/product/s4.vue';
import s5 from '@/components/pc/product/s5.vue';
import s6 from '@/components/pc/product/s6.vue';
import s7 from '@/components/pc/product/s7.vue';
import s8 from '@/components/pc/product/s8.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'product',
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
      base: [],
      page: this.$route.query.p || 's1',
      headData: [],
      body: [],
      script: `
        \<script src="/static/js/layer/layer.js"\><\/script\>
        \<script src="/static/js/inject/product.js"\><\/script\>
      `,
    }
  },
  created() {
    this.fetch('base', '产品及服务');
  },
  methods: {

  }
}
</script>
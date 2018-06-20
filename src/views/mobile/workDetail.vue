<template>
<div class="main work-detail-main">
  <div class="container">
    <div class="inner-main">
        <div class="page-guide type1">
            <a href="javascript:history.go(-1)" class="w-btn active go-back" style="z-index: 99;">{{head(28)}}</a>
            {{head(25)}}：<a href="/">{{head(0)}}</a><em class="song"> &gt; </em><a :href="'/work?p=' + page">{{head(19)}}</a><em class="song"> &gt; </em><a href="javascript:" class="cur">{{head(29)}}</a>
        </div>
        <div class="work-box">
            <div class="title">{{content.title}}</div>
            <p class="i-p">{{content.name}}</p>
            <p class="i-p"><span class="c-gray">{{content.addressKey}}：</span>{{content.addressVal}}</p>
            <p class="i-p"><span class="c-gray">{{content.dateKey}}：</span>{{content.dateVal}}</p>
            <div class="line"></div>
            <div v-html="content.content"></div>
            <br>
            <br>
            <br>
            <p class="text-right">{{content.title}}</p>
            <p class="text-right">{{content.userName}}</p>
            <p class="text-right"><a :href="'mailto:' + content.email" class="c-blue">{{content.email}}</a></p>
        </div>
    </div>
  </div>
  <v-footer></v-footer>
</div>
</template>

<script>
import vFooter from '@/components/mobile/footer.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'about',
  components: {
    vFooter,
  },
  mixins: [mixin],
  data () {
    return {
      page: this.$route.query.q || 0,
      headData: [],
      content: {},
      script: `\<script src="/mobile/static/js/inject/workDetail.js"\><\/script\>`,
    }
  },
  computed: {
    dataIndex() {
        let res = 0;
        switch(this.lang) {
            case 'hk':
                res = 1;
                break;
            case 'en':
                res = 2;
                break;
        }
        return res;
    },
  },
  created() {
    this.fetch('content', '工作机会', this.dataIndex)[this.page];
    this.content.content = this.content.content.replace(/[\n\r\t]/g, '<br />');
  },
  methods: {
    head(index) {
      return this.headData[index][this.lang];
    },
  }
}
</script>
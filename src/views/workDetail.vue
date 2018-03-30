<template>
<div class="main work-detail-main">
  <div class="container">
    <div class="inner-main">
        <div class="page-guide type1">
            <a href="javascript:history.go(-1)" class="w-btn active go-back" style="z-index: 99;">返回</a>
            您的位置：<a href="/">首页</a><em class="song"> &gt; </em><a :href="'/work?p=' + page">工作机会</a><em class="song"> &gt; </em><a href="javascript:" class="cur">招聘详情</a>
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
import vFooter from '@/components/footer.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'about',
  components: {
    vFooter,
  },
  mixins: [mixin],
  data () {
    return {
      lang: this.$ssrContext.lang,
      page: this.$route.query.q || 0,
      content: {},
      script: `\<script src="/static/js/inject/workDetail.js"\><\/script\>`,
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
    this.content = this.fetch('工作机会', this.dataIndex)[this.page];
    this.content.content = this.content.content.replace(/[\n\r\t]/g, '<br />');
  },
}
</script>
<template>
<div class="main work-detail-main">
  <div class="container">
    <div class="inner-main">
        <div class="page-guide type1">
            <a href="javascript:history.go(-1)" class="w-btn active go-back">返回</a>
            您的位置：<a href="/">首页</a><em class="song"> &gt; </em><a href="/work?p=2">工作机会</a><em class="song"> &gt; </em><a href="javascript:" class="cur">招聘详情</a>
        </div>
        <div class="work-box">
            <div class="title">Sales Engineer</div>
            <p class="i-p">香港鸿昇电子器材有限公司</p>
            <p class="i-p"><span class="c-gray">工作地点：</span>香港</p>
            <p class="i-p"><span class="c-gray">发布日期：</span>May 2016</p>
            <div class="line"></div>
            <p>
                结合客户需求与市场趋势，为产品初期规划提供深刻见解与发展方向；计划并执行用户研究，总结研究数据并提供报告;定义产品交互模型并执行关键用户流程交
                互设计；呈现设计方案并与客户沟通设计思路;与内部团队及客户方团队协作，提高产品设计质量;指导初级设计师工作。
            </p>
            <br>
            <p>
                1.五年以上用户体验设计相关工作经验；<br>
                2.多项目、多任务管理能力，能带队创作并跨团队合作；<br>
                3.良好的客户沟通与关系维护能力；<br>
                4.关注互联网，软件与各类电子产品，对数字媒体领域交互设计师和设计研究方面的理论及实践拥有深刻见解。
            </p>
            <br>
            <br>
            <br>
            <p class="text-right">香港鸿昇电子器材有限公司</p>
            <p class="text-right">Fanny Ng 女士</p>
            <p class="text-right"><a href="mailto:fanny@hungshang.com.hk" class="c-blue">fanny@hungshang.com.hk</a></p>
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
      page: this.$route.query.q || '1',
      head: [],
      body: [],
      script: `\<script src="/static/js/inject/workDetail.js"\><\/script\>`,
    }
  },
  created() {
      this.head = this.fetch('lang', 0);
      this.body = this.fetch('lang', 1);
      // console.log(this.$ssrContext)
  },
}
</script>
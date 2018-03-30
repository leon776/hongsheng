<template>
  <div class="content-item ct2 current">
      <p>香港鸿昇集团的业务遍布绝大多数中国地区，在8个城市设立办事处，销售连接器、线束、锁、尼龙扎带、绝缘体、铰链以及机械部件。<br>
          公司的销售和营销团队为您提供品种齐全的电子部件以及最优供应链和设计链服务支持的集成产品。我们的销售服务专门针对原始设备制造商以及电子制造服务提供商的需求个性化定制，以本土技术全球提供服务。
          详情请点击以下链接：</p>

      <div class="card-wrapper">
          <div class="row">

              <div class="col col-33" 
              :onclick="'showModal('+ JSON.stringify(item) +', \''+ '/static/images/pd'+ (index + 1) +'.jpg' +'\')'" style="cursor:pointer" 
                v-for="(item, index) in data"
                v-if="data.length > 0">
                  <div class="c-card2">
                      <div class="pic-box">
                          <img :src="'/static/images/pd'+ (index + 1) +'.jpg'" class="img">
                      </div>
                      <div class="clearfix txt-box">
                        <div class="fl title">{{item.title}}</div>
                        <div class="fr intro">Interconnect</div>
                      </div>
                  </div>
              </div>
<!--               <div class="col col-33">
                  <div class="c-card2">
                      <div class="pic-box">
                          <img src="/static/images/pd1-2.jpg" class="img">
                      </div>
                      <div class="clearfix txt-box">
                          <div class="fl title">莫莱克斯</div>
                          <div class="fr intro">Interconnect</div>
                      </div>
                  </div>
              </div>
              <div class="col col-33">
                  <div class="c-card2">
                      <div class="pic-box">
                          <img src="/static/images/pd1-3.jpg" class="img">
                      </div>
                      <div class="clearfix txt-box">
                          <div class="fl title">矢崎</div>
                          <div class="fr intro">Interconnect</div>
                      </div>
                  </div>
              </div>
              <div class="col col-33">
                  <div class="c-card2">
                      <div class="pic-box">
                          <img src="/static/images/pd1-4.jpg" class="img">
                      </div>
                      <div class="clearfix txt-box">
                          <div class="fl title">益升华</div>
                          <div class="fr intro">Mechanical</div>
                      </div>
                  </div>
              </div>
              <div class="col col-33">
                  <div class="c-card2">
                      <div class="pic-box">
                          <img src="/static/images/pd1-5.jpg" class="img">
                      </div>
                      <div class="clearfix txt-box">
                          <div class="fl title">艾利丹尼森</div>
                          <div class="fr intro">Identification System</div>
                      </div>
                  </div>
              </div>
              <div class="col col-33">
                  <div class="c-card2">
                      <div class="pic-box">
                          <img src="/static/images/pd1-6.jpg" class="img">
                      </div>
                      <div class="clearfix txt-box">
                          <div class="fl title">诺通</div>
                          <div class="fr intro">Commerial Available Cable</div>
                      </div>
                  </div>
              </div> -->
          </div>
      </div>
  </div>
</template>
<script>
import mixin from '@/mixins/mixin';

export default {
  name: 'about',
  components: {
  },
  mixins: [mixin],
  data () {
    return {
      lang: this.$ssrContext.lang,
      data: {},
      script: `\<script src="/static/js/inject/product.js"\><\/script\>`,
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
    this.data = this.fetch('产品线', this.dataIndex);
    this.data.forEach((v, k) => {
      this.data[k].content = this.data[k].content.replace(/[\n\r\t]/g, '<br />');
    });
  },
}
</script>
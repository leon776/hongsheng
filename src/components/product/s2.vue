<template>
  <div class="content-item ct2 current">
      <p>{{base(12)}}：</p>

      <div class="card-wrapper">
          <div class="row">

              <div class="col col-33" 
              :onclick="'showModal('+ JSON.stringify(item) +', \''+ '/static/images/pd'+ (index + 1) +'.jpg' +'\')'" style="cursor:pointer" 
                v-for="(item, index) in data"
                v-if="data.length > 0">
                  <div class="c-card2">
                      <div class="pic-box">
                          <img :src="'/static/images/product/pd1-'+ (index + 1) +'.jpg'" class="img">
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
      data: {},
      script: `\<script src="/static/js/inject/product.js"\><\/script\>`,
    }
  },
  props:['baseData', 'lang'],
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
  methods: {
    base(index) {
      return this.baseData[index][this.lang];
    },
  }
}
</script>
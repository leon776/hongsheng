<template>
  <div class="content-item ct2 current">
      <p>{{base(12)}}：</p>
      <div class="card-wrapper">
          <div class="row">
              <div class="col col-50" 
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
          </div>
      </div>
  </div>
</template>
<script>
import mixin from '@/mixins/mixin';

export default {
  mixins: [mixin],
  data () {
    return {
      data: {},
      script: `\<script src="/mobile/static/js/inject/product.js"\><\/script\>`,
    }
  },
  props: ['baseData'],
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
    this.fetch('data', '产品线', this.dataIndex);
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
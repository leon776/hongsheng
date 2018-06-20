<template>
<div class="content-item ct3 current">
  <div class="i-title">{{base(13)}}</div>
  <p>{{base(14)}}</p>

  <p class="fr"><img src="/mobile/static/images/productservice1.jpg"></p>
  <div class="i-title">{{base(15)}}</div>
  <p>{{base(16)}}</p>

  <div class="i-title">{{base(17)}}：</div>
  <span class="dot">{{base(18)}}</span>
  <span class="dot">{{base(19)}}</span>
  <span class="dot">{{base(20)}}</span>
  <span class="dot">{{base(21)}}</span>
  <span class="dot">{{base(22)}}</span>
  <span class="dot">{{base(23)}}</span>
  <span class="dot">{{base(24)}}</span>
  <span class="dot">{{base(25)}}</span>


  <div class="row card-list">
      <div class="col">
          <div class="c-card3">
              <div class="pic-box">
                  <img src="/mobile/static/images/ps1.jpg" class="img">
              </div>
              <div class="txt-box">
                  {{base(26)}}
              </div>
          </div>
      </div>
      <div class="col">
          <div class="c-card3">
              <div class="pic-box">
                  <img src="/mobile/static/images/ps2.jpg" class="img">
              </div>
              <div class="txt-box">
                  {{base(27)}}
              </div>
          </div>
      </div>
      <div class="col">
          <div class="c-card3">
              <div class="pic-box">
                  <img src="/mobile/static/images/ps3.jpg" class="img">
              </div>
              <div class="txt-box">
                  {{base(28)}}
              </div>
          </div>
      </div>
      <div class="col">
          <div class="c-card3">
              <div class="pic-box">
                  <img src="/mobile/static/images/ps4.jpg" class="img">
              </div>
              <div class="txt-box">
                  {{base(29)}}
              </div>
          </div>
      </div>
      <div class="col">
          <div class="c-card3">
              <div class="pic-box">
                  <img src="/mobile/static/images/ps5.jpg" class="img">
              </div>
              <div class="txt-box">
                  {{base(30)}}
              </div>
          </div>
      </div>
      <div class="col">
          <div class="c-card3">
              <div class="pic-box">
                  <img src="/mobile/static/images/ps6.jpg" class="img">
              </div>
              <div class="txt-box">
                  {{base(31)}}
              </div>
          </div>
      </div>
  </div>
</div>
</template>
<script>
export default {
  props:['baseData', 'lang'],
  methods: {
    base(index) {
      return this.baseData[index][this.lang];
    },
  }
}
</script>
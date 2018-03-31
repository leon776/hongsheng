<template>
<div class="content-item ct4 current">
  <div class="row pic-row">
      <div class="col col-50">
          <img class="img" src="/static/images/ps4-1.jpg">
      </div>
      <div class="col col-50">
          <img class="img" src="/static/images/ps4-2.jpg">
      </div>
  </div>
  <br>
  <p>{{base(32)}}</p>
  <div class="i-title">{{base(33)}}：</div>
  <div class="process">
      <div class="row p-row">
          <div class="col">
              <img src="/static/images/ps4-3.png">
              <div>{{base(34)}}</div>
              <i class="icon icon-right"></i>
              <div class="line"></div>
          </div>
          <div class="col">
              <img src="/static/images/ps4-4.png">
              <div>{{base(35)}}</div>
              <i class="icon icon-right"></i>
              <div class="line"></div>
          </div>
          <div class="col">
              <img src="/static/images/ps4-5.png">
              <div>{{base(36)}}</div>
              <i class="icon icon-right"></i>
              <div class="line"></div>
          </div>

          <div class="col">
              <img src="/static/images/ps4-6.png">
              <div>{{base(37)}}</div>
              <i class="icon icon-right"></i>
              <div class="line"></div>
          </div>
          <div class="col">
              <img src="/static/images/ps4-10.png">
              <div>{{base(38)}}</div>
              <i class="icon icon-right"></i>
              <div class="line"></div>
          </div>
          <div class="col">
              <img src="/static/images/ps4-9.png">
              <div>{{base(39)}}</div>
              <i class="icon icon-right"></i>
              <div class="line"></div>
          </div>
          <div class="col">
              <img src="/static/images/ps4-8.png">
              <div>{{base(40)}}</div>
              <i class="icon icon-right"></i>
              <div class="line"></div>
          </div>
          <div class="col">
              <img src="/static/images/ps4-7.png">
              <div>{{base(41)}}</div>
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
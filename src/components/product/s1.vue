<template>
  <div class="content-item ct1 current">
      <div class="row">
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card1.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(0)">{{base(0)}}</div>
                      <p class="intro">Inter-connectivity</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card2.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(1)">{{base(1)}}</div>
                      <p class="intro">Cable Assembly & Harness</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card3.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(2)">{{base(2)}}</div>
                      <p class="intro">PCBA</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card4.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(3)">{{base(3)}}</div>
                      <p class="intro">Cable Management & Locking</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card5.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(4)">{{base(4)}}</div>
                      <p class="intro">Adhesive Materials</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card6.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(5)">{{base(5)}}</div>
                      <p class="intro">Label Slitting</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card7.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(6)">{{base(6)}}</div>
                      <p class="intro">Outdoor Film/Screen</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card8.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(7)">{{base(7)}}</div>
                      <p class="intro">RFID</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card9.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(8)">{{base(8)}}</div>
                      <p class="intro">Bread</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card10.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(9)">{{base(9)}}</div>
                      <p class="intro">Pastry</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card11.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(10)">{{base(10)}}</div>
                      <p class="intro">Cake</p>
                  </div>
              </div>
          </div>
          <div class="col col-25">
              <div class="c-card1">
                  <div class="pic-box">
                      <img src="/static/images/product-card12.jpg" class="img">
                  </div>
                  <div class="txt-box">
                      <div class="title" v-if="base(11)">{{base(11)}}</div>
                      <p class="intro">OEM</p>
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
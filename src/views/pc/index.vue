<template>
<div class="main index-main">
    <div class="swiper-container fullscreen-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide s1">
                <img src="/static/images/index-banner.jpg" class="full-bg">
                <div class="ani center-box" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s"
                     swiper-animate-delay="0.3s">
                    <h2 class="title"><span class="title-num">{{text(0)}}</span>{{text(1)}}</h2>
                    <p class="intro">{{text(2)}}<span class="point"></span>{{text(3)}}<span class="point"></span>{{text(4)}}</p>
                    <i class="icon icon-circle-arrow-down" onclick="slideNextPage()"></i>
                </div>
            </div>
            <div class="swiper-slide s2">
                <div class="container">
                    <div class="title-box">
                        <h2 class="c-title">{{text(5)}}</h2>
                        <p class="c-intro" v-if="lang !== 'en'">Products & Services</p>
                        <div class="right-box">
                            <i class="icon icon-left product-prev"></i>
                            <div class="line"></div>
                            <i class="icon icon-right product-next"></i>
                        </div>
                    </div>
                    <div class="swiper-container h-swiper product-swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="/product?p=s1" class="ani product-box" swiper-animate-effect="fadeInUp"
                                     swiper-animate-duration="0.5s" swiper-animate-delay="0.2s">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product1.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(6)}}</h3>
                                        <!-- <p class="intro">{{text(7)}}</p> -->
                                    </div>
                                </a>

                                <a href="/product?p=s2" class="ani product-box" swiper-animate-effect="fadeInUp"
                                     swiper-animate-duration="0.5s" swiper-animate-delay="0.3s">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product2.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(8)}}</h3>
                                        <!-- <p class="intro">{{text(9)}}</p> -->
                                    </div>
                                </a>

                                <a href="/product?p=s3" class="ani product-box" swiper-animate-effect="fadeInUp"
                                     swiper-animate-duration="0.5s" swiper-animate-delay="0.4s">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product3.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(10)}}</h3>
                                        <!-- <p class="intro">{{text(11)}}</p> -->
                                    </div>
                                </a>

                                <a href="/product?p=s4" class="ani product-box" swiper-animate-effect="fadeInUp"
                                     swiper-animate-duration="0.5s" swiper-animate-delay="0.5s">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product4.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(12)}}</h3>
                                       <!--  <p class="intro">{{text(13)}}</p> -->
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="/product?p=s5" class="product-box">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product5.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(14)}}</h3>
                                        <!-- <p class="intro">{{text(15)}}</p> -->
                                    </div>
                                </a>


                                <a href="/product?p=s6" class="product-box">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product6.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(16)}}</h3>
                                        <!-- <p class="intro">{{text(17)}}</p> -->
                                    </div>
                                </a>


                                <a href="/product?p=s7" class="product-box">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product7.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(18)}}</h3>
                                        <!-- <p class="intro">{{text(19)}}</p> -->
                                    </div>
                                </a>


                                <a href="/product?p=s8" class="product-box">
                                    <div class="pic-box">
                                        <img class="pic" src="/static/images/product8.jpg">
                                        <div class="inner-box">
                                            <div class="border"></div>
                                            <i class="icon icon-find"></i>
                                        </div>
                                    </div>
                                    <div class="txt-box">
                                        <h3 class="title">{{text(20)}}</h3>
                                        <!-- <p class="intro">{{text(21)}}</p> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide s3">
                <div class="col col-50 left-banner"></div>
                <div class="col col-50 right-banner">
                    <div class="content ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.2s">
                        <h2 class="c-title">{{text(22)}}</h2>
                        <p class="c-intro" v-if="lang !== 'en'">About Hung Shang</p>
                        <div class="line"></div>
                        <div class="about">
                            {{text(23)}}
                            <a href="/about" class="c-btn btn-more">MORE</a>
                        </div>
                    </div>
                </div>
                <div class="cb"></div>
            </div>
            <div class="swiper-slide s4">
                <div class="col col-25 num-item1">
                    <div class="center ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.2s">
                        <i class="icon icon-num1"></i>
                        <p class="title">{{text(24)}}</p>
                    </div>
                </div>
                <div class="col col-25 num-item2">
                    <div class="center ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.3s">
                        <i class="icon icon-num2"></i>
                        <p class="title">{{text(25)}}</p>
                    </div>
                </div>
                <div class="col col-25 num-item3">
                    <div class="center ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.4s">
                        <i class="icon icon-num3"></i>
                        <p class="title">{{text(26)}}</p>
                    </div>
                </div>
                <div class="col col-25 num-item4">
                    <div class="center ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.5s">
                        <i class="icon icon-num4"></i>
                        <p class="title">{{text(27)}}</p>
                    </div>
                </div>
                <div class="cb"></div>
                <div class="more-wrapper ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s"
                     swiper-animate-delay="0.8s">
                    <a href="/about" class="c-btn btn-more">MORE</a>
                    <p class="intro">{{text(28)}}</p>
                </div>

            </div>
            <div class="swiper-slide s5">
                <div class="customers">
                    <div class="container">
                        <div class="title-box">
                            <div class="fl">
                                <h2 class="c-title">{{text(22)}}</h2>
                                <p class="c-intro">About Hung Shang</p>
                            </div>
                            <div class="fr">
                                <span class="w-btn active" id="food">{{text(29)}}</span><span class="w-btn" id="tech">{{text(30)}}</span>
                            </div>
                            <div class="cb"></div>
                        </div>

                        <div class="swiper-box">
                            <div class="swiper-container h-swiper customer-swiper cs1">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo1.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo2.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo3.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo4.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo5.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo6.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo7.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo8.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo9.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo10.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo11.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo12.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo13.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/food/logo14.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>

                            <div class="swiper-container h-swiper customer-swiper cs2">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo1.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo2.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo3.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo4.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo5.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo6.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo7.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo8.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo9.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo10.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo11.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo12.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo13.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo14.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo15.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo16.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo17.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo18.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo19.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo20.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo21.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo22.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo23.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo24.png">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="cus-box">
                                            <img class="logo" src="/static/images/tech/logo25.png">
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <index-footer></index-footer>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div v-html="script"></div>
</div>
</template>

<script>
import indexFooter from '@/components/pc/indexFooter.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'index',
  components: {
    indexFooter,
  },
  mixins: [mixin],
  data () {
    return {
        data: [],
        script: `\<script src="/static/js/inject/index.js"\><\/script\>`,
    }
  },
  created() {
    this.fetch('data', '首页');
  },
  methods: {
    text(index) {
        return this.data[index] ? this.data[index][this.lang] : null;
    },
}
}
</script>

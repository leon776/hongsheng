<template>
<div class="main index-main">
    <div class="swiper-container fullscreen-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide s1">
                <img src="/static/images/index-banner.jpg" class="full-bg">
                <div class="ani center-box" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.5s"
                     swiper-animate-delay="0.3s">
                    <h2 class="title"><span class="title-num">1984</span>年至今</h2>
                    <p class="intro">坚持<span class="point"></span>品质<span class="point"></span>卓越</p>
                    <i class="icon icon-circle-arrow-down" onclick="slideNextPage()"></i>
                </div>
            </div>
            <div class="swiper-slide s2">
                <div class="container">
                    <div class="title-box">
                        <h2 class="c-title">产品及服务</h2>
                        <p class="c-intro">Products & Services</p>
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
                                        <h3 class="title">电子产品、标签、烘培能力</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                                        <h3 class="title">产品线</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                                        <h3 class="title">线束装配及印刷电路板组件</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                                        <h3 class="title">纸张切割</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                                        <h3 class="title">原始设计制造商及项目早期介入</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                                        <h3 class="title">售后服务</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                                        <h3 class="title">供应链管理</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                                        <h3 class="title">烘培及甜点</h3>
                                        <p class="intro">这是一段简述，目前采用占位文案代替</p>
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
                        <h2 class="c-title">关于鸿昇</h2>
                        <p class="c-intro">About Hung Shang</p>
                        <div class="line"></div>
                        <div class="about">
                            1984年，鸿昇集团在香港成立。我们致力于电子、制造、消费、实业以及烘焙和甜点行业。作为公认的连通及线束行业先锋，鸿昇集团提供最全面的服务以及最具竞争力的价格。鸿昇集团的产品以其质量、扩展性、易用性以及创新型技术而广受欢迎。我们仔细聆听客户心声并与其密切合作确保提供上乘的产品和服务满足其需求。
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
                        <p class="title">诚信厂商</p>
                    </div>
                </div>
                <div class="col col-25 num-item2">
                    <div class="center ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.3s">
                        <i class="icon icon-num2"></i>
                        <p class="title">供应国家和地区</p>
                    </div>
                </div>
                <div class="col col-25 num-item3">
                    <div class="center ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.4s">
                        <i class="icon icon-num3"></i>
                        <p class="title">成功企业选择</p>
                    </div>
                </div>
                <div class="col col-25 num-item4">
                    <div class="center ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.5s">
                        <i class="icon icon-num4"></i>
                        <p class="title">出货总量</p>
                    </div>
                </div>
                <div class="cb"></div>
                <div class="more-wrapper ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s"
                     swiper-animate-delay="0.8s">
                    <a href="/about" class="c-btn btn-more">MORE</a>
                    <p class="intro">更深入的了解我们</p>
                </div>

            </div>
            <div class="swiper-slide s5">
                <div class="customers">
                    <div class="container">
                        <div class="title-box">
                            <div class="fl">
                                <h2 class="c-title">关于鸿昇</h2>
                                <p class="c-intro">About Hung Shang</p>
                            </div>
                            <div class="fr">
                                <span class="w-btn active" id="food">食品、饮料类</span><span class="w-btn" id="tech">电子、线束加工类</span>
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
    <template v-html="script"></template>
</div>
</template>

<script>
import indexFooter from '@/components/indexFooter.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'index',
  components: {
    indexFooter,
  },
  mixins: [mixin],
  data () {
    return {
      script: `\<script src="/static/js/inject/index.js"\><\/script\>`,
    }
  },
  created() {
    // console.log(this.$ssrContext)
  },
}
</script>

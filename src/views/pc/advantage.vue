<template>
<div class="main advantage-main">
    <div class="swiper-container fullscreen-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide s1">
                <img src="/static/images/adv1.jpg" class="full-bg">
                <div class="container">
                    <div class="page-guide">
                        {{head(25)}}：<a href="/">{{head(0)}}</a><em class="song"> &gt; </em><a href="javascript:">{{head(3)}}</a>
                    </div>
                    <div class="clearfix">
                        <div class="fl">
                            <a href="/about" class="w-btn">{{head(2)}}</a><a href="/advantage" class="w-btn active">{{head(3)}}</a>
                        </div>
                    </div>
                    <div class="main-box">
                        <div class="l-wrapper ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                            <h2 class="l-title">{{advantage(0)}}</h2>
                            <p class="l-intro">{{advantage(1)}}</p>
                        </div>
                        <div class="adv-list">
                            <div class="adv-item ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="0.4s">
                                <div class="inner">
                                    <i class="icon icon-adv1"></i>
                                    <p>{{advantage(2)}}</p>
                                </div>
                            </div>
                            <div class="adv-item ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="0.6s">
                                <div class="inner">
                                    <i class="icon icon-adv2"></i>
                                    <p>{{advantage(3)}}</p>
                                </div>
                            </div>
                            <div class="adv-item ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="0.8s">
                                <div class="inner">
                                    <i class="icon icon-adv3"></i>
                                    <p>{{advantage(4)}}</p>
                                </div>
                            </div>
                            <div class="adv-item ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="1s">
                                <div class="inner">
                                    <i class="icon icon-adv4"></i>
                                    <p>{{advantage(5)}}</p>
                                </div>
                            </div>
                            <div class="adv-item ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="1.2s">
                                <div class="inner">
                                    <i class="icon icon-adv5"></i>
                                    <p>{{advantage(6)}}</p>
                                </div>
                            </div>
                            <div class="adv-item ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="1.4s">
                                <div class="inner">
                                    <i class="icon icon-adv6"></i>
                                    <p>{{advantage(7)}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide s2">
                <img class="bg ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.4s" swiper-animate-delay="0.5s" src="/static/images/adv2.png">
                <div class="container">

                    <div class="l-wrapper ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                        <h2 class="l-title">{{advantage(8)}}</h2>
                        <p class="l-intro">{{advantage(9)}}</p>
                    </div>
                </div>
            </div>
            <div class="swiper-slide s3">
                <div class="container">
                    <div class="l-wrapper ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                        <h2 class="l-title">{{advantage(10)}}</h2>
                        <p class="l-intro">{{advantage(11)}}</p>
                    </div>
                    <div class="row pic-row">
                        <div class="col">
                            <div class="inner ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="0.4s" swiper-animate-delay="0.5s">
                                <div class="pic-box">
                                    <img class="pic" src="/static/images/adv3.jpg">
                                </div>
                                <div class="txt">
                                    {{advantage(12)}}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="inner ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="0.4s" swiper-animate-delay="0.8s">
                                <div class="pic-box">
                                    <img class="pic" src="/static/images/adv3-2.jpg">
                                </div>
                                <div class="txt">
                                    {{advantage(13)}}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="inner ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="0.4s" swiper-animate-delay="1s">
                                <div class="pic-box">
                                    <img class="pic" src="/static/images/adv3-3.jpg">
                                </div>
                                <div class="txt">
                                    {{advantage(14)}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide s4">
                <div class="container">
                    <div class="l-wrapper ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                        <h2 class="l-title">{{advantage(15)}}</h2>
                        <p class="l-intro">{{advantage(16)}}</p>
                    </div>
                    <div class="book-box ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="0.6s">
                        <i class="icon icon-left-circle prev"></i>
                        <i class="icon icon-right-circle next"></i>
                        <div class="swiper-container h-swiper book-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item,index) in certificate">
                                    <a class="inner" :href="item.url" target="_blank">
                                        <div class="title">{{item.title}}</div>
                                        <div class="img-box">
                                            <img class="img" :src="'/static/images/certificate/certificate'+(index+1)+'.jpg'" v-if="index === 0">
                                            <img class="img" :src="'/static/images/certificate/certificate'+(index+1)+'.png'" v-else>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>

                </div>

                <v-footer></v-footer>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <template v-html="script"></template>
</div>
</template>

<script>
import vFooter from '@/components/pc/footer.vue';
import mixin from '@/mixins/mixin';

export default {
    name: 'advantage',
    components: {
        vFooter,
    },
    mixins: [mixin],
    data () {
        return {
            headData: [],
            body: [],
            certificate: {},
            script: `\<script src="/static/js/inject/advantage.js"\><\/script\>`,
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
        }
    },
    created() {
        this.fetch('certificate', '认证证书', this.dataIndex);
        this.fetch('body', '我们的优势');
    },
    methods: {
        advantage(index) {
            return this.body[index][this.lang];
        },
    }
}
</script>
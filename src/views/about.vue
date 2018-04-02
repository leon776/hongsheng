<template>
<div class="main about-main">
    <div class="swiper-container fullscreen-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide s1">
                <img src="/static/images/about-bg.jpg" class="full-bg">
                <div class="container">
                    <div class="page-guide">
                        {{head(25)}}：<a href="/">{{head(0)}}</a><em class="song"> &gt; </em><a href="javascript:">{{head(2)}}</a>
                    </div>
                    <div class="clearfix">
                        <div class="fl">
                            <a href="/about" class="w-btn active">{{head(2)}}</a><a href="/advantage" class="w-btn">{{head(3)}}</a>
                        </div>
                        <div class="fr card-wapper">
                            <div class="card ani"  swiper-animate-effect="fadeInRight" swiper-animate-duration="0.6s" swiper-animate-delay="0.2s">
                                <h2 class="c-title">{{about(0)}}</h2>
                                <p class="c-intro">{{about(1)}}</p>
                                <p class="time"><span class="num">{{about(2)}}</span>{{about(3)}}</p>
                                <div class="content">
                                    {{about(4)}}
                                </div>
                                <img src="/static/images/about-logo.png" class="logo-img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide s2">
                <div class="container">
                    <div class="title-box ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                        <h2 class="title">{{about(5)}}</h2>
                        <p class="intro">{{about(6)}}</p>
                    </div>
                    <div class="main-box ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="0.6s">
                        <i class="icon icon-right-circle next"></i>
                        <i class="icon icon-left-circle prev"></i>
                        <div class="swiper-container time-swiper">
                            <div class="swiper-wrapper">
                                <div class="line">
                                    <i class="icon icon-t-left"></i>
                                    <i class="icon icon-t-right"></i>
                                </div>
                                <div class="swiper-slide" v-for="(item,index) in historyList" :onclick="'showModal('+ JSON.stringify(item) +', \''+ '/static/images/about/history'+ (index + 1) +'.jpg' +'\')'">
                                    <i class="icon icon-time-dot"></i>
                                    <div class="time-box">
                                        <div class="year">{{item.title}}</div>
                                        <p class="intro">{{item.content}}</p>
                                        <div class="triangle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="swiper-slide s3">
                <div class="col left">
                    <div class="organization ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                        <h2 class="title">{{about(7)}}</h2>
                        <p class="intro">{{about(8)}}</p>
                    </div>
                </div>
                <div class="col right">
                    <img class="img ani"  swiper-animate-effect="fadeInRight" swiper-animate-duration="0.4s" swiper-animate-delay="0.4s" src="/static/images/about4.png">
                </div>
            </div>
            <div class="swiper-slide s4">
                <div class="swiper-container h-swiper people-swiper ani"  swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in team">
                            <div class="container">
                                <div class="info">
                                    <div class="pic-box">
                                        <img class="people-pic" :src="'/static/images/about-team'+(index+1)+'.jpg'">
                                    </div>
                                    <div class="content">
                                        <div class="c-title">{{item.name}}</div>
                                        <p class="c-intro">{{item.position}}</p>
                                        <div class="txt" v-html="item.intro"></div>
                                    </div>
                                    <div class="cb"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <i class="icon icon-left-circle prev"></i>
                    <i class="icon icon-right-circle next"></i>
                </div>
                <v-footer></v-footer>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div id="modal" class="c-modal" style="display: none;">
        <div class="clearfix inner">
            <div class="img-box">
                <img src="" class="modal-pic" id="modalPic">
            </div>
            <div class="content-box">
                <div class="title" id="modalTitle"></div>
                <div id="modalContent"></div>
                <!--<div style="margin-top:12px;">-->
                    <!--<span id="modalProk"></span>: <span id="modalProv"></span>-->
                <!--</div>-->
                <!--<p><a id="modalHref" href="#" target="_blank"></a></p>-->
            </div>
        </div>
    </div>
    <template v-html="script"></template>
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
            headData: [],
            body: [],
            historyList: {},
            team: {},
            script: `
                \<script src="/static/js/layer/layer.js"\><\/script\>
                \<script src="/static/js/inject/product.js"\><\/script\>
                \<script src="/static/js/inject/about.js"\><\/script\>
            `,
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
        this.historyList = this.fetch('集团历史', this.dataIndex);
        this.historyList.forEach((v, k) => {
            this.historyList[k].content = this.historyList[k].content.replace(/[\n\r\t]/g, '<br />');
        });

        this.team = this.fetch('团队', this.dataIndex);
        this.team.forEach((v, k) => {
            this.team[k].intro = this.team[k].intro.replace(/[\n\r\t]/g, '<br />');
        });

        this.body = this.fetch('关于鸿昇');
    },
    methods: {
        about(index) {
            return this.body[index][this.lang];
        },
    }
}
</script>
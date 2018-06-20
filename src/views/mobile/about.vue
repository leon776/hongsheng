<template>
<div class="main about-main">
    <ul class="sub-nav">
        <li><a href="javascript:" class="sub-nav-a">{{head(2)}}</a></li>
        <li><a href="/advantage" class="sub-nav-a">{{head(3)}}</a></li>
        <i class="icon sub-nav-icon"></i>
    </ul>
    <div class="swiper-container fullscreen-swiper">
        <div class="swiper-wrapper">

            <div class="swiper-slide s1">
                <img src="/mobile/static/images/about-bg.jpg" class="full-bg">
                <div class="container">
                    <div class="card-wapper">
                        <div class="card ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.6s"
                             swiper-animate-delay="0.2s">
                            <h2 class="c-title">{{head(2)}}</h2>
                            <p class="c-intro">{{head(3)}}</p>
                            <div class="content">
                                {{about(4)}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide s2">
                <div class="container">
                    <div class="title-box ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.2s">
                        <h2 class="title">{{about(5)}}</h2>
                        <p class="intro">{{about(6)}}</p>
                    </div>
                    <div class="main-box ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.6s">
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
                            <div class="swiper-pagination"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="swiper-slide s3">
                <div class="container">
                    <h2 class="title">{{about(7)}}</h2>
                    <p class="intro">{{about(8)}}</p>
                    <img class="img ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.4s"
                         swiper-animate-delay="0.4s" src="/mobile/static/images/about4.png">
                </div>
            </div>

            <div class="swiper-slide s4">
                <div class="swiper-container h-swiper people-swiper ani" swiper-animate-effect="fadeIn"
                     swiper-animate-duration="0.4s" swiper-animate-delay="0.2s">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in team">
                            <div class="pic-box">
                                <img class="people-pic" :src="'/static/images/about-team'+(index+1)+'.jpg'">
                            </div>
                            <div class="content">
                                <div class="c-title">{{item.name}}</div>
                                <p class="c-intro">{{item.position}}</p>
                                <div class="txt" v-html="item.intro"></div>
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
    <div v-html="script"></div>
</div>
</template>

<script>
import vFooter from '@/components/pc/footer.vue';
import mixin from '@/mixins/mixin';

export default {
    name: 'about',
    components: {
        vFooter,
    },
    mixins: [mixin],
    data () {
        return {
            headData: [],
            body: [],
            historyList: {},
            team: {},
            script: `
                \<script src="/mobile/static/js/inject/about.js"\><\/script\>
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
        try{
            this.fetch('historyList', '集团历史', this.dataIndex);
            this.fetch('body', '关于鸿昇');
            this.fetch('team', '团队', this.dataIndex);
            this.historyList.forEach((v, k) => {
                this.historyList[k].content = this.historyList[k].content.replace(/[\n\r\t]/g, '<br />');
            });
            this.team.forEach((v, k) => {
                this.team[k].intro = this.team[k].intro.replace(/[\n\r\t]/g, '<br />');
            });
        } catch(e) {

        }
    },
    methods: {
        about(index) {
            return this.body[index] ? this.body[index][this.lang] : '';
        },
    }
}
</script>
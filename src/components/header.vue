<template>
<header class="nav">
    <div class="clearfix container">
        <a class="logo" href="index.html">
            <img src="/static/images/logo.png" alt="">
        </a>

        <div class="fr">
            <ul class="clearfix nav-list">
                <li class="nav-master" :class="{'current' : current === 'index'}">
                    <a href="/" class="tab-a">
                        <span class="title">{{data[0][lang]}}</span>
                        <span class="line l0"></span>
                    </a>
                </li>
                <li class="nav-master" :class="{'current' : current === 'about'}">
                    <a href="javascript:" class="tab-a">
                        <span class="title">{{data[1][lang]}}<i class="icon icon-arrow"></i></span>
                        <span class="line l1"></span>
                    </a>
                    <ul class="sub-tab st1">
                        <li><a href="/about" class="sub-tab-a">{{data[2][lang]}}</a></li>
                        <li><a href="/advantage" class="sub-tab-a">{{data[3][lang]}}</a></li>
                    </ul>
                </li>
                <li class="nav-master" :class="{'current' : current === 'product'}">
                    <a href="javascript:" class="tab-a">
                        <span class="title">{{data[4][lang]}}<i class="icon icon-arrow"></i></span>
                        <span class="line l2"></span>
                    </a>
                    <ul class="sub-tab st2">
                        <li><a href="/product?p=s1" class="sub-tab-a">{{data[5][lang]}}</a></li>
                        <li><a href="/product?p=s2" class="sub-tab-a">{{data[6][lang]}}</a></li>
                        <li><a href="/product?p=s3" class="sub-tab-a">{{data[7][lang]}}</a></li>
                        <li><a href="/product?p=s4" class="sub-tab-a">{{data[8][lang]}}</a></li>
                        <li><a href="/product?p=s5" class="sub-tab-a">{{data[9][lang]}}</a></li>
                        <li><a href="/product?p=s6" class="sub-tab-a">{{data[10][lang]}}</a></li>
                        <li><a href="/product?p=s7" class="sub-tab-a">{{data[11][lang]}}</a></li>
                        <li><a href="/product?p=s8" class="sub-tab-a">{{data[12][lang]}}</a></li>
                    </ul>
                </li>
                <li class="nav-master" :class="{'current' : current === 'customer'}">
                    <a href="javascript:" class="tab-a">
                        <span class="title">{{data[13][lang]}}<i class="icon icon-arrow"></i></span>
                        <span class="line l3"></span>
                    </a>
                    <ul class="sub-tab st3">
                        <li><a href="/customer?p=s1" class="sub-tab-a">{{data[14][lang]}}</a></li>
                        <li><a href="/customer?p=s2" class="sub-tab-a">{{data[15][lang]}}</a></li>
                        <li><a href="/customer?p=s3" class="sub-tab-a">{{data[16][lang]}}</a></li>
                    </ul>
                </li>
                <li class="nav-master" :class="{'current' : current === 'work'}">
                    <a href="javascript:" class="tab-a">
                        <span class="title">{{data[17][lang]}}<i class="icon icon-arrow"></i></span>
                        <span class="line l4"></span>
                    </a>
                    <ul class="sub-tab st4">
                        <li><a href="/work?p=s1" class="sub-tab-a">{{data[18][lang]}}</a></li>
                        <li><a href="/work?p=s2" class="sub-tab-a">{{data[19][lang]}}</a></li>
                        <li><a href="/work?p=s3" class="sub-tab-a">{{data[20][lang]}}</a></li>
                    </ul>
                </li>
                <li class="nav-master" :class="{'current' : current === 'contact'}">
                    <a href="javascript:" class="tab-a">
                        <span class="title">{{data[21][lang]}}<i class="icon icon-arrow"></i></span>
                        <span class="line l5"></span>
                    </a>
                    <ul class="sub-tab st5">
                        <li><a href="/contact?p=s1" class="sub-tab-a">{{data[22][lang]}}</a></li>
                        <li><a href="/contact?p=s2" class="sub-tab-a">{{data[23][lang]}}</a></li>
                        <li><a href="/contact?p=s3" class="sub-tab-a">{{data[24][lang]}}</a></li>
                    </ul>
                </li>
            </ul>
        </div>
            
        <div class="lang-box" style="right:100px;">
            <a :href="data[27][lang]" class="lang-title" target="_blank">{{data[26][lang]}}</a>
        </div>
        <div id="langBox" class="lang-box" :class="{
            'cur-zh': lang === 'zh',
            'cur-hk': lang === 'hk',
            'cur-en': lang === 'en',
        }">
            <div class="lang-title">
                <span class="t-item zh"><i class="icon icon-zh lang"></i>简体<i class="icon lang-toggle"></i></span>
                <span class="t-item hk"><i class="icon icon-hk lang"></i>繁体<i class="icon lang-toggle"></i></span>
                <span class="t-item en"><i class="icon icon-us lang"></i>En<i class="icon lang-toggle"></i></span>
            </div>
            <div class="lang-li">
                <div class="item zh" data-lang='zh'><i class="icon icon-zh lang"></i>简体<i class="icon icon-gou"></i></div>
                <div class="item hk" data-lang='hk'><i class="icon icon-hk lang"></i>繁体<i class="icon icon-gou"></i></div>
                <div class="item en" data-lang='en'><i class="icon icon-us lang"></i>English<i class="icon icon-gou"></i></div>
            </div>
        </div>
    </div>
</header>
</template>
<script>
import mixin from '@/mixins/mixin';

export default{
    data() {
        return {
            data: [],
            lang: this.$ssrContext.lang,
            current: '',
        };
    },
    mixins: [mixin],
    created() {
        this.data = this.fetch('导航');
        this.current = this.$route.meta.active || '';
    },
}
</script>

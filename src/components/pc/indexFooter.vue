<template>
<div class="footer">
    <div class="container">
        <div class="logo-box">
            <img class="logo" src="/static/images/foot-logo.png">
        </div>
        <div class="row foot-nav">
            <div class="col col-20">
                <dl class="nav-dl">
                    <dt>{{text(1)}}</dt>
                    <dd><a href="/about" class="nav-a">{{text(2)}}</a></dd>
                    <dd><a href="/advantage" class="nav-a">{{text(3)}}</a></dd>
                </dl>
            </div>
            <div class="col col-20">
                <dl class="nav-dl">
                    <dt>{{text(4)}}</dt>
                    <dd><a href="/product?p=s1" class="nav-a">{{text(5)}}</a></dd>
                    <dd><a href="/product?p=s2" class="nav-a">{{text(6)}}</a></dd>
                    <dd><a href="/product?p=s3" class="nav-a">{{text(7)}}</a></dd>
                    <dd><a href="/product?p=s4" class="nav-a">{{text(8)}}</a></dd>
                    <dd><a href="/product?p=s5" class="nav-a">{{text(9)}}</a></dd>
                    <dd><a href="/product?p=s6" class="nav-a">{{text(10)}}</a></dd>
                    <dd><a href="/product?p=s7" class="nav-a">{{text(11)}}</a></dd>
                    <dd><a href="/product?p=s8" class="nav-a">{{text(12)}}</a></dd>
                </dl>
            </div>
            <div class="col col-20">
                <dl class="nav-dl">
                    <dt>{{text(13)}}</dt>
                    <dd><a href="/customer?p=s1" class="nav-a">{{text(14)}}</a></dd>
                    <dd><a href="/customer?p=s2" class="nav-a">{{text(15)}}</a></dd>
                    <dd><a href="/customer?p=s3" class="nav-a">{{text(16)}}</a></dd>
                </dl>
            </div>
            <div class="col col-20">
                <dl class="nav-dl">
                    <dt>{{text(17)}}</dt>
                    <dd><a href="/work?p=s1" class="nav-a">{{text(18)}}</a></dd>
                    <dd><a href="/work?p=s2" class="nav-a">{{text(19)}}</a></dd>
                    <dd><a href="/work?p=s3" class="nav-a">{{text(20)}}</a></dd>
                </dl>
            </div>
            <div class="col col-20">
                <dl class="nav-dl">
                    <dt>{{text(21)}}</dt>
                    <dd><a href="/contact?p=s1" class="nav-a">{{text(22)}}</a></dd>
                    <dd><a href="/contact?p=s2" class="nav-a">{{text(23)}}</a></dd>
                    <dd><a href="/contact?p=s3" class="nav-a">{{text(24)}}</a></dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="foot-border">
        Copyright ©2018 Hong Kong Hung Shang Electric Limited.
    </div>
</div>
</template>
<script>
import mixin from '@/mixins/mixin';

export default{
    data() {
        return {
            data: [],
            current: '',
        };
    },
    computed: {
        
    },
    mixins: [mixin],
    created() {
        this.current = this.$route.meta.active || '';
    },
    methods: {
        text(index) {
            return this.headData[index] ? this.headData[index][this.lang] : null;
        },
    }
}
</script>
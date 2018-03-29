<template>
<div class="main product-main">
    <div class="page-banner">
        <div class="container">
            <div class="title-box">
                <h2 class="c-title">产品及服务</h2>
                <p class="c-intro">Products & Services</p>
                <div class="line"></div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="left-bar">
            <a href="javascript:" data-target="#s1" class="w-btn active">电子产品、标签、烘焙能力</a>
            <a href="javascript:" data-target="#s2" class="w-btn">产品线</a>
            <a href="javascript:" data-target="#s3" class="w-btn">线束装配和印刷电路板组件</a>
            <a href="javascript:" data-target="#s4" class="w-btn">纸张切割</a>
            <a href="javascript:" data-target="#s5" class="w-btn">原始设计制造商及项目早期介入</a>
            <a href="javascript:" data-target="#s6" class="w-btn">售后服务</a>
            <a href="javascript:" data-target="#s7" class="w-btn">供应链管理</a>
            <a href="javascript:" data-target="#s8" class="w-btn">烘培和甜点</a>
        </div>
        <div class="right-main-wrapper">
            <div class="page-guide">
                您的位置：<a href="index.html">首页</a><em class="song"> &gt; </em><a href="product.html" class="cur">产品及服务</a>
            </div>
            <div class="tab-content-list">
                <s1></s1>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import vFooter from '@/components/footer.vue';
import s1 from '@/components/product/s1.vue';
import mixin from '@/mixins/mixin';

export default {
    name: 'about',
    components: {
        vFooter,
        s1,
    },
    mixins: [mixin],
    data () {
        return {
            lang: this.$ssrContext.lang,
            head: [],
            body: [],
            script: `\<script src="/static/js/inject/product.js"\><\/script\>`,
        }
    },
    created() {
        this.head = this.fetch('lang', 0);
        this.body = this.fetch('lang', 1);
        // console.log(this.$ssrContext)
    },
}
</script>
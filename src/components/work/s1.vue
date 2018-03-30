<template>
<div class="content-item ct1 current">
    <div class="c-title">{{text(0)}}<span class="intro">*{{text(1)}}</span></div>
    <br>
    <p>{{text(2)}}</p>
    <div class="clearfix dl-list">
        <dl class="fl">
            <dd>{{text(3)}}</dd>
            <dd>{{text(4)}}</dd>
            <dd>{{text(5)}}</dd>
            <dd>{{text(6)}}</dd>
        </dl>
        <dl class="fl">
            <dd>{{text(7)}}</dd>
            <dd>{{text(8)}}</dd>
            <dd>{{text(9)}}</dd>
            <dd>{{text(10)}}</dd>
        </dl>
    </div>
</div>
</template>
<script>
import mixin from '@/mixins/mixin';

export default {
    data() {
        return {
            data: [],
            lang: this.$ssrContext.lang,
            current: '',
        };
    },
    computed: {
        
    },
    mixins: [mixin],
    created() {
        this.data = this.fetch('为什么选择鸿升');
        this.current = this.$route.meta.active || '';
    },
    methods: {
        text(index) {
            return this.data[index][this.lang];
        },
    }
}
</script>
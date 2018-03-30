<template>
<div class="content-item ct3 current">
<div class="row card-row">
    <div class="col col-33" v-for="item in data">
        <div class="info-box">
            <div class="title">
                {{item.title}}
            </div>
            <p class="i-p">{{item.name}}</p>
            <p class="i-p"><span class="c-gray">{{item.addressKey}}：</span>{{item.addressVal}}</p>
            <p class="i-p"><span class="c-gray">{{item.emailKey}}：</span><a :href="'mailto:' + item.emailVal" class="c-blue">{{item.emailVal}}</a></p>
        </div>
    </div>
</div>
</div>
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
        },
    },
    mixins: [mixin],
    created() {
        this.data = this.fetch('人力资源联络窗口', this.dataIndex);
    },
}
</script>
<template>
<div class="content-item ct2 current">
    <div class="row work-row" id="works">
        <div class="col" v-for="(item, index) in data">
            <a :href="'/workDetail?q=' + index" class="info-box">
                <div class="title">
                    {{item.title}}
                </div>
                <p class="i-t">{{item.name}}</p>
                <p class="i-p"><span class="c-gray">{{item.addressKey}}：</span>{{item.addressVal}}</p>
                <p class="i-p" v-if="item.dateVal"><span class="c-gray">{{item.dateKey}}：</span>{{item.dateVal}}</p>
            </a>
        </div>
    </div>
    <div class="pagination"></div>
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
        this.fetch('data', '工作机会', this.dataIndex);
    },
}
</script>
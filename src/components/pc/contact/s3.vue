<template>
    <div class="content-item ct1 current">
        <div class="row card-row">
            <div class="col col-33" v-for="(item,index) in data">
                <div class="info-box">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="intro">{{item.intro}}</div>
                    <p class="i-t"><span class="c-gray">{{item.addressKey}}：</span>{{item.addressVal}}</p>
                    <p class="i-p"><span class="c-gray">{{item.phoneKey}}：</span>{{item.phoneVal}}</p>
                    <p class="i-p"><span class="c-gray">{{item.faxKey}}：</span>{{item.faxVal}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import mixin from '@/mixins/mixin';
    export default {
        data() {
            return {
                data: [],
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
            }
        },
        mixins: [mixin],
        created() {
            this.fetch('data', '仓库', this.dataIndex);
        },
        methods: {

        }
    }
</script>
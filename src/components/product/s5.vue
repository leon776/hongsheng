<template>
<div class="content-item ct5 current">
    <p>{{base(42)}}</p>

    <div class="card-wrapper">
        <div class="row">
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-1.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">深圳和而泰智能控制</div>
                        <div class="fr intro">Home Appliance</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-2.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">海能达通讯集团有限公司</div>
                        <div class="fr intro">Communication</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-3.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">大疆创新科技</div>
                        <div class="fr intro">UAV</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-4.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">亿航</div>
                        <div class="fr intro">UAV</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-5.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">极飞科技</div>
                        <div class="fr intro">UAV</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-6.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">道通智能科技</div>
                        <div class="fr intro">UAV</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-7.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">深圳飞马机器人有限公司</div>
                        <div class="fr intro">UAV</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-8.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">海康威视数码技术</div>
                        <div class="fr intro">Security & Surveillance</div>
                    </div>
                </div>
            </div>
            <div class="col col-33">
                <div class="c-card2">
                    <div class="pic-box">
                        <img src="/static/images/pd2-9.jpg" class="img">
                    </div>
                    <div class="clearfix txt-box">
                        <div class="fl title">比亚迪汽车有限公司</div>
                        <div class="fr intro">Automotive</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  props:['baseData', 'lang'],
  methods: {
    base(index) {
      return this.baseData[index][this.lang];
    },
  }
}
</script>
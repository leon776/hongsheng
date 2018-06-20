<template>
<div class="content-item ct6 current">
    <div class="c-card4">
        <div class="pic-box">
            <img class="pic" src="/mobile/static/images/ps6-1.jpg">
        </div>
        <div class="content">
            {{base(43)}}
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
<template>
<div class="content-item ct8 current">
    <p>{{base(45)}} </p>
    <div class="row pic-row">
        <div class="col col-50">
            <img src="/mobile/static/images/ps8-1.jpg">
        </div>
        <div class="col col-50">
            <img src="/mobile/static/images/ps8-2.jpg">
        </div>
        <div class="cb"></div>
    </div>
    <p>
        {{base(46)}}
    </p>
    <p>
        {{base(47)}}
    </p>
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
<template>
<div class="content-item ct7 current">
    <p>{{base(44)}}</p>
    <div class="text-center">
        <img src="/static/images/ps7-1.jpg">
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
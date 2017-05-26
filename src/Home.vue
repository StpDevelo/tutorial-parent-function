<template>
  <div class="title" @click="handler">
    Hello Home
  </div>
</template>

<script>
export default {
  methods: {
    handler() {
      this.$parent.handlerParent()
    }
  }
}
</script>

<style scoped>
.title {
  margin-top: 10%;
  font-size: 34px;
  text-align: center;
}
.title:hover {
  cursor: pointer;
  color: rebeccapurple;
}
</style>


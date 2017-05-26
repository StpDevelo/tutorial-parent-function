<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handlerParent() {
      alert(`It's Me Parent`)
    }
  }
}
</script>

<style>
</style>

<template>
  <div id="auth-layout">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: "AuthLayout",
  }
</script>

<style lang="scss" scoped>
  #auth-layout{
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>

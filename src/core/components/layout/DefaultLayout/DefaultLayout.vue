<template>
  <div id="default-layout">
    <Navbar/>
    <div id="menu-content-wrapper">
      <Menu/>
      <div id="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './../../navbar/Navbar';
  import Menu from "./../../menu/Menu";

  /**
   * @author Saiat Kalbiev <kalbievich11@gmail.com>
   */
  export default {
    name: "DefaultLayout",
    components: {
      Menu,
      Navbar,
    }
  }
</script>

<style lang="scss" scoped>

</style>

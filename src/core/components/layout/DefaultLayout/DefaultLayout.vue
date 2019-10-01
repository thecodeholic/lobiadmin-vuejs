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
  @import "./../../../scss/variables";

  #default-layout {
    height: $default-layout-height;
    display: flex;
    flex-direction: column;

    #menu-content-wrapper {
      display: flex;
      flex: 1;
      overflow: hidden;

      #content{
        flex: 1;
        overflow: auto;
      }
    }
  }
</style>

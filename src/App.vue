<template>
  <div id="app">
    <router-view/>
  </div>
  <!--  <div id="app" :class="{'menu-hidden': !menuOpened, 'menu-collapsed': menuCollapsed}">-->
  <!--    <navbar></navbar>-->
  <!--    <sidebar />-->
  <!--    <div id="main">-->
  <!--      <div id="ribbon" class="hidden-print">-->
  <!--        <a href="#dashboard" class="btn-ribbon" data-container="#main" data-toggle="tooltip"-->
  <!--           data-title="Show dashboard"><i-->
  <!--                class="fa fa-home"></i></a>-->
  <!--        <span class="vertical-devider">&nbsp;</span>-->
  <!--        <button class="btn-ribbon" data-container="#main" data-action="reload" data-toggle="tooltip"-->
  <!--                data-title="Reload content by ajax"><i class="fa fa-refresh"></i></button>-->
  <!--        <ol class="breadcrumb">-->
  <!--        </ol>-->
  <!--      </div>-->
  <!--      <div id="content">-->
  <!--        <router-view/>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
  import {eventBus} from './core/services/event-bus'

  export default {
    name: 'App',
    components: {
    },
    data: () => {
      return {
        menuOpened: true,
        menuCollapsed: false
      }
    },
    created() {
      eventBus.$on('sidebarShowHideToggled', (opened) => {
        this.menuOpened = opened
      })
      eventBus.$on('sidebarCollapseToggled', (collapsed) => {
        this.menuCollapsed = collapsed
      })
    }
  }
</script>

<style lang="scss">

  html,
  body,
  #app{
    height: 100vh;
  }

</style>

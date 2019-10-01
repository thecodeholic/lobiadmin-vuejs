<template>
  <div id="app" :class="{'menu-hidden': !menuOpened, 'menu-collapsed': menuCollapsed}">
    <router-view/>

    <navbar></navbar>
    <sidebar></sidebar>
    <div id="main">
      <div id="ribbon" class="hidden-print">
        <a href="#dashboard" class="btn-ribbon" data-container="#main" data-toggle="tooltip"
           data-title="Show dashboard"><i
                class="fa fa-home"></i></a>
        <span class="vertical-devider">&nbsp;</span>
        <button class="btn-ribbon" data-container="#main" data-action="reload" data-toggle="tooltip"
                data-title="Reload content by ajax"><i class="fa fa-refresh"></i></button>
        <ol class="breadcrumb">
        </ol>
      </div>
      <div id="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from './shared/services/event-bus'
import Navbar from './shared/components/navbar/Navbar'
import Sidebar from './shared/components/sidebar/Sidebar'

export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'sidebar': Sidebar
  },
  data: () => {
    return {
      menuOpened: true,
      menuCollapsed: false
    }
  },
  created () {
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

  @import "./assets/scss/index";

</style>

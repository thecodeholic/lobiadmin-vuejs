<template>
  <ul class="nav navbar-nav pull-left show-hide-menu">
    <li>
      <a href="#" class="border-radius-0 btn font-size-lg" @click="toggleSidebar" :class="{active: !sidebarOpened}">
        <i class="fa fa-bars"></i>
      </a>
    </li>
  </ul>
</template>

<script>
import { eventBus } from '../../../services/event-bus'

export default {
  name: "SidebarToggle",
  data: () => {
    return {
      sidebarOpened: true
    }
  },
  methods: {
    toggleSidebar () {
      this.sidebarOpened = !this.sidebarOpened
      eventBus.$emit('sidebarShowHideToggled', this.sidebarOpened)
    }
  }
}
</script>

<style scoped>

</style>

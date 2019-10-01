<template>
  <div>
    <i v-if="icon" class="fa menu-item-icon" :class="'fa-'+icon"></i>
    <span class="inner-text">{{name}}</span>
    <span v-if="badge" class="badge-wrapper">
        <span class="badge" :class="badgeClasses">{{badge}}</span>
      </span>
  </div>
</template>

<script>
export default {
  name: "SidebarItemContent",
  props: {
    badgeClasses: [String, Array],
    name: String,
    icon: String,
    badge: Number
  }
}
</script>

<style scoped>

</style>

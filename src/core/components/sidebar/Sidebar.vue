<template>
  <div class="menu">
    <div class="menu-heading">
      <div class="menu-header-buttons-wrapper clearfix">
        <button type="button" class="btn btn-info btn-menu-header-collapse">
          <i class="fa fa-cogs"></i>
        </button>
        <!--Put your favourite pages here-->
        <div class="menu-header-buttons">
          <a href="#profile" class="btn btn-info btn-outline" data-title="Profile">
            <!--<icon name="user"></icon>-->
          </a>
          <a href="#invoice" class="btn btn-info btn-outline" data-title="Invoice">
            <!--<icon name="file-pdf"></icon>-->
          </a>
          <a href="#lobimail" class="btn btn-info btn-outline" data-title="Inbox">
            <!--<i class="fa fa-envelope"></i>-->
            <!--<icon name="file-envelope"></icon>-->
          </a>
          <a href="#calendar" class="btn btn-info btn-outline" data-title="Calendar">
            <!--<icon name="file-calendar"></icon>-->
          </a>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <sidebar-item v-for="(menuItem, index) in menuData"
                      :to="menuItem.path || false"
                      :name="menuItem.text"
                      :icon="menuItem.icon"
                      :badge="menuItem.badge"
                      :badge-classes="menuItem.badgeClasses"
                      :children="menuItem.children"
                      :key="index"
        ></sidebar-item>
      </ul>
    </nav>
    <div class="menu-collapse-line">
      <!--Menu collapse/expand icon is put and control from LobiAdmin.js file-->
      <div class="menu-toggle-btn" @click="sidebarCollapseToggle" data-action="collapse-expand-sidebar">
        <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
      </div>
    </div>
  </div>
</template>


<script>
  import {mapActions} from 'vuex';
  import SidebarItem from './SidebarItem'
  import menuService from './MenuService';

  export default {
    name: "Sidebar",
    components: {
      'sidebar-item': SidebarItem
    },
    data: () => {
      return {
        menuData: menuService.getItems()
      }
    },
    methods: {
      ...mapActions(['toggleMenuCollapse']),
      sidebarCollapseToggle() {
        this.toggleMenuCollapse();
      }
    }
  }
</script>

<style src="./Sidebar.scss" lang="scss">

</style>

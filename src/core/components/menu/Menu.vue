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
                      :to="menuItem.url || false"
                      :name="menuItem.name"
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
        <i class="fa fa-chevron-circle-left"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../../services/event-bus'
import SidebarItem from './components/SidebarItem'

export default {
  name: "Sidebar",
  components: {
    'sidebar-item': SidebarItem
  },
  data: () => {
    return {
      sidebarCollapsed: false,
      menuData: [
        {
          name: 'Dashboard',
          url: '/dashboard',
          icon: 'home'
        },
        {
          name: 'Exclusive plugins',
          icon: 'share-alt',
          badge: 4,
          badgeClasses: ['badge-xs', 'badge-cyan'],
          children: [
            {
              name: 'LobiPanel',
              url: '/lobipanel'
            },
            {
              name: 'LobiBox',
              url: '/lobibox'
            },
            {
              name: 'LobiTab',
              url: '/lobitab'
            },
            {
              name: 'LobiList',
              url: '/lobilist'
            }
          ]
        },
        {
          name: 'Graphs',
          icon: 'area-chart',
          children: [
            {
              name: 'Chart.js',
              url: '/chartjs'
            },
            {
              name: 'Morris Charts',
              url: '/morrisjs'
            },
            {
              name: 'Inline Charts',
              url: '/inline-charts'
            }
          ]
        },
        {
          name: 'Tables',
          icon: 'table',
          children: [
            {
              name: 'Basic Tables',
              url: '/basic-tables'
            },
            {
              name: 'Data Tables',
              url: '/data-tables'
            }
          ]
        },
        {
          name: 'UI Elements',
          icon: 'list-alt',
          children: [
            {
              name: 'Default Elements',
              url: '/default-elements'
            },
            {
              name: 'Icons',
              children: [
                {
                  name: 'Glyphicon',
                  url: '/glyphicon'
                },
                {
                  name: 'Font Awesome',
                  url: '/font-awesome'
                },
                {
                  name: 'Weather icons',
                  url: '/weather-icons'
                }
              ]
            },
            {
              name: 'Typography',
              url: '/typography'
            },
            {
              name: 'Buttons',
              url: '/buttons'
            },
            {
              name: 'Tiles',
              url: '/tiles'
            },
            {
              name: 'Discount labels',
              url: '/discount-labels'
            },
            {
              name: 'Treeview',
              url: '/treeview'
            },
            {
              name: 'Six Level Menu',
              children: [
                {
                  name: 'Third level menu',
                  children: [
                    {
                      name: 'Fourth level',
                      children: [
                        {
                          name: 'Fifth level',
                          children: [
                            {
                              name: 'Sixth level'
                            },
                            {
                              name: 'Sixth level'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Forms',
          icon: 'pencil-square-o',
          children: [
            {
              name: 'Basic Elements',
              url: '/form-basic-elements'
            },
            {
              name: 'Custom Elements',
              url: '/form-custom-elements'
            },
            {
              name: 'Form Plugins',
              url: '/form-plugins'
            },
            {
              name: 'Form Layouts',
              url: '/form-layouts'
            },
            {
              name: 'Form Validation',
              url: '/form-validation'
            },
            {
              name: 'Wizards',
              url: '/wizard'
            },
            {
              name: 'WYSIWYG Editor',
              url: '/editor'
            },
            {
              name: 'File Upload',
              url: '/file-upload'
            },
            {
              name: 'Image cropping',
              url: '/image-cropping'
            }
          ]
        },
        {
          name: 'Grid options',
          icon: 'laptop',
          url: '/grid'
        },
        {
          name: 'Mail templates',
          icon: 'envelope-o',
          url: '/mail-templates'
        },
        {
          name: 'Calendar',
          url: '/calendar',
          icon: 'calendar',
          badge: 12,
          badgeClasses: ['badge-xs badge-info']
        },
        {
          name: 'Inbox',
          icon: 'envelope',
          url: 'mailing',
          badge: 7,
          badgeClasses: 'badge-xs badge-danger'
        },
        {
          name: 'Extra',
          icon: 'file-o',
          children: [
            {
              name: 'Page 404',
              url: '/error-404'
            },
            {
              name: 'Page 500',
              url: '/error-500'
            },
            {
              name: 'Lock Screen',
              url: '/lock'
            },
            {
              name: 'Login & Register',
              url: '/login'
            },
            {
              name: 'Helper Classes',
              url: '/helper'
            },
            {
              name: 'Pricing tables',
              url: '/pricing-tables'
            },
            {
              name: 'Timeline',
              url: '/timeline'
            },
            {
              name: 'Invoice',
              url: '/invoice'
            },
            {
              name: 'Profile',
              url: '/profile'
            }
          ]
        }
      ]
    }
  },
  methods: {
    sidebarCollapseToggle () {
      console.log("111")
      this.sidebarCollapsed = !this.sidebarCollapsed
      eventBus.$emit('sidebarCollapseToggled', this.sidebarCollapsed)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

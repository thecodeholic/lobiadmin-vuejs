<template>
  <div id="app" :class="{'menu-collapsed': this.menuCollapsed}">
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
  import {mapState} from 'vuex';

  export default {
    name: 'App',
    components: {},
    data: () => {
      return {
        menuOpened: true,
      }
    },
    computed: mapState([
      'menuCollapsed'
    ]),
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
  @import "./core/scss/variables";

  html,
  body,
  #app {
    height: 100vh;
  }

  #app {
    &.menu-collapsed {
      .menu {
        overflow: visible;
        width: $menu-width-collapsed;
        .menu-heading {
          .menu-header-buttons-wrapper {
            .btn-menu-header-collapse {
              display: inline-block;
            }

            .menu-header-buttons {
              display: inline-block;
              position: absolute;
              width: 0;
              top: 0;
              height: 100%;
              left: 100%;
              padding: inherit;
              @include transition(all $transition-duration);
              @include box-shadow(2px 2px 5px rgba(0, 0, 0, 0.1));
            }

            &:hover {
              .btn-menu-header-collapse {
                float: left;
              }

              .menu-header-buttons {
                min-width: $menu-width;
                background-color: $menu-bg;
              }
            }
          }
        }

        nav {
          > ul {
            > li {
              > a {
                text-align: center;

                .inner-text, .menu-item-toggle-icon {
                  display: none;
                }

                .badge-wrapper {
                  line-height: 1;
                  top: 2px;
                  right: 2px;
                }
              }

              > ul {
                display: none !important;
              }

              &.opened {
                > a {
                  border-bottom: none;
                }
              }

              &:hover {
                > a {
                  .inner-text {
                    display: block;
                    position: absolute;
                    top: 0;
                    text-align: left;
                    border: 1px solid $menu-border-color;
                    left: $menu-width-collapsed - 5px;
                    width: $menu-width;
                    background-color: $nav-menu-item-active-bg;
                    padding: $nav-menu-item-padding-vertical $nav-menu-item-padding-horizontal;
                    z-index: 4;
                  }
                }

                > ul {
                  display: block !important;
                  position: absolute;
                  top: 100%;
                  border: 1px solid $menu-border-color;
                  border-top-color: transparent;
                  margin-top: -1px;
                  left: $menu-width-collapsed - 5px;
                  width: $menu-width;
                  z-index: 3;
                }
              }
            }
          }
        }

        .menu-collapse-line {
          .menu-toggle-btn {
            > * {
              @include rotate(180deg);
            }
          }
        }
      }
    }
  }

</style>

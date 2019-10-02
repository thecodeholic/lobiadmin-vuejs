<template>
  <b-navbar class="header" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <div class="navbar-brand-img"
           style="background-image: url('assets/img/logo/lobiadmin-logo-text-white-32.png')"></div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
    <div class="clearfix-xxs"></div>
    <div class="navbar-items pull-right">
      <b-navbar-nav>
        <!--    Avatar -->
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </div>
    <div class="clearfix-xxs"></div>
    <div class="navbar-items-2 ml-auto">
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>


      <b-navbar-nav>
        <b-nav-item-dropdown text="Messages" right>
          <li class="dropdown-notifications notification-messages border-1 animated-fast flipInX">
            <div class="notifications-heading border-bottom-1 bg-white">
              Messages
              <div class="header-actions pull-right">
                <a href="#lobimail" data-action="compose-email">
                  <small><i class="fa fa-edit"></i> Create new</small>
                </a>
              </div>
            </div>
            <ul class="notifications-body max-h-300">
              <li class="unread">
                <a href="#lobimail" data-action="open-email" data-key="1" class="notification">
                  <img class="notification-image" src="img/users/1.jpg" alt="">
                  <div class="notification-msg">
                    <h4 class="notification-heading">George Darso</h4>
                    <h5 class="notification-sub-heading">Happy birthday!!</h5>
                    <p class="body-text">Happy birthday. Lorem ipsum dolor sit amor.</p>
                  </div>
                  <span class="notification-time">5 min. ago</span>
                </a>
              </li>
              <li class="unread">
                <a href="#lobimail" data-action="open-email" data-key="2" class="notification">
                  <img class="notification-image" src="img/users/2.jpg" alt="">
                  <div class="notification-msg">
                    <h4 class="notification-heading">George Dava</h4>
                    <h5 class="notification-sub-heading">Lorem ipsum dolor sit amor.</h5>
                    <p class="body-text">Whirling indicating staunch pglaf, leafy siroc clerks paying eager promoting
                      storm aliquet treasures.</p>
                  </div>
                  <span class="notification-time">15 min. ago</span>
                </a>
              </li>
              <li class="unread">
                <a href="#lobimail" data-action="open-email" data-key="3" class="notification">
                  <img class="notification-image" src="img/users/3.jpg" alt="">
                  <div class="notification-msg">
                    <h4 class="notification-heading">George Darso</h4>
                    <h5 class="notification-sub-heading">Lorem ipsum dolor sit amore</h5>
                    <p class="body-text">Region doth chaucer, smiled erhung, recording frail cove design train thy
                      holiday committed. Told how fixed parcae tented whistle doom recording deceivers tribe.</p>
                  </div>
                  <span class="notification-time">1 hr. ago</span>
                </a>
              </li>
              <li>
                <a href="#lobimail" data-action="open-email" data-key="4" class="notification">
                  <img class="notification-image" src="img/users/4.jpg" alt="">
                  <div class="notification-msg">
                    <h4 class="notification-heading">Zura Sekhno</h4>
                    <h5 class="notification-sub-heading">This is message subject text</h5>
                    <p class="body-text">Garden check we, dearer you sharply, martin cable, square bonfires, freely,
                      delphian scorning copying courage. </p>
                  </div>
                  <span class="notification-time">17 hr. ago</span>
                </a>
              </li>
              <li>
                <a href="#lobimail" data-action="open-email" data-key="5" class="notification">
                  <img class="notification-image" src="img/users/5.jpg" alt="">
                  <div class="notification-msg">
                    <h4 class="notification-heading">Jane Smth</h4>
                    <h5 class="notification-sub-heading">Need support about product</h5>
                    <p class="body-text">Essaying unappointed pull disdain, downfall square liberal.</p>
                  </div>
                  <span class="notification-time">2 days ago.</span>
                </a>
              </li>
              <li>
                <a href="#lobimail" data-action="open-email" data-key="6" class="notification">
                  <img class="notification-image" src="img/users/1.jpg" alt="">
                  <div class="notification-msg">
                    <h4 class="notification-heading">Sam Solly</h4>
                    <h5 class="notification-sub-heading">Today's meeting</h5>
                    <p class="body-text">Paltering kingfisher patience woven his, aeneas self each square surer semper.
                      Self reaped bonfires, gift rounds dearer garden.</p>
                  </div>
                  <span class="notification-time">January 15, 2014</span>
                </a>
              </li>
            </ul>
            <div class="notifications-footer text-center border-top-1 bg-white">
              <a href="#lobimail">View all</a>
            </div>
          </li>
        </b-nav-item-dropdown>
        <b-nav-item text="Lang" right>
          Notifications
        </b-nav-item>
        <b-nav-item text="Lang" right>
          Tasks
        </b-nav-item>

      </b-navbar-nav>
    </div>
  </b-navbar>
</template>

<script>
  import SidebarToggle from './components/SidebarToggle'

  export default {
    name: 'Navbar',
    components: {
      SidebarToggle
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import "../../../core/scss/variables";

  .header {
    width: 100%;
    float: none;
    margin-bottom: 0;
    //height: $navbar-height;
    background-color: $navbar-bg;

    .navbar-brand {
      margin-left: 0 !important;
      text-align: center;
      position: relative;
      width: $navbar-brand-width;
      font-size: $navbar-brand-font-size;

      .navbar-brand-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        //background-image: $navbar-brand-img-source;
        background-repeat: no-repeat;
      }

      img {
        margin-top: -8px;
      }
    }

    .navbar-search {
      margin-top: 0;
      margin-bottom: 0;
      max-width: $navbar-search-form-width;

      &,
      & > input {
        height: 100%;
      }

      input {
        outline: 0;
        border: none;
        padding-left: 15px;
        background-color: transparent;
        width: 100%;
        color: $navbar-items-color;
        //@include placeholder($navbar-items-color);
      }

      .btn {
        border: none;
        border-radius: 0;
        position: absolute;
        bottom: 0;
        padding: 0;
        right: 0;
        text-align: center;
        //line-height: $navbar-height;
        padding-left: $navbar-links-padding-horizontal;
        padding-right: $navbar-links-padding-horizontal;
      }

      .btn-search,
      .btn-remove {
        display: none;
      }

      &.navbar-search-full {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        margin: 0;
        z-index: 3;
        border-bottom: 1px solid $gray-lighter;
        background-color: $navbar-search-full-screen-bg;
        //height: $navbar-height;

        input {
          display: block;
          width: 100%;
          color: $navbar-search-full-screen-color;
          padding-right: 2 * 5px + 2 * $navbar-search-full-screen-btn-size;
          //@include placeholder($navbar-search-full-screen-color);
        }

        .btn {
          position: absolute;
          margin: 0;
          padding: 0;
          text-align: center;
          color: $navbar-search-full-screen-color;
          //@include square($navbar-search-full-screen-btn-size);
          line-height: $navbar-search-full-screen-btn-size;
          //top: ($navbar-height - $navbar-search-full-screen-btn-size) / 2;
        }

        .btn-search {
          border: none;
          right: 5px * 2 + $navbar-search-full-screen-btn-size;
        }

        .btn-remove {
          display: inline-block;
          right: 5px;
        }
      }
    }

    .navbar-nav {
      margin: 0;

      > li {
        float: left;

        > a {
          //padding: 0 $navbar-links-padding-horizontal;
          //font-size: 14px;
          //color: $navbar-items-color;
          //line-height: $navbar-height;
        }

        > a:hover,
        > a:focus {
          //color: $navbar-items-hover-color;
          //background-color: $navbar-items-hover-bg;
        }

        &.open > a,
        &.open > a:hover,
        &.open > a:focus {
          //color: $navbar-items-hover-color;
          //background-color: fadeIn($navbar-items-hover-bg, 10%);
        }

        > a:active,
        &.open > a:active {
          //background-color: fadeIn($navbar-items-hover-bg, 20%);
        }
      }

      &.show-hide-menu {
        > li {
          > a {
            padding: 0;
            border: none;
            text-align: center;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
            border-right: 1px solid rgba(0, 0, 0, 0.1);
            //line-height: $navbar-height;
            width: $navbar-menu-toggle-btn-width;

            &.active {
              background-color: rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }

    .navbar-items {
      order: 10;
    }

    .navbar-items {
      .user-actions {
        > li {
          > a {
            .user-avatar {
              //@include square($navbar-user-image-size);
              //margin-top: ($navbar-height - $navbar-user-image-size ) / 2;
              //margin-bottom: ($navbar-height - $navbar-user-image-size ) / 2;
            }
          }

          .dropdown-menu {
            left: auto;
            right: 0;
          }
        }
      }
    }

    .navbar-items-2 {
      .navbar-actions {
        > li {
          > a {
            .badge {
              position: absolute;
              right: 3px;
              top: 6px;
            }
          }
        }
      }

      .navbar-nav {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  @include media-breakpoint-down(sm) {
    .header {
      .navbar-brand {
        width: $navbar-brand-width-mobile;

        .navbar-brand-img {
          background-image: $navbar-brand-img-source-mobile;
        }
      }

      .navbar-nav {
        > li {
          > a {
            padding: 0 $navbar-links-padding-horizontal-mobile;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(xs) {
    .header {
      .navbar-items {
        float: none;
        border-bottom: 1px solid darken($navbar-bg, 5%);
        @include clearfix();
      }

      .navbar-items-2 {
        float: none;
        display: block;
        border: none;
        text-align: center;
        background-color: $navbar-bg;
      }
    }
    .dropdown-notifications {
      width: $dropdown-notifications-xxs-width !important;
    }
    .notification-tasks {
      right: -20px;
      left: auto;
    }
    .notification-messages {
      right: -115px;
      left: auto;
    }
    .notification-news {
      right: -70px;
      left: auto;
    }
    #app.header-fixed {
      //padding-top: 2 * $navbar-height;
    }

    #app.ribbon-fixed {
      //padding-top: 2 * $navbar-height + $ribbon-height;

      #ribbon {
        //top: 2 * $navbar-height;
      }
    }
  }
</style>

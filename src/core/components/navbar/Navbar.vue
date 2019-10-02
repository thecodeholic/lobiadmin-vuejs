<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-nav-form>
      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
      <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
    </b-nav-form>
    <div class="navbar-items">
      <b-navbar-nav class="ml-auto">
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
    <div class="navbar-items-2">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

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

</style>

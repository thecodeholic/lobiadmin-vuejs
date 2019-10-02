<template>
  <b-navbar class="header" type="dark" variant="info">
    <b-navbar-brand href="#">
      <div class="navbar-brand-img"
           style="background-image: url('assets/img/logo/lobiadmin-logo-text-white-32.png')"></div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-nav-form class="navbar-search">
      <label for="search" class="sr-only">Search...</label>
      <input type="text" name="search" id="search" placeholder="Search...">
      <a class="btn btn-search">
        <span class="glyphicon glyphicon-search"></span>
      </a>
      <a class="btn btn-remove">
        <span class="glyphicon glyphicon-remove"></span>
      </a>

<!--      <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>-->
<!--      <b-button class="my-2 my-sm-0" type="submit">Search</b-button>-->
    </b-nav-form>
    <div class="clearfix-xxs"></div>
    <div class="navbar-items pull-right">
      <b-navbar-nav class="user-actions">
        <!--    Avatar -->
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <img class="user-avatar" src="assets/img/users/me-160.jpg" alt="..."/>
            <b class="caret"></b>
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
        <b-nav-item-dropdown
                text="Lang"
                html='<img src="assets/img/flags/en.png" alt="en"> <span class="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">english</span>'
                right>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/en.png" alt="en"/>
            english(UK)
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/us.png" alt="en"/>
            english(US)
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/fr.png" alt="en"/>
            français
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/it.png" alt="en"/>
            italiano
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/ru.png" alt="en"/>
            русский
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/de.png" alt="en"/>
            deutsch
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/es.png" alt="en"/>
            español
          </b-dropdown-item>
          <b-dropdown-item href="#">
            <img src="assets/img/flags/ge.png" alt="en"/>
            ქართული
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>


      <b-navbar-nav>
        <b-nav-item>
          <font-awesome-icon class="navbar-icon"  icon="compress" />
        </b-nav-item>
        <b-nav-item-dropdown right no-caret>
          <template v-slot:button-content>
            <font-awesome-icon class="navbar-icon" :icon="['far', 'envelope']" />
            <b-badge pill variant="danger">3</b-badge>
          </template>
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
        <b-nav-item-dropdown right no-caret>
          <template v-slot:button-content>
            <font-awesome-icon class="navbar-icon" :icon="['far', 'bell']" />
            <b-badge pill variant="danger">8</b-badge>
          </template>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right no-caret>
          <template v-slot:button-content>
            <font-awesome-icon class="navbar-icon" :icon="['fas', 'tasks']" />
            <b-badge pill variant="danger">9</b-badge>
          </template>
        </b-nav-item-dropdown>
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

<style src="./Navbar.scss" lang="scss">

</style>

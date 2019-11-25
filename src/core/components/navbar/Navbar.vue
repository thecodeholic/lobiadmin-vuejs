<template>
  <b-navbar class="header" type="dark" variant="info">
    <b-navbar-brand href="#">
      <div class="navbar-brand-img"
           style="background-image: url('assets/img/logo/lobiadmin-logo-text-white-32.png')"></div>
    </b-navbar-brand>

    <SidebarToggle/>

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
<!--    <div class="clearfix-xxs"></div>-->
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
          <b-dropdown-item @click="onLogoutClick()" href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </div>
<!--    <div class="clearfix-xxs"></div>-->
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
        <b-nav-item-dropdown class="dropdown-messages" right no-caret>
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
              <li v-for="message in messages" :key="message.id" :class="{'unread': message.unread}">
                <a href="#lobimail" data-action="open-email" data-key="1" class="notification">
                  <img class="notification-image" :src="message.avatar" :alt="message.from">
                  <div class="notification-msg">
                    <h4 class="notification-heading">{{message.from}}</h4>
<!--                    <h5 class="notification-sub-heading">{{message.message}}</h5>-->
                    <p class="body-text">{{message.message}}</p>
                  </div>
                  <span class="notification-time">{{message.time | moment("from") }}</span>
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
          <li class="dropdown-notifications notification-news border-1 animated-fast flipInX">
            <div class="notifications-heading border-bottom-1 bg-white">
              Notifications
            </div>
            <ul class="notifications-body max-h-300">
              <li class="unread">
                <div class="notification">
                  <img class="notification-image" src="img/users/3.jpg" alt="">
                  <div class="notification-msg">
                    <h5 class="notification-sub-heading text-gray-darker"><a href="#">Sam Solly</a> posted a comment
                      about <a href="#">Programming in HTML5</a></h5>
                    <p class="body-text"><i class="fa fa-comment"></i> 6 hr. ago</p>
                  </div>
                </div>
              </li>
              <li class="unread">
                <div class="notification friend-request">
                  <img class="notification-image" src="img/users/4.jpg" alt="">
                  <div class="notification-msg">
                    <h4 class="notification-heading"><a href="#">John Doe</a></h4>
                    <h5 class="notification-sub-heading text-nowrap">Friend request
                      <a href="#" class="btn btn-info btn-xs btn-response">Accept</a>
                      <a href="#" class="btn btn-danger btn-xs btn-response">Decline</a>
                    </h5>
                    <p class="body-text"><i class="fa fa-user"></i> 12 hr. ago</p>
                  </div>
                </div>
              </li>
              <li class="unread">
                <div class="notification">
                  <img class="notification-image" src="img/users/2.jpg" alt="">
                  <div class="notification-msg">
                    <h5 class="notification-sub-heading"><a href="#">George Darso</a> invited you to join the conference
                    </h5>
                    <p class="body-text"><i class="fa fa-clock-o"></i> yesterday</p>
                  </div>
                  <a href="#" class="link-action">View invitation</a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <img class="notification-image" src="img/users/1.jpg" alt="">
                  <div class="notification-msg">
                    <h5 class="notification-sub-heading">
                      <a href="#">Guga Grigo</a> likes your photo
                    </h5>
                    <p class="body-text"><i class="fa fa-thumbs-up"></i> Tuesday</p>
                  </div>
                  <a href="#"><img src="img/users/me-160.jpg" alt="" class="liked-photo"/></a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <div class="notification-icon"><i class="glyphicon glyphicon-user"></i></div>
                  <div class="notification-msg">
                    <h5 class="notification-sub-heading"><a href="#">Poll Hunely</a> has accepted your invitation.</h5>
                    <p class="body-text"><i class="fa fa-check"></i> yesterday</p>
                  </div>
                  <a href="#" class="link-action"><i class="fa fa-calendar"></i> Add to calendar</a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <div class="notification-icon"><i class="fa fa-users"></i></div>
                  <div class="notification-msg">
                    <h5 class="notification-sub-heading"><a href="#" data-toggle="tooltip" data-html="true"
                                                            data-title="Mari Abdu<br>Guga Grigo<br>David Sula">3 new
                      users</a> has just signed up</h5>
                    <p class="body-text"><i class="fa fa-user"></i> Sunday</p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="notifications-footer border-top-1 bg-white text-center">
              <a href="#">View all</a>
            </div>
          </li>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right no-caret>
          <template v-slot:button-content>
            <font-awesome-icon class="navbar-icon" :icon="['fas', 'tasks']" />
            <b-badge pill variant="danger">9</b-badge>
          </template>
          <li class="dropdown-notifications notification-tasks border-1 animated-fast flipInX">
            <div class="notifications-heading border-bottom-1 bg-white">
              Active tasks
            </div>
            <ul class="notifications-body max-h-300">
              <li>
                <div class="notification">
                  <p class="body-text"><span class="label label-danger">Critical</span> Create SASS files <span
                          class="pull-right">90%</span></p>
                  <div class="progress">
                    <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar"
                         aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%"><span
                            class="sr-only">90% Complete</span></div>
                  </div>
                  <a href="#" data-container="body" data-toggle="tooltip" data-html="true"
                     data-title="Zura Sekhno<br>George darso<br>Guga Grigo">Working on</a>
                  <a href="#" class="link-action">Details</a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <p class="body-text"><span class="label label-warning">Important</span> Create new login form <span
                          class="pull-right">30%</span></p>
                  <div class="progress progress-sm">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar"
                         aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%"><span
                            class="sr-only">30% Complete</span></div>
                  </div>
                  <a href="#" data-container="body" data-toggle="tooltip" data-html="true"
                     data-title="Zura Sekhno<br>George darso<br>Guga Grigo">Working on</a>
                  <a href="#" class="link-action">Details</a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <p class="body-text"><span class="label label-primary">Normal</span> Create angularjs version <span
                          class="pull-right">10%</span></p>
                  <div class="progress progress-xs">
                    <div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar"
                         aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 10%"><span
                            class="sr-only">10% Complete</span></div>
                  </div>
                  <a href="#" data-container="body" data-toggle="tooltip" data-html="true"
                     data-title="John Doe<br>Jane Smth">Working on</a>
                  <a href="#" class="link-action">Details</a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <p class="body-text"><span class="label label-warning">Important</span> Password reset <span
                          class="pull-right">50%</span></p>
                  <div class="progress">
                    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50"
                         aria-valuemin="0" aria-valuemax="100" style="width: 50%"><span
                            class="sr-only">50% Complete</span></div>
                  </div>
                  <a href="#" data-container="body" data-toggle="tooltip" data-html="true"
                     data-title="Zura Sekhno<br>George darso<br>Guga Grigo">Working on</a>
                  <a href="#" class="link-action">Details</a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <p class="body-text"><span class="label label-danger">Critical</span> Hardware repair <span
                          class="pull-right fa fa-check text-success"></span></p>
                  <div class="progress">
                    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span
                            class="sr-only">100% Complete</span></div>
                  </div>
                  <a href="#" data-container="body" data-toggle="tooltip" data-html="true"
                     data-title="John Doe<br>Jane Smth">Working on</a>
                  <a href="#" class="link-action">Details</a>
                </div>
              </li>
              <li>
                <div class="notification">
                  <p class="body-text"><span class="label label-success">Important</span> Set up new server <span
                          class="pull-right fa fa-check text-success"></span></p>
                  <div class="progress progress-lg">
                    <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
                         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span
                            class="sr-only">100% Complete</span></div>
                  </div>
                  <a href="#" data-container="body" data-toggle="tooltip" data-html="true"
                     data-title="Poll Husaly<br>Akaki Liqo">Working on</a>
                  <a href="#" class="link-action">Details</a>
                </div>
              </li>
            </ul>
            <div class="notifications-footer border-top-1 bg-white text-center">
              <a href="#">View all</a>
            </div>
          </li>
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
    data(){
      return {
        messages: [
          {
            id: 1,
            message: 'Lets all be unique together until we realise we are all the same.',
            from: 'Cody Romero',
            avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
            unread: true,
            time: Date.now() - 1000 * 5
          },
          {
            id: 2,
            message: 'Please wait outside of the house.',
            from: 'Diane Herrera',
            avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
            unread: true,
            time: Date.now() - 1000 * 55
          },
          {
            id: 3,
            message: 'The book is in front of the table.',
            from: 'Leonard Reyes',
            avatar: 'https://randomuser.me/api/portraits/men/27.jpg',
            unread: true,
            time: Date.now() - 1000 * 60 * 2
          },
          {
            id: 4,
            message: 'How was the math test?',
            from: 'Alan Austin',
            avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
            unread: true,
            time: Date.now() - 1000 * 60 * 26
          },
          {
            id: 5,
            message: 'I really want to go to work, but I am too sick to drive.',
            from: 'Scarlett Fernandez',
            avatar: 'https://randomuser.me/api/portraits/women/81.jpg',
            unread: false,
            time: Date.now() - 1000 * 60 * 55
          },
          {
            id: 6,
            message: 'Christmas is coming.',
            from: 'Larry Stewart',
            avatar: 'https://randomuser.me/api/portraits/men/70.jpg',
            unread: false,
            time: Date.now() - 1000 * 60 * 60 * 24
          },
          {
            id: 7,
            message: 'She advised him to come back at once.',
            from: 'Thomas Bradley',
            avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
            unread: false,
            time: Date.now() - 1000 * 60 * 60 * 24 * 5
          },
          {
            id: 8,
            message: 'The lake is a long way from here.',
            from: 'Veronica Brown',
            avatar: 'https://randomuser.me/api/portraits/women/86.jpg',
            unread: false,
            time: Date.now() - 1000 * 60 * 60 * 24 * 12
          },
        ],
        notifications: [

        ]
      }
    },
    methods: {
      onLogoutClick(){
        this.$router.push('/auth/login');
      }
    }
  }
</script>

<style src="./Navbar.scss" lang="scss">

</style>

<template>
  <nav class="navbar navbar-default navbar-header header">
    <a class="navbar-brand" href="#">
      <div class="navbar-brand-img"></div>
      <!--<img src="img/logo/lobiadmin-logo-text-white-32.png" class="hidden-xs" alt="" />-->
    </a>
    <!--Menu show/hide toggle button-->
    <sidebar-toggle></sidebar-toggle>
    <form class="navbar-search pull-left">
      <label for="search" class="sr-only">Search...</label>
      <input type="text" class="font-size-lg" name="search" id="search" placeholder="Search...">
      <a class="btn btn-search">
        <span class="glyphicon glyphicon-search"></span>
      </a>
      <a class="btn btn-remove">
        <span class="glyphicon glyphicon-remove"></span>
      </a>
    </form>
    <div class="navbar-items">
      <!--User avatar dropdown-->
      <ul class="nav navbar-nav navbar-right user-actions">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img class="user-avatar" src="img/users/me-160.jpg" alt="..."/>
            <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#profile"><span class="glyphicon glyphicon-user"></span> &nbsp;&nbsp;Profile</a></li>
            <li><a href="#timeline"><i class="fa fa-code-fork"></i> &nbsp;&nbsp;Timeline</a></li>
            <li><a href="#lobimail"><span class="glyphicon glyphicon-envelope"></span> &nbsp;&nbsp;Messages</a></li>
            <li class="divider"></li>
            <li><a href="lock.html"><span class="glyphicon glyphicon-lock"></span> &nbsp;&nbsp;Lock screen</a></li>
            <li><a href="login.html"><span class="glyphicon glyphicon-off"></span> &nbsp;&nbsp;Log out</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="clearfix-xxs"></div>
    <div class="navbar-items-2">
      <!--Choose languages dropdown-->
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <img src="img/flags/en.png" alt="en"/>
            <span class="visible-lg-inline-block visible-md-inline-block visible-sm-inline-block">english</span>
            <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li class="active">
              <a href="#">
                <img src="img/flags/en.png" alt="en"/>
                english(UK)
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/flags/us.png" alt="en"/>
                english(US)
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/flags/fr.png" alt="en"/>
                français
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/flags/it.png" alt="en"/>
                italiano
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/flags/ru.png" alt="en"/>
                русский
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/flags/de.png" alt="en"/>
                deutsch
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/flags/es.png" alt="en"/>
                español
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/flags/ge.png" alt="en"/>
                ქართული
              </a>
            </li>

          </ul>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-actions">
        <li class="visible-lg">
          <a href="#" data-action="fullscreen">
            <span class="glyphicon glyphicon-fullscreen"></span>
          </a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <span class="glyphicon glyphicon-envelope"></span>
            <span class="badge badge-danger badge-xs">3</span>
          </a>
          <div class="dropdown-menu dropdown-notifications notification-messages border-1 animated-fast flipInX">
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
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <span class="fa fa-globe"></span>
            <span class="badge badge-danger badge-xs">9</span>
          </a>
          <div class="dropdown-menu dropdown-notifications notification-news border-1 animated-fast flipInX">
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
          </div>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <span class="fa fa-tasks"></span>
            <span class="badge badge-danger badge-xs">8</span>
          </a>
          <div class="dropdown-menu dropdown-notifications notification-tasks border-1 animated-fast flipInX">
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
          </div>
        </li>
      </ul>
    </div>
    <div class="clearfix"></div>
  </nav>
</template>

<script>
import SidebarToggle from './components/SidebarToggle'

export default {
  name: 'navbar',
  components: {
    SidebarToggle
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>

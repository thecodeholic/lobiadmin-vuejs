import router from '../../shared/router'
import MenuService from "../../core/components/sidebar/MenuService";
import MenuItem from "../../core/components/sidebar/MenuItem";
import i18n from './../../shared/i18n'
import Calendar from "./Calendar";

let {routes} = router.options;
const route = routes.find(r => r.path === '/');

let tmpRoutes = [
  {
    path: 'calendar',
    component: Calendar,
    // meta: {
    //   requiresAuth: true
    // }
  }
];

tmpRoutes.forEach((obj) => {
  route.children.push(obj);
});

router.addRoutes([route]);

MenuService.addMenuItem(new MenuItem('/calendar', i18n.t('Calendar'), 1, ['far', 'calendar-alt']));

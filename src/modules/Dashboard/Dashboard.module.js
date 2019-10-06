import router from '../../shared/router'
import MenuService from "../../core/components/sidebar/MenuService";
import MenuItem from "../../core/components/sidebar/MenuItem";
import i18n from './../../shared/i18n'
import Dashboard from "./Dashboard";

let {routes} = router.options;
const route = routes.find(r => r.path === '/');

let tmpRoutes = [
  {
    path: 'dashboard',
    component: Dashboard,
    // meta: {
    //   requiresAuth: true
    // }
  }
];

tmpRoutes.forEach((obj) => {
  route.children.push(obj);
});

router.addRoutes([route]);

MenuService.addItem(new MenuItem('/dashboard', i18n.t('Dashboard'), 1, ['fas', 'tachometer-alt']));

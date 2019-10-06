import router from '../../shared/router'
import MenuService from "../../core/components/sidebar/MenuService";
import MenuItem from "../../core/components/sidebar/MenuItem";
import i18n from './../../shared/i18n'
// import Dashboard from "./Dashboard";
import './CustomElements/CustomElements.module.js';
import CustomElements from "./CustomElements/CustomElements";

let {routes} = router.options;
const route = routes.find(r => r.path === '/');

let tmpRoutes = [
  {
    path: '/forms',
    redirect: '/forms/custom-elements',
    // component: CustomElements,
    // meta: {
    //   requiresAuth: true
    // }
  }
];

tmpRoutes.forEach((obj) => {
  route.children.push(obj);
});

router.addRoutes([route]);

MenuService.addItem(new MenuItem('/forms', i18n.t('Forms'), 1, ['far', 'edit'], [
  new MenuItem('/forms/custom-elements', 'Custom Elements', 10, '')
]));

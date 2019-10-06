import router from '../../../shared/router'
import menuService from "../../../core/components/sidebar/MenuService";
import MenuItem from "../../../core/components/sidebar/MenuItem";
import i18n from './../../../shared/i18n'
import CustomElements from "./CustomElements";

let {routes} = router.options;
const route = routes.find(r => r.path === '/');

let tmpRoutes = [
  {
    path: 'forms/custom-elements',
    component: CustomElements,
    // meta: {
    //   requiresAuth: true
    // }
  }
];

tmpRoutes.forEach((obj) => {
  route.children.push(obj);
});

router.addRoutes([route]);

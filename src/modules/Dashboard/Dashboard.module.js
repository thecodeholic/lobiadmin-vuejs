import router from '../../shared/router'
import Vendor from './Vendor.vue'
import VendorForm from './VendorForm.vue'
import VendorFormForClient from './VendorFormForClient.vue'
import MenuService from "../../core/components/menu/MenuService";
import MenuItem from "../../core/components/menu/MenuItem";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import i18n from './../../shared/i18n'

library.add(faGlobe);

let {routes} = router.options;
const route = routes.find(r => r.path === '/');

let tmpRoutes = [{
  path: 'vendors',
  component: Vendor,
  meta: {
    requiresAuth: true
  }
}, {
  path: '/vendors/create',
  component: VendorForm,
  meta: {
    requiresAuth: true
  },
}, {
  path: '/vendors/create-from-client',
  component: VendorFormForClient,
  meta: {
    requiresAuth: true
  },
}, {
  path: 'vendors/:id',
  component: VendorForm,
  meta: {
    requiresAuth: true
  },
},
];

tmpRoutes.forEach((obj) => {
  route.children.push(obj);
});

router.addRoutes([route]);

MenuService.addMenuItem(new MenuItem('/vendors', i18n.t('Vendors'), 1, 'globe'));

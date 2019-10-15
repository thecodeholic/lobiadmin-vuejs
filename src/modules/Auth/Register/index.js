import router from '../../../shared/router'
import Register from "./Register";

let {routes} = router.options;
const mainRoute = routes.find(r => r.name === 'auth');

mainRoute.children.push(
    {
      path: 'register',
      component: Register,
    }
);

router.addRoutes([mainRoute]);

import {route} from 'quasar/wrappers';
import {
    createMemoryHistory,
    createRouter,
    createWebHashHistory,
    createWebHistory,
    Router
} from 'vue-router';
import routes from './routes';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

let ROUTER: Router;

export default function (/* { store, ssrContext } */) {

    if (!ROUTER) {
        const createHistory =
            process.env.SERVER
                ? createMemoryHistory
                : process.env.VUE_ROUTER_MODE === 'history'
                ? createWebHistory
                : createWebHashHistory;

        ROUTER = createRouter({
            scrollBehavior: () => ({left: 0, top: 0}),
            routes,

            // Leave this as is and make changes in quasar.conf.js instead!
            // quasar.conf.js -> build -> vueRouterMode
            // quasar.conf.js -> build -> publicPath
            // mode: process.env.VUE_ROUTER_MODE,
            // base: process.env.VUE_ROUTER_BASE,
            history: createHistory(
                process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE
            ),
        });
        // NB: middlewares come here
        // router.beforeEach((to, from, next) => {
        //     const accessToken = Cookies.getItem('token');
        //     if (accessToken === null && to.name !== 'Login') {
        //         next({ path: '/login', replace: true });
        //         return;
        //     } else {
        //         next();
        //     }
        // });
    }

    return ROUTER;
}

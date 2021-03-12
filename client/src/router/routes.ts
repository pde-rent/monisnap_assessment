import {RouteRecordRaw} from 'vue-router';

// TODO: split MainLayout into several components: clash-planets, clash-characters, scores...
// and stop tricking with alias: []
const routes: RouteRecordRaw[] = [{
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [{path: '', component: () => import('pages/Index.vue')}],
        alias: ["/", "/planets", "/characters", "/scores/planets", "/scores/characters"]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue'),
    },
];

export default routes;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CarDetails from "../views/CarDetails.vue";

const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: HomePage,
            name: 'Home Page',
        },
        {
            path: '/carDetails',
            component: CarDetails,
            name: 'Car Details',
        },
    ],
    scrollBehavior() {
        return { top: 0 };
    },
});

// router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//         if (!isLogged) {
//             next("/logowanie");
//         } else {
//             store.commit('resetNewsData');
//             next();
//         }
//     } else {
//         store.commit('resetNewsData');
//         next();
//     }
// });

export default router;

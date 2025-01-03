import {createWebHashHistory, createRouter } from "vue-router";

const routes = [
    {
        name: "core-info",
        path:"/core-info",
        component: () => import("@/components/CoreInfo.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes   
})

export default router;
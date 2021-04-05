import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/h",
    component: () => import("@/views/Example01/helloworld.vue")
  },
  {
    path: "/example01",
    component: () => import("@/views/Example01/example01.vue")
  },
  {
    path: "/example01-02",
    component: import("@/views/Example01/example01-02.vue")
  },
  {
    props: true,
    path: "/example02/students/:sid/homeworks/:hid",
    component: () => import("@/views/Example02/routerPassingParameter.vue")
  },
  {
    path: "/example02/example02-01",
    component: () => import("@/views/Example02/example02-01.vue")
  },
  {
    path: "/example02/example02-02",
    component: () => import("@/views/Example02/example02-02.vue")
  },
  {
    props: true,
    path: "/example02/students/:sid/homeworks/:hid",
    component: () => import("@/views/Example02/example02-03.vue")
  },
  {
    path: "/example03/example03-01",
    component: () => import("@/views/Example03/example03-01.vue")
  },
  {
    path: "/example03/example03-02",
    component: () => import("@/views/Example03/example03-02.vue")
  },
  {
    path: "/example03/example03-03",
    component: () => import("@/views/Example03/example03-03.vue")
  },
  {
    path: "/example03-04",
    component: () => import("@/views/Example03/example03-04.vue")
  },
  {
    path: "/example04-01",
    component: () => import("@/views/Example04/example04-01.vue")
  },
  {
    path: "/example04-02",
    component: () => import("@/views/Example04/example04-02.vue")
  },
  {
    path: "/example05-01",
    component: () => import("@/views/Example05/example05-01.vue")
  },
  {
    path: "/example05-02",
    component: () => import("@/views/Example05/example05-02.vue")
  },
  {
    path: "/example05-03",
    component: () => import("@/views/Example05/example05-03.vue")
  },
  {
    path: "/example05-04",
    component: () => import("@/views/Example05/example05-04.vue")
  },
  {
    path: "/example06-01",
    component: () => import("@/views/Example06/example06-01.vue")
  },
  {
    path: "/example06-02",
    component: () => import("@/views/Example06/example06-02.vue")
  },
  {
    path: "/homework01",
    component: () => import("@/views/homework01/homework-01.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

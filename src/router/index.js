import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/melhor",
    name: "Melhor",
    component: () => import('@/views/melhor.vue')
  },
  {
    path: "/norte",
    name: "Norte",
    component: () => import('@/views/bairro-norte.vue')
  },
  {
    path: "/sul",
    name: "Sul",
    component: () => import('@/views/bairro-sul.vue')
  },
  {
    path: "/lagoa",
    name: "Lagoa",
    component: () => import('@/views/bairro-lagoa.vue')
  },
  {
    path: "/atracoes",
    name: "Atrações",
    component: () => import('@/views/atracoes.vue')
  },
  {
    path: "/restaurantes",
    name: "Restaurantes",
    component: () => import('@/views/cat-restaurantes.vue')
  },
  {
    path: "/hoteis",
    name: "Hotéis",
    component: () => import('@/views/cat-hoteis.vue')
  },
  {
    path: "/servicos",
    name: "Serviços",
    component: () => import('@/views/cat-servicos.vue')
  },
  {
    path: "/busca",
    name: "Busca",
    component: () => import('@/views/busca.vue')
  },   
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;

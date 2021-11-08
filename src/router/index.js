import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home/hot",
  },
  {
    path: "/home",
    component: () => import("../views/Home"),
    children: [
      {
        path: "/home/cinema",
        component: () => import("../components/Cinema/Cinema"),
        props({ query: { homeIndex, title } }) {
          return { homeIndex, title };
        },
      },
      {
        path: "/home/wait",
        component: () => import("../components/Cinema/Wait"),
        props({ query: { homeIndex, title } }) {
          return { homeIndex, title };
        },
      },
      {
        path: "/home/classic",
        component: () => import("../components/Cinema/Classic "),
        props({ query: { homeIndex, title } }) {
          return { homeIndex, title };
        },
      },
      {
        path: "/home/hot",
        component: () => import("../components/Cinema/Hot"),
      },
      {
        path: "/home/video",
        component: () => import("../components/Video/Video"),
        props({ query: { homeIndex, title } }) {
          return { homeIndex, title };
        },
      },
      {
        path: "/home/miniVideo",
        component: () => import("../components/MiniVideo/MiniVideo"),
        props({ query: { homeIndex, title } }) {
          return { homeIndex, title };
        },
      },
    ],
  },
  {
    path: "/detail",
    component: () => import("../views/Detail"),
    props({ query: { movieid } }) {
      return { movieid };
    },
  },
  {
    path: "/address",
    component: () => import("../views/Address"),
  },
  {
    path: "/login",
    component: () => import("../views/Login"),
  },
  {
    path: "/Show",
    component: () => import("../views/Show"),
  },
  {
    path: "/mine",
    component: () => import("../views/Mine"),
  },

  {
    path: "*",
    component: () => import("../views/NotFound"),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  next();
});

export default router;

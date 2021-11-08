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
        meta: { title: "影院票房_电影购票_评分_选座_经典影视推荐-猫眼电影" },
        props({ query: { footerIndex, title } }) {
          return { footerIndex, title };
        },
      },
      {
        path: "/home/miniVideo",
        component: () => import("../components/MiniVideo/MiniVideo"),
        meta: { title: "影院票房_电影购票_评分_选座_经典影视推荐-猫眼电影" },
        props({ query: { footerIndex, title } }) {
          return { footerIndex, title };
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
    meta: {
      needlogin: true,
    },
  },
  {
    path: "/mine",
    component: () => import("../views/Mine"),
    meta: {
      needlogin: true,
    },
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
  if (to.meta.needlogin) {
    if (!Number(localStorage.getItem("logined")) == 1) {
      next("/login");
    }
  }
  next();
});
router.afterEach((to, from) => {
  if (to.path == "/home/miniVideo" || to.path == "/home/video") {
    document.title = to.meta.title;
  } else {
    document.title = "猫眼电影 - 娱乐看猫眼";
  }
});
export default router;

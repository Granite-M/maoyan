import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Address from "../views/Address.vue";
import Vedio from "../views/Vedio.vue";
import test from "../components/Home/test.vue";
import MyList from "../components/Home/MyList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    redirect: "/home/MyList",
    children: [
      {
        path: "MyList",
        name: "MyList",
        component: MyList,
      },
      {
        path: "test",
        name: "test",
        component: test,
        props({ query: { index, title } }) {
          return { index, title };
        },
      },
    ],
  },
  {
    path: "/Address",
    name: "Address",
    component: Address,
  },
  {
    path: "/Vedio",
    name: "Vedio",
    component: Vedio,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //     const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
  },
];

const router = new VueRouter({
  routes,
});

export default router;

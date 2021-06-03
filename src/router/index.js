import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/pages/Home";
import List from "@/components/pages/List";
import Details from "@/components/pages/Details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/drone-list",
    name: "DroneList",
    component: List,
  },
  {
    path: "/drone-details/:id",
    name: "DroneDetails",
    component: Details,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

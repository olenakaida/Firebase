import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Meetings from "../views/Meetings.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path:"/",
      name:"home",
      component: Home
    },
    {
      path:"/login",
      name:"login",
      component: Login
    },
    {
      path:"/meetings",
      name:"meetings",
      component: Meetings
    },
    {
      path:"/register",
      name:"register",
      component: Register
    },
    {
      path:"*",
      redirect: "/"
    },
  ]
});
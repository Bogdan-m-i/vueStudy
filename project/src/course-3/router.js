import { createRouter, createWebHistory } from "vue-router";
import Tasks from "./views/Tasks";
import Task from "./views/Task";
import New from "./views/New";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/task/:id', component: Task, props: true },
    { path: '/new', component: New },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/tasks/new",
    name: "tasks-new",
    component: () => import("@/components/TaskForm.vue"),
  },
  {
    path: "/tasks/:id",
    name: "task-details",
    component: () => import("@/components/TaskDetail.vue"),
  },
  {
    path: "/",
    alias: "/Recipes",
    name: "feed",
    component: () => import("@/components/RecipesFeed.vue"),
  },
  {
    path: "/Recipes/:id",
    name: "Recipe-details",
    component: () => import("@/components/RecipeView.vue"),
  },
  {
    path: "/RecipesEdit/:id",
    name: "Recipe-edit",
    component: () => import("@/components/RecipeEdit.vue"),
  },
  {
    path: "/Recipe/new",
    name: "Recipe-new",
    component: () => import("@/components/RecipeForm.vue"),
  },
];

const router = createRouter({
    history: createWebHistory() ,
    routes,
})

export default router;
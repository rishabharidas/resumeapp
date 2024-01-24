/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/HomePage.vue";
import ResumeHome from "./components/ResumeHome.vue";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumeHome,
    },
  ],
});

registerPlugins(app);
app.use(router);

app.mount("#app");

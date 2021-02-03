<template>
  <div id="app">
    <router-link to="/exercise">Exercise</router-link>
    <router-link to="/page2">page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Exercise from "./Exercise.vue";
import VueRouter from "vue-router";
import Page2 from "./Page2.vue";

const routes = [
  {
    path: "/exercise",
    component: Exercise,
  },
  {
    path: "/page2",
    component: Page2,
  },
];

export default {
  router: new VueRouter({ routes }),
  mounted() {
    console.log(this.$route);
  },
  watch: {
    $route: function (to, from) {
      console.log(to, from);
    },
  },
};
</script>

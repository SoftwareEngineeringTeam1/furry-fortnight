<template>
  <v-app>
    <v-app-bar app color="#02183d" dark>
      <v-toolbar-title>FIU Pavement</v-toolbar-title>
    </v-app-bar>
    <v-content style="padding: 0px">
      <v-container style="padding: 0px">
        <router-view />
      </v-container>
    </v-content>
    <v-footer app color="#02183d">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Home from "./views/Home/Home.vue";

export default {
  name: "App",
  components: {
    Home
  },
  data: () => ({
    //
  })
};
</script>

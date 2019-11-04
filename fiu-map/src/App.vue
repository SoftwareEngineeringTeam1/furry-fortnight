<template>
  <v-app>
    <v-app-bar app color="rgb(231,75,74)" dark>
      <v-toolbar-title>
        <span>
          <strong>FIU PAVEMENT</strong>
        </span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn to="/" text v-if="!LogInStatus">HOME</v-btn>
        <v-btn to="/about" v-if="!LogInStatus" text>ABOUT</v-btn>
        <v-btn @click="View()" v-if="LogInStatus" text> List View</v-btn> 
      </v-toolbar-items>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
import Home from "./views/Home/Home.vue";
import About from "./components/About/About.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Home,
    About
  },
  computed: {
    ...mapGetters(["LogInStatus", "ShowList"])
  },
  methods: {
    ...mapActions(["changeView"]),
    View() {
      this.changeView();
      //this.updateUserInfo(this.username, this.password);
    }
  },

  data: () => ({
    
  })
};
</script>

<style>
/*
html {
    overflow: hidden;
    height: 100%;
}

body {
    height: 100%;
    overflow: auto;
}*/
</style>
<template>
  <v-app>

    <v-app-bar app color="rgb(231,75,74)" dark>
      <v-toolbar-title >
        <span><strong>FIU PAVEMENT</strong></span> 
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text>HOME</v-btn>
        <v-btn text>ABOUT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <router-view />
    <!--
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>-->

    
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
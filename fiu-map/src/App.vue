<template>
  <v-app>

    <v-app-bar app color="#02183d" dark>
      <v-toolbar-title >
        <span style="color: #D79922"><strong>FIU </strong></span> 
        <span style="color: #F13C20"><strong>PAVEMENT</strong></span>
      </v-toolbar-title>
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
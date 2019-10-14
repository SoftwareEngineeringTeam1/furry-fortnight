<template>
  <v-app>
    <v-content fluid>
      <v-container class="fill-height" fluid>
        <v-navigation-drawer dark width="20%" permanent>
          <v-text-field style="margin: 5%" single-line outlined label="Search"></v-text-field>
          <v-overflow-btn
            outlined
            dark
            style="margin: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Category"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-overflow-btn
            outlined
            style="margin: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Location"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-overflow-btn
            outlined
            style="margin: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Time"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-overflow-btn
            outlined
            style="margin: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Organization"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-checkbox style="margin-left: 15%" v-model="disabled" class="mx-2" label="Show Full Events"></v-checkbox>
        </v-navigation-drawer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>
<style src="./EventPage.css"></style>
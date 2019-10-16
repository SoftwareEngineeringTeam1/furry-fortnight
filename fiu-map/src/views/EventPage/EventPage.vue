<template>
  <v-app>
    <v-content fluid>
      <v-container class="fill-height" fluid>
        <v-navigation-drawer dark width="20%" permanent>
          <v-card>
            <v-text-field dense style="margin: 5%" single-line outlined label="Search"></v-text-field>
          </v-card>
          <v-overflow-btn
            dense
            outlined
            dark
            style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Category"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-overflow-btn
            dense
            outlined
            style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Organization"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-overflow-btn
            dense
            outlined
            style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Location"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-overflow-btn
            dense
            outlined
            style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
            class="my-2"
            :items="dropdown_edit"
            label="Time"
            editable
            item-value="text"
          ></v-overflow-btn>
          <v-date-picker
            full-width
            style="margin-left: 5%; margin-right: 5%"
            v-model="picker"
            landscape
          ></v-date-picker>
          <v-btn>hi</v-btn>
        </v-navigation-drawer>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>
<style src="./EventPage.css"></style>
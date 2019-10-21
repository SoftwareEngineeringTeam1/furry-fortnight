<template>
  <v-app>
    <v-content fluid>
      <v-container class="fill-height" fluid>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <NewEvent @clicked="onClickChild" />
        </v-dialog>
        <v-navigation-drawer dark width="22%" permanent>
          <v-card>
            <v-text-field
              dense
              style="margin: 5%"
              single-line
              outlined
              label="Search By Event Name"
            ></v-text-field>
          </v-card>
          <v-form>
            <v-select
              multiple
              single-line
              clearable
              dense
              outlined
              dark
              style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
              class="my-2"
              :items="Categories"
              v-model="SelectedCategories"
              label="Category"
              item-value="text"
            >
              <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
                <span v-if="index === 1">, {{ item }}</span>
                <span v-if="index === 2">, {{ item }}</span>
                <span
                  v-if="index === 3"
                  class="grey--text caption"
                >(+{{ SelectedCategories.length - 3 }} others)</span>
              </template>
            </v-select>
            <v-select
              multiple
              single-line
              clearable
              dense
              outlined
              style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
              class="my-2"
              :items="Organizations"
              v-model="SelectedOrganizations"
              label="Organization"
              item-value="text"
            >
              <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
                <span v-if="index === 1">, {{ item }}</span>
                <span v-if="index === 2">, {{ item }}</span>
                <span
                  v-if="index === 3"
                  class="grey--text caption"
                >(+{{ SelectedOrganizations.length - 3 }} others)</span>
              </template>
            </v-select>
            <v-select
              multiple
              clearable
              single-line
              dense
              outlined
              style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
              class="my-2"
              :items="Locations"
              v-model="SelectedLocations"
              label="Location"
              item-value="text"
            >
              <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
                <span v-if="index === 1">, {{ item }}</span>
                <span v-if="index === 2">, {{ item }}</span>
                <span
                  v-if="index === 3"
                  class="grey--text caption"
                >(+{{ SelectedLocations.length - 3 }} others)</span>
              </template>
            </v-select>
            <v-select
              multiple
              clearable
              single-line
              dense
              outlined
              style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
              class="my-2"
              :items="Times"
              v-model="SelectedTimes"
              label="Time"
              item-value="text"
            >
              <template v-slot:selection="{ item, index }">
                <span v-if="index === 0">{{ item }}</span>
                <span v-if="index === 1">, {{ item }}</span>
                <span v-if="index === 2">, {{ item }}</span>
                <span
                  v-if="index === 3"
                  class="grey--text caption"
                >(+{{ SelectedTimes.length - 3 }} others)</span>
              </template>
            </v-select>
            <v-date-picker
              full-width
              style="margin-left: 5%; margin-right: 5%"
              v-model="picker"
              no-title
            ></v-date-picker>
          </v-form>
          <v-card style="margin-top: 5%" flat align="center" justify="center">
            <v-btn style="margin-right:5px" large dark color="rgb(231,75,74)">Search</v-btn>
            <v-btn
              @click="reset()"
              outlined
              style="margin-left:5px"
              large
              dark
              color="rgb(231,75,74)"
            >Reset</v-btn>
          </v-card>
          <v-card style="margin-top: 5%" flat align="center" justify="center">
            <v-icon @click="newEvent()" size="75" color="rgb(231,75,74)">add_circle</v-icon>
          </v-card>
        </v-navigation-drawer>
        <v-container>
          <Table />
        </v-container>
      </v-container>
    </v-content>
  </v-app>
</template>

<script src="./EventPage.js"></script>
<style src="./EventPage.css"></style>
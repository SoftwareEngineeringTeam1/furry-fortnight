<template>
  <v-list id="list" three-line>
    <template v-for="item in FilteredEventList">
      <v-list-item :key="item.Id" @click="viewEvent(item.Id)">
        <v-list-item-content>
          <v-list-item-title style="font-size: 20px; font-weight:bold" v-html="item.Name"></v-list-item-title>
          <v-list-item-content>
            <v-row>
              <v-col>
            <v-list-item-title v-html="'Location: ' + item.Location"></v-list-item-title>
              </v-col>
              <v-col>
                <v-list-item-title v-html="'Time: ' + item.StartTime + '-' +item.EndTime"></v-list-item-title>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    selectedEvent: null,
    selectedID: 0,
  }),
  methods: {
    ...mapActions(["fetchEvent"]),
    viewEvent(itemId) {
      this.selectedEvent = this.$store.getters.FilteredEventList;
      this.selectedID = itemId;
      this.selectedEvent = this.selectedEvent.filter(this.eventId);
      this.fetchEvent(this.selectedEvent[0]);
    },
    eventId(value) {
      return value.Id == this.selectedID;
    },
  },
  computed: {
    ...mapGetters(["FilteredEventList", "Event"])
  }
};
</script>

<style>
#list {
  overflow-y: scroll;
  height: 800px;
  width: 100%;
  background-color: rgba(256, 256, 256, .5);
}
body {background-color: rgba(201, 76, 76, 0.3);}
</style>

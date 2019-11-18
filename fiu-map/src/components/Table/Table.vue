<template>
  <v-list id="list" three-line>
    <template v-for="item in FilteredEventList">
      <v-list-item :key="item.Id" @click="viewEvent(item.Id)">
        <v-list-item-content>
          <v-list-item-title v-html="item.Name"></v-list-item-title>
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
      console.log(this.selectedID);
      this.selectedEvent = this.selectedEvent.filter(this.eventId);
      console.log(this.selectedEvent);
      this.fetchEvent(this.selectedEvent[0]);
    },
    eventId(value) {
      console.log(value.Id)
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
}
</style>

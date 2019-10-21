import { mapGetters, mapActions } from "vuex";
import NewEvent from "../../components/NewEvent/NewEvent.vue";
import Table from "../../components/Table/Table.vue";
import Map from "../../components/Map/Map.vue";

export default {
  name: "EventPage",
  props: {
    source: String
  },
  components: {
    NewEvent,
    Table,
    Map
  },
  computed: {
    ...mapGetters(["Categories", "Locations", "Organizations", "Times", "Date"])
  },
  methods: {
    ...mapActions([
      "updateCategories",
      "updateLocations",
      "updateOrganizations",
      "updateTimes",
      "updateDate"
    ]),
    reset() {
      this.SelectedCategories = [];
      this.SelectedLocations = [];
      this.SelectedOrganizations = [];
      this.SelectedTimes = [];
    },
    newEvent(){
      this.dialog = true;
    },
    onClickChild (value) {
      console.log(value) // someValue
    }
  },
  data: () => ({
    SelectedCategories: [],
    SelectedLocations: [],
    SelectedOrganizations: [],
    SelectedTimes: [],
    picker: new Date().toISOString().substr(0, 10),
    dialog: false
  })
};

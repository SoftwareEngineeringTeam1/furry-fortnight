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
    ...mapGetters([
      "Categories",
      "Locations",
      "Organizations",
      "Date",
      "EventList"
    ]),
    iconCategory() {
      if (
        this.SelectedCategories.length == this.$store.getters.Categories.length
      )
        return "mdi-close-box";
      return "mdi-checkbox-blank-outline";
    },
    iconOrganization() {
      if (
        this.SelectedOrganizations.length ==
        this.$store.getters.Organizations.length
      )
        return "mdi-close-box";
      return "mdi-checkbox-blank-outline";
    },
    iconLocation() {
      if (this.SelectedLocations.length == this.$store.getters.Locations.length)
        return "mdi-close-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  methods: {
    ...mapActions([
      "updateCategories",
      "updateLocations",
      "updateOrganizations",
      "updateDate"
    ]),
    allowedHours: v => v >= 8 && v <= 22,
    allowedMinutes: v => !(v % 15),
    allowedDates(val) {
      if (
        parseInt(val.split("-")[1], 10) >= parseInt(this.today.split("-")[1], 10) &&
        parseInt(val.split("-")[1], 10) <= parseInt(this.today.split("-")[1], 10) + 1
      )
        return true;
      else return false;
    },
    search() {
      this.SelectedEventList = this.$store.getters.EventList;
      this.SelectedEventList = this.SelectedEventList.filter(this.category);
      this.SelectedEventList = this.SelectedEventList.filter(this.organization);
      this.SelectedEventList = this.SelectedEventList.filter(this.location);
      //this.SelectedEventList = this.SelectedEventList.filter(this.sTime);
    },
    category(value) {
      return this.SelectedCategories.includes(value.Category);
    },
    organization(value) {
      return this.SelectedOrganizations.includes(value.Organization);
    },
    location(value) {
      return this.SelectedLocations.includes(value.Location);
    },
    sTime(value) {
      return value >= this.startTime;
      /*
      var startHour = parseInt(this.startTime.split(":")[0]);
      var startMin = parseInt(this.startTime.split(":")[1].split(" ")[0])/60;
      if(this.startTime.split(":")[1].split(" ")[1].equals("PM"))
        startHour += 12;
      
      var start = startHour + startMin;

      var valHour = parseInt(this.value.split(":")[0]);
      var startMin = parseInt(this.startTime.split(":")[1].split(" ")[0])/60;
      if(this.startTime.split(":")[1].split(" ")[1].equals("PM"))
        startHour += 12;
      
      return this.startTime*/
    },
    toggleCategories() {
      if (
        this.SelectedCategories.length != this.$store.getters.Categories.length
      ) {
        this.SelectedCategories = this.$store.getters.Categories;
      } else this.SelectedCategories = [];
    },
    toggleOrganizations() {
      if (
        this.SelectedOrganizations.length !=
        this.$store.getters.Organizations.length
      )
        this.SelectedOrganizations = this.$store.getters.Organizations;
      else this.SelectedOrganizations = [];
    },
    toggleLocations() {
      if (this.SelectedLocations.length != this.$store.getters.Locations.length)
        this.SelectedLocations = this.$store.getters.Locations;
      else this.SelectedLocations = [];
    },
    reset() {
      this.SelectedCategories = [];
      this.SelectedLocations = [];
      this.SelectedOrganizations = [];
      this.startTime = null;
      this.endTime = null;
    },
    newEvent() {
      this.dialog = true;
    },
    onClickChild(value) {
      console.log(value); // someValue
    }
  },
  created() {
    this.SelectedEventList = this.$store.getters.EventList;
  },
  data: () => ({
    SelectedCategories: [],
    SelectedLocations: [],
    SelectedOrganizations: [],
    picker: new Date().toISOString().substr(0, 10),
    dialog: false,
    SelectedEventList: [],
    startTime: null,
    endTime: null,
    startMenu: false,
    endMenu: false,
    fullEvents: false,
    today: new Date().toISOString().substr(0, 10)
  })
};

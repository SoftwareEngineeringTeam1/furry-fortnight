import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "NewEvent",
  data: () => ({
    snackbar: false,
    SelectedCategory: null,
    SelectedLocation: null,
    startTime: "08:00:00",
    endTime: "22:00:00",
    location: "ECS",
    capacity: 0,
    datePicker: new Date().toISOString().substr(0, 10),
    today: new Date(),
    comment: "",
    valid: false,
    eventName: "",
    timeout: 4000,
    eventNameRules: [
      v => !!v || "Name is required",
      v => v.length <= 30 || "Name must be less than 30 characters"
    ],
    capacityRules: [
      v => !!v || "Capacity is required",
      v => v <= 500 || "Capacity must be less than 500",
      v => v > 0 || "Capacity must be greater than 0"
    ],
    textAreaRules: [
      v => v.length <= 150 || "Comment must be less than 150 characters"
    ],
    categoryRules: [[v => !!v || "You must select a category"]],
    locationRules: [[v => !!v || "You must select a location"]]
  }),
  methods: {
    ...mapActions(["fetchEvent", "changeNewEventDialog", "updateFilteredEventList"]),
    ...mapMutations(["pushEventList", "pushFilteredEventList"]),
    onClickButton(event) {
      this.$emit("clicked", "false");
    },
    allowedDates(val) {
      var threeMonthsLater = new Date();
      threeMonthsLater.setMonth(this.today.getMonth() + 3);

      if (
        val >= this.today.toISOString().substr(0, 10) &&
        val <= threeMonthsLater.toISOString().substr(0, 10)
      )
        return true;
      else return false;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        /*var newEvent = {
          Name: this.eventName,
          User: "superUser",
          Organization: "Git Club",
          Category: this.SelectedCategory,
          Location: this.SelectedLocation,
          Capacity: parseInt(this.capacity),
          StartTime: this.startTime,
          EndTime: this.endTime,
          Date: this.datePicker,
          Comment: this.comment
        };*/
        var newEvent = {
      Id: 100,
      Name: this.eventName,
      User: "gagos007",
      Organization: "Student",
      Category: this.SelectedCategory,
      Coordinates: [-80.376131, 25.757444],
      Location: this.SelectedLocation,
      Attending: 0,
      Capacity: this.capacity,
      StartTime: this.startTime,
      EndTime: this.endTime,
      Date: this.datePicker,
      Comment: this.comment,
      Color: '#CC0000'
    }
        //this.fetchEvent(newEvent);
        this.$store.commit("pushFilteredEventList", newEvent);
        this.reset();
        //this.changeNewEventDialog();
        this.close();
      }
    },
    reset() {
      this.$refs.form.resetValidation()
      this.SelectedCategory = null;
      this.SelectedLocation = null;
      this.startTime = "08:00:00";
      this.endTime = "22:00:00";
      this.capacity = 0;
      this.datePicker = new Date().toISOString().substr(0, 10);
      this.comment = "";
      this.valid = false;
      this.eventName = "";
    },
    close(){
      this.reset();
      this.changeNewEventDialog();
    },
    recordEventData(){
      var rData = {
      Id: 6,
      Name: this.eventName,
      User: "gagos007",
      Organization: "Student",
      Category: this.SelectedCategory,
      Coordinates: [-80.376131, 25.757444],
      Location: this.SelectedLocation,
      Attending: 0,
      Capacity: this.capacity,
      StartTime: this.startTime,
      EndTime: this.endTime,
      Date: this.datePicker,
      Comment: this.comment,
      Color: '#CC0000'
    }
      console.log(this.$store.getters.FilteredEventList);
      this.$store.commit("pushFilteredEventList", rData);
      console.log(this.$store.getters.FilteredEventList);
    }
  },
  computed: {
    ...mapGetters(["Event", "UserInfo", "Categories", "Locations"])
  }
};

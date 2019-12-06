import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "ViewEvent",
  methods: {
    ...mapActions(["fetchEvent", "changeViewEventDialog"]),
    popUpClose() {
        this.changeViewEventDialog();
    }
  },
  computed: {
    ...mapGetters(["Event"])
  }
};

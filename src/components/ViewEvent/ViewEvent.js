import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "ViewEvent",
  methods: {
    ...mapActions(["fetchEvent", "changeViewEventDialog"]),
    pp2() {
        console.log('print form view');
        this.changeViewEventDialog();
    },
  },
  computed: {
    ...mapGetters(["Event"])
  }
};

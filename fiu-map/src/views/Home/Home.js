import About from "../../components/About/About.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  props: {
    source: String
  },
  components: {
    About
  },
  computed: {
    ...mapGetters(["logInState", "userInfo"])
  },
  methods: {
    ...mapActions(["changeLoginState"]),

    Login() {
      this.changeLoginState();
      //this.updateUserInfo(this.username, this.password);
    }
  },
  data: () => ({
    drawer: null,
  })
};

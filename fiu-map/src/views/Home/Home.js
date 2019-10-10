import SignIn from "../../components/SignIn/SignIn.vue";
import About from "../../components/About/About.vue";

export default {
  name: "Home",
  props: {
    source: String
  },
  components: {
    SignIn,
    About
  },
  data: () => ({
    drawer: null
  })
};

// index.html에 Vue CDN으로 Vue 글로벌 객체 접근이 가능
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
// id app에 마운트
}).mount("#app");

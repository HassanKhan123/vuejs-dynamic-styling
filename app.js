const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed:{
    boxCClasses(){
        console.log('áaa')
        return {active:this.boxCSelected}
    }
  },
  methods: {
    boxSelect(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (box === 'B') {
        this.boxBSelected = !this.boxBSelected;
      }
      if (box === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount('#styling');

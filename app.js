const app = Vue.createApp({
    data(){
        return{
            boxASelected:false,
            boxBSelected:false,
            boxCSelected:false,
        }
    },
    methods:{
        boxSelect(box){
            if(box === 'A'){
                this.boxASelected=true
            }
            else if(box === 'B'){
                this.boxBSelected=true
            }
            if(box === 'C'){
                this.boxCSelected=true
            }
        }
    }
})

app.mount('#styling')
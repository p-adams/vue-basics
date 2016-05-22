Vue.component('message',{
    template: '<input v-model="message" @keyup.enter="storeMessage">',
    data: function(){
        return {message: ''};
    },
    methods:{
        storeMessage: function(){
            //console.log('Storing ' + this.message);
            this.$dispatch('new-message', this.message);
            this.message='';
        }
    }
})

new Vue({
    el: "body",
    data:{
        messages : []
    },
    methods:{
        handleNewMessage: function(message){
          this.messages.push(message);  
        }
    }
});
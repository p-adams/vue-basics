const fetchesUser = {
    methods: {
        fetchUser(){
            alert('fetch the user');
        }
    }
};
new Vue({
   el: 'body',
   mixins: [fetchesUser],
   ready(){
       this.fetchUser();
   } 
});
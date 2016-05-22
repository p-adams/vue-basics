new Vue({
    el: 'body',
    data: {
        points: 100
    },
    // logic goes inside computed properties?
    computed: {
        skill: function(){
            if(this.points <= 100){
                return 'Beginner';
            }
            return 'Advanced';
        }
    }
})
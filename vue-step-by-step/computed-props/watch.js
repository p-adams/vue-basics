new Vue({
    el: 'body',
    data: {
        first: 'Mahmud',
        last: 'Adams',
    },
    computed:{
        fullName: function(){
            return this.first + ' ' + this.last;
        }
    }
    /*
    an example of watch (not a good thing to use...
    in this sample program--use computed prop)
    watch:{
        first: function(first){
           this.fullName = first + ' ' + this.last;
        },
        last: function(last){
            this.fullName = this.first + ' ' + last;
        }
      
    }*/
})
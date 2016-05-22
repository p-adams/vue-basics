

new Vue({
    el: "#app",
    data: {
        plans:[
            {name: 'Enterprise', price: 100},
            {name: 'Pro', price: 50},
            {name: 'Personal', price: 10},
            {name: 'Free', price: 0},
        ],
        active:{}
    },
    components:{
        plan:{
            template: '#plan-template',
            props: ['plan', 'active'],
            
            computed: {
              isUpgrade: function(){
                  return this.plan.price > this.active.price;
                  //this.plan.price vs
                  //this.active.plan
              }  
            },
            
            methods:{
                setActivePlan: function(){
                    this.active = this.plan;
                }
            }
        }
    }
   
});
//-7.59
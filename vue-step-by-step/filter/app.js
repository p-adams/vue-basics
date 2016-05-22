Vue.filter( 'role', function(value, role){
    return value.filter(function(item){
      return item.role == role;  
    })
})

new Vue({
    el: "body",
    data:{
        people: [
            {name: 'jim', role: 'sales'},
            {name: 'michael', role: 'boss'},
            {name: 'kevin', role: 'accounting'},
            {name: 'toby', role: 'HR'},         
        ]
    }
})
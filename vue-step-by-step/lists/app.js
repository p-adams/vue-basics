new Vue({
    el: '#app',
    data:{
        //filter through tasks
        //and display them on page
        //but instead of array of strings
        //we have an arry of objects
        tasks:[
            {body: 'Go to store', completed: false},
            {body: 'Go to library', completed: true},
            {body: 'Go shred', completed: false}
        ]
    },
    methods:{
        toggleTask: function(task){
            task.completed = ! task.completed;
            //could also do in-line @click="task.completed = ! task.completed"
        }
    }
})
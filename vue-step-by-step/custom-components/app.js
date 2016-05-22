Vue.component('tasks', {
    props: ['list'],
    template: '#tasks-template'
})

new Vue({
    el: '#app',
    data:{
        tasks:[
            {body: 'Go to store', completed: false},
            {body: 'Go to library', completed: true},
            {body: 'Go shred', completed: false}
        ]
    }
});
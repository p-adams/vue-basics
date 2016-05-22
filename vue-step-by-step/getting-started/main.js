// the model
const authorModel = {
    name: 'Imam al Nawawi',
    title: 'Minhaj al Talibin',
    commentaries : [
        {name: "Khatib Shirbini", title: "Mughni -l Muhtaj"},
        {name: "Ibn Hajar", title: "Tuhfat al Muhtaj"},
        {name: "Shams al Ramli", title: "Nihayat al Muhtaj"}
    ]
}
// the view-model: binds model and view together
const authorViewModel = new Vue({
    el: "#myView", //view
    data: authorModel, //model
    methods: {
        aClickHandler: function(e){
            alert(this.name + " is the author of Minhaj");
        }
    }
});

Vue.transition('fade', {
    enterClass: 'flipInX',
    leaveClass: 'fadeOutLeft'
})
new Vue({
   el: "body",
    data:{
        show:true
    }
});
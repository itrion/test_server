$(document).ready(function () {
    configureEvents();
});

function configureEvents() {
    $(".login-form").submit(Controller.doLogin);
}

var Controller = {
    doLogin: function(event){
        event.preventDefault();
    }
}
(function (global) {
    var app = global.app = global.app || {};

    //Azure : jackytodo Site
    //var serviceUrl = "http://jackytodo.azurewebsites.net/api/";

    //Azure : jackytodoPro Site
    //var serviceUrl = "http://jackytodoPro.azurewebsites.net/api/";

    //本機開發 Site
    var serviceUrl = "http://localhost:51286/api/";

    app.config = {
        todoItemsUrl: serviceUrl + "TodoItems/"
    };
})(window)
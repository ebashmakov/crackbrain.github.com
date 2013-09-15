define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {
    return {
        router: router,
        links: ko.observableArray([]),
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'about', title:'About me', moduleId: 'viewmodels/about', nav: true },
                { route: 'contacts', title:'Contact me', moduleId: 'viewmodels/contact', nav: true },
                { route: 'portfolio', title:'My projects', moduleId: 'viewmodels/portfolio', nav: true }
            ]).buildNavigationModel();
            
            var that = this;
            if (this.links().length == 0) {                            
               $.getJSON(app.dataSources["links"], function (data) {
                   that.links(data);
                   app.links = that.links;
                });
            }

            return router.activate();
        }
    };
});
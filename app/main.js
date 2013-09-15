requirejs.config({
    paths: {
        'text': '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text.min',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': '//cdnjs.cloudflare.com/ajax/libs/knockout/2.3.0/knockout-min',
        'bootstrap': '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min',
        'jquery': '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {
    app.title = 'Evgeniy Bashmakov';

    app.dataSources = {
        "projects": "data/projects.json",
        "links": "data/links.json"
    };

    app.configurePlugins({
        router: true
    });

    app.start().then(function () {
        viewLocator.useConvention();
        app.setRoot('viewmodels/shell', 'entrance');
    });
});
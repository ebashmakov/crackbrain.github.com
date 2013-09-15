define(['jquery', 'durandal/app', 'knockout'], function ($, app, ko) {

    return {
        displayName: 'My projects',
        projects: ko.observableArray([]),
        activate: function () {
            if (this.projects().length > 0) {
                return;
            }

            var that = this;
            $.getJSON(app.dataSources["projects"], function (data) {
                that.projects(data);
            });
        },
        select: function (item) {

        }
    };
});
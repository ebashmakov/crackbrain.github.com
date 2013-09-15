define(['durandal/app'], function (app) {
    return {
        displayName: 'Welcome!',
        photoUrl: app.links()["photo"],
        email: app.links()["email"]
    };
});
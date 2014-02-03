(function() {

/// <reference path="../../public/bower_components/ember/ember.js" />
var App = window.App = Ember.Application.create();


/* Order and include as you please. */


})();

(function() {

App.Store = DS.Store.extend();
App.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

/// <reference path="../../../public/bower_components/ember/ember.js" />
/// <reference path="../app.js" />
App.Photo = DS.Model.extend({
    imageTitle: DS.attr('string'),
    imageUrl: DS.attr('string')

});

App.Photo.FIXTURES = [
        {
            "id": 1,
            "imageTitle": "Bird",
            "imageUrl": "img/bird.jpg"
        }, {
            "id": "2",
            "imageTitle": "Dragonfly",
            "imageUrl": "img/dragonfly.jpg"
        }, {
            "id": "3",
            "imageTitle": "Fly",
            "imageUrl": "img/fly.jpg"
        }, {
            "id": "4",
            "imageTitle": "Frog",
            "imageUrl": "img/frog.jpg"
        }, {
            "id": "5",
            "imageTitle": "Lizard",
            "imageUrl": "img/lizard.jpg" 
        }, {
            "id": "6",
            "imageTitle": "Mountain 1",
            "imageUrl": "img/mountain.jpg"
        }, {
            "id": "7",
            "imageTitle": "Mountain 2",
            "imageUrl": "img/mountain2.jpg"
        }, {
            "id": "8",
            "imageTitle": "Panorama",
            "imageUrl": "img/panorama.jpg"
        }, {
            "id": "9",
            "imageTitle": "Sheep",
            "imageUrl": "img/sheep.jpg"
        }, {
            "id": "10",
            "imageTitle": "Waterfall",
            "imageUrl": "img/waterfall.jpg"
        }
];

})();

(function() {

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('photos');
    }
});

})();

(function() {

/// <reference path="../../../public/bower_components/ember/ember.js" />
App.PhotosRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('photo');
    }
});


})();

(function() {

App.Router.map(function () {
    this.route('search');
    this.resource("photos", { path: "/photos" }, function () {
        this.resource("photo", { path: "/:photo_id" })
    });

}); 

})();

(function() {

 
 
Handlebars.registerHelper("debug", function (optionalValue) {
    console.log("Current Context");
    console.log("====================");
    console.log(this);

    if (optionalValue) {
        console.log("Value");
        console.log("====================");
        console.log(optionalValue);
    }
});

})();
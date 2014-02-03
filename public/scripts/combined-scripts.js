(function() {

/// <reference path="../../public/bower_components/ember/ember.js" />
var App = window.App = Ember.Application.create();


/* Order and include as you please. */


})();

(function() {

/// <reference path="../app.js" />
/// <reference path="../../../public/bower_components/ember/ember.js" />
App.PhotoController = Ember.ObjectController.extend({
   
}); 

})();

(function() {

/// <reference path="../app.js" />
/// <reference path="../../../public/bower_components/ember/ember.js" />
App.PhotosController = Ember.ArrayController.extend({
    needs: ['photo'],
    slideshowTimerId: null,

    getId: function () {
        var controller = this.get('controllers.photo'); // instance of App.PhotoController
        var photo = controller.get('model');
        return photo.id;


    }, nextphoto: function () {

        var selectedIndex = this.getId() - 1;
        console.log("id:" + selectedIndex);

        if (selectedIndex >= (this.get('content.length') - 1)) {
            selectedIndex = 0;
        } else {
            selectedIndex++;
        }
        console.log("selectedIndex:" + selectedIndex);
        this.transitionToRoute("photo", this.get('content').objectAt(selectedIndex));

    },
    actions: {
        nextphoto: function () {
            this.nextphoto();
        },
        prevphoto: function () {
            var selectedIndex = this.getId() - 1;


            if (selectedIndex <= 0) {
                selectedIndex = (this.get('content.length') - 1);
            } else {
                selectedIndex--;
            }
            console.log("selectedIndex:" + selectedIndex);
            this.transitionToRoute("photo", this.get('content').objectAt(selectedIndex));
        },
        playslideshow: function () {
            console.log('playSlideshow');
            var controller = this;
            controller.nextphoto();
            this.set('slideshowTimerId', setInterval(function () {
                Ember.run(function () {
                    controller.nextphoto();
                });
            }, 4000));
        },
        stopslideshow: function () {
            console.log('stopSlideshow');
            clearInterval(this.get('slideshowTimerId'));
            this.set('slideshowTimerId', null);
        },
    }
});

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
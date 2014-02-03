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
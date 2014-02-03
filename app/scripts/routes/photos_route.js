/// <reference path="../../../public/bower_components/ember/ember.js" />
App.PhotosRoute = Ember.Route.extend({
    model: function () {
        return this.get('store').find('photo');
    }
});

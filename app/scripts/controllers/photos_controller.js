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
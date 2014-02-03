App.Router.map(function () {
    this.route('search');
    this.resource("photos", { path: "/photos" }, function () {
        this.resource("photo", { path: "/:photo_id" })
    });

}); 
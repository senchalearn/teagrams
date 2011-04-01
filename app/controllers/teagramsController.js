// Let's create a new control to wire up our model and view.
teagrams.controllers.teagramsController = new Ext.Controller({

    index: function(options) {
        teagrams.views.viewport.setActiveItem(
            teagrams.views.teagramLists, options.animation
        );
    },

    show: function(options) {
        var id = parseInt(options.id),
            gram = options.store.getById(id);

        if (gram) {
            teagrams.views.shotDetail.updateWithRecord(gram);
            teagrams.views.viewport.setActiveItem(
                teagrams.views.teagramsDetail, options.animation
            );
        }
    },

});
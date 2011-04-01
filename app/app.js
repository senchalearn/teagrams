// Let's register the name of our application.
Ext.regApplication({
    name: 'teagrams',
    launch: function() {
        this.views.viewport = new this.views.Viewport();
    }
});
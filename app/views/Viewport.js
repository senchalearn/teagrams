// The teagrams Viewport is an extension of the Ext.Panel component.
// This is "main" wrapping view.
teagrams.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    fullscreen: true,
    layout: 'fit',
    
    // Now, we initialize it.
    initComponent: function() {

        // Create new instance of the our TeagramLists component.
        teagrams.views.teagramLists = new teagrams.views.TeagramLists();

        // Let's add our view to the Viewport.
        // This is defined in the "views" folder under its respective name.
        Ext.apply(this, {
            items: [
                teagrams.views.teagramLists
            ]
        });

        // Similar to calling "super" in languages like Java.  Kicks off initialization in parent classes.
        teagrams.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
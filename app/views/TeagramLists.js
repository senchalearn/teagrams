var overlay = new Ext.Panel({
    // We'll set the image src attribute's value programmatically.
    tpl: "<tpl for='.'><div class='gram-container'><img id='current-gram' /></div></tpl>",
    floating: true,
    modal: true,
    centered: true,
    width: Ext.is.Phone ? 260 : 658,
    height: Ext.is.Phone ? 220 : 658,
    styleHtmlContent: true,
    scroll: false,
    cls: 'htmlcontent',
    loadmask: true
});


// This is the list item inside in the main list.
teagrams.views.TeagramInnerList = Ext.extend(Ext.List, {

    // Each item in the InnerList will be rendered with our imgTpl() declared in our Templates.js file.
    itemTpl: teagrams.views.imgTpl(),

    itemCls: 'shot',

    // Here's where we add the pull to refresh plugin.
    plugins: [{
        ptype: 'pullrefresh'
    }],

    // Bind our listeners to the each InnerList item.
    listeners: {
        itemtap: function (list, index, element, event) {
            // Grab a reference the record.
            var record = list.getRecord(element);

            // First, we update the the overlay with the proper record (data binding).
            overlay.update(record.data);

            // Next we show the overlay.
            overlay.show({type: 'fade', duration: 400})
            
            // Show the loading indicator.
            overlay.setLoading(true); 
            
            // Now, we grab a reference to the img element.
            var img = document.getElementById('current-gram');
            // Set the src value to the standard_res_url
            img.src = record.data.standard_res_url;
            
            // After this has loaded, let's hide the loading animation.
            img.onload = function()
            {
              overlay.setLoading(false);
            }
        }
    }

});

// Main list component.
teagrams.views.TeagramLists = Ext.extend(Ext.Panel, {
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAAdCAYAAAAQCQbgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQThFRENERDc0MUUxNTNBQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNzhFQzY2MDU0MjQxMUUwQkNGODlBQjgyRUJBNUE5RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNzhFQzY1RjU0MjQxMUUwQkNGODlBQjgyRUJBNUE5RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAxODAxMTc0MDcyMDY4MTFBOEVEQ0RENzQxRTE1M0FCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFBOEVEQ0RENzQxRTE1M0FCIi8+IDwvcmRmOkRlc2NyaXB0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" />'        
    }],
    items: [
        new teagrams.views.TeagramInnerList({
                   store: new Ext.data.Store({
                       // We provide an id for the store so it's easy to debug.
                       // You can pull it up in the console with
                       // Ext.getStore('store_tp')
                       id: 'store_tp',
                       model: 'teagrams.models.TeagramPhoto',
                       autoLoad: true,
                       proxy: {
                          type: 'scripttag',
                           // type: 'ajax',
                           // url: 'app/models/data_from_instagram_api.json'
                           url: 'https://api.instagram.com/v1/tags/tea/media/recent?access_token=2260821.f59def8.7fe0d31e791e4e62a00fc8f44b831140',
                           reader: {
                               type: 'json',
                               root: 'data'
                           }
                       }
                   })
               })
    ]
});
// Let's define some template helpers to display our data.
// 
teagrams.views.innerListItemTpl = function () {
    return "<div class='item-wrap'> " +

// using the image directly from Instagram
//    "<img class='teagram-image' width='120' height='120' src='{thumbnail_url}' />" +

// using Src to resize the image in the cloud
    "<img class='teagram-image' width='120' height='120' src='http://src.sencha.io/286/{thumbnail_url}' />" +

    "<div class='copy-wrap'><h2><span class='username'>{username}</span></h2></div>" +
    "</div>";
};
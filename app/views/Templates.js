// Let's define some template helpers to display our data.
// 
teagrams.views.innerListItemTpl = function () {
    return "<div class='item-wrap'> " +
    "<img class='teagram-image' width='120' height='120' src='http://i.tinysrc.mobi/286/{thumbnail_url}' />" +
    "<div class='copy-wrap'><h2><span class='username'>{username}</span></h2></div>" +
    "</div>";
};
// Let's register this model with our application and it to the models object associated with teagrams
// The model should reflect the json payload that is the response from the Instagram API.

// Let's grab some data from instagram and save it in file.  Always a good idea in case their API goes down while we're building the app.
// Run this in your terminal (requires the jsonpretty gem - sudo gem install jsonpretty):
// curl https://api.instagram.com/v1/tags/tea/media/recent?access_token=2260821.f59def8.7fe0d31e791e4e62a00fc8f44b831140 | jsonpretty > data_from_instagram_api.json

// We use the "mapping" method in order to drill down to nested objects in the JSON from the Instagram response.
// Also, even thought we are only actually using the username, the thumbnail_url and the standard_res_url fields in the app currently
// we may find use for these other fields in the future and of course, we can always add more.
teagrams.models.TeagramPhoto = Ext.regModel("teagrams.models.TeagramPhoto", {
    fields: [
        {name: "filter", type: "string"},
        {name: "link", type: "string"},
        {name: "username", type: "string", mapping: "user.username"},
        {name: "thumbnail_url", type: "string", mapping: "images.thumbnail.url"},
        {name: "low_res_url", type: "string", mapping: "images.low_resolution.url"},
        {name: "standard_res_url", type: "string", mapping: "images.standard_resolution.url"},
    ]
});


/*

  Here's an example of one item in the "data" array returned from the Instagram API.
  Note, our model is only interested in a few of these properties and their values and are reflect in the model.

{
  "location": {
    "name": "Ogilvy",
    "latitude": 51.5056231,
    "id": "600690",
    "longitude": -0.022592
  },
  "user_has_liked": false,
  "comments": {
    "data": [
      {
        "from": {
          "username": "stevengutierrez",
          "id": "230342",
          "full_name": "Steven Gutierrez",
          "profile_picture": "http://images.instagram.com/profiles/profile_230342_75sq_1300720942.jpg"
        },
        "text": "#tea #cup",
        "id": "57147207",
        "created_time": "1301593279"
      }
    ],
    "count": 1
  },
  "filter": null,
  "id": "42362378",
  "tags": [
    "tea",
    "cup"
  ],
  "caption": {
    "from": {
      "username": "stevengutierrez",
      "id": "230342",
      "full_name": "Steven Gutierrez",
      "profile_picture": "http://images.instagram.com/profiles/profile_230342_75sq_1300720942.jpg"
    },
    "text": "Would you?",
    "id": "53272365",
    "created_time": "1301066844"
  },
  "images": {
    "low_resolution": {
      "url": "http://images.instagram.com/media/2011/03/25/ce94c9b2bfcb45a8a53e0804f8425ac2_6.jpg",
      "height": 306,
      "width": 306
    },
    "thumbnail": {
      "url": "http://images.instagram.com/media/2011/03/25/ce94c9b2bfcb45a8a53e0804f8425ac2_5.jpg",
      "height": 150,
      "width": 150
    },
    "standard_resolution": {
      "url": "http://images.instagram.com/media/2011/03/25/ce94c9b2bfcb45a8a53e0804f8425ac2_7.jpg",
      "height": 612,
      "width": 612
    }
  },
  "created_time": "1301066829",
  "type": "image",
  "link": "http://instagr.am/p/ChmYK/",
  "user": {
    "username": "stevengutierrez",
    "id": "230342",
    "full_name": "Steven Gutierrez",
    "profile_picture": "http://images.instagram.com/profiles/profile_230342_75sq_1300720942.jpg"
  },
  "likes": {
    "data": [

    ],
    "count": 0
  }
}

*/
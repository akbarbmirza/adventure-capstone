var AventureStory = {

  // Table of Contents
  init: function() {
    this.setUpStory();
    this.bindUIEvents();
  },

  bindUIEvents: function() {

    $("body").on("click", ".choices button[name='choice']", function() {

      var choice = $(this).val();

      // value is what scene you go TO
      AventureStory._getScene(choice);

    });


  },

  _getScene: function(scene) { // scene == 1
    $.ajax({

      url: "scenes/" + scene + ".html"

    }).success(function(data) {

      $("#stage").html(data);

      AventureStory._setState(scene);

    })
  },

  _setState: function(scene) {

    // https://gist.github.com/peteboere/1517285
    $('body').alterClass("scene-*");

    $("body").addClass("scene-" + scene);

  },

  setUpStory: function() {
    this._getScene(11);
  }

}

AventureStory.init();

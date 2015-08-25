var AventureStory = {

  init: function() {
    this.setUpStory();
    this.bindUIEvents();
  },

  bindUIEvents: function() {

    $("body").on("change", ".choices input[name='choice']", function() {

      var choice = $(".choices input[name='choice']").filter(":checked").val();

      // value is what scene you go TO

      AventureStory._getScene(choice);

    });


  },

  _getScene: function(scene) { // scene == 1
    $.ajax({

      url: "scenes/" + scene + ".html"

    }).success(function(data) {

      $("#stage").html(data);

      AventureStory._updateData(scene);

      AventureStory._setState(scene);

    })
  },

  _updateData: function() {

    $(".character-name").html(Data.characterName);

  },

  _setState: function(scene) {

    console.log("test");

    $("body").removeClass("scene-1 scene-2");

    $("body").addClass("scene-" + scene);

  },

  setUpStory: function() {
    this._getScene(1);
  }

}

AventureStory.init();

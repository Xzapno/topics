$(document).ready(function() {

  // Initial array of stars

  var person = ["Rita Hayworth", "Ava Gardner", "Veronica Lake", "Betty Grable", "Jane Russel"];

  // Function to dre-render HTML to display content

  function displayGif() {
    var person = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=ZbL1cR4OhfaBwuJbNEIxp6NlFfxnwLvO&limit=10";

    // Ajax call for button being clicked

      $.ajax({
        url:queryURL,
        method: "GET"
      }).then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='person'>").css({"float": "left", "text-align": "center"});

          var rating = results[i].rating;

          var p = $("<p>").html("Rating: " + rating);

          var personImage = $("<img>").css("padding", "10px");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });

    }

  // Function for displaying buttons

    function renderButtons() {

      $("#buttons-view").empty();

      for (var i = 0; i < person.length; i++) {
        var a = $("<button>");
        a.addClass("person-btn");
        a.attr("data-name", person[i]);
        a.text(person[i]);
        $("#buttons-view").append(a);
      }
    }

  // Function to handle click events

    $("#add-person").on("click", function(event) {
      event.preventDefault();

      var people = $("#person-input").val().trim();

      person.push(people);

      renderButtons();

    });

    $(document).on("click", ".person-btn", displayGif);

    renderButtons();
    
  });

$(document).ready(function() {

    // ===== Set initial array ==== //

    var person = ["Rita Hayworth", "Ava Gardner", "Veronica Lake", "Jane Russel", "Betty Grable"];

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
       person + "&api_key=ZbL1cR4OhfaBwuJbNEIxp6NlFfxnwLvO&limit=10";

    // ===== functoin to create buttons ==== //

    function renderButtons() {

    for (var i = 0; i < person.length; i++) {
        var newBttn = $("<button>");
        //newBttn.attr("data-person");
        newBttn:text(person);
        $("#buttons-view").append(newBttn);
        }
    }

    renderButtons();

    

    $("button").on("click", function() {
        event.preventDefault()
        var person = $(this).attr("data-person");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=ZbL1cR4OhfaBwuJbNEIxp6NlFfxnwLvO&limit=10";
      
            $.ajax({
              url: queryURL,
              method: "GET"
            })
              .then(function(response) {
                var results = response.data;
      
                for (var i = 0; i < results.length; i++) {
                  var gifDiv = $("<div class='item'>").css({"float": "left", "text-align": "center"});
      
                  var rating = results[i].rating;
      
                  var p = $("<p>").html("Rating: " + rating);
      
                  var personImage = $("<img>").css("padding", "10px");
                  personImage.attr("src", results[i].images.fixed_height.url);
      
                  gifDiv.prepend(p);
                  gifDiv.prepend(personImage);

                  $("#gifs-appear-here").prepend(gifDiv);
                }
              });
          });

});

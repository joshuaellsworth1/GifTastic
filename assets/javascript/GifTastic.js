$(document).ready(function() {
var gifs = ["family guy", "the office", "Parks and Rec"];

function displayGif() {
    var gif = $(this).attr("data-gif")
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NDDGg93an2SN1k7cICHE2VEWVhPV62X9&q=&limit=25&offset=0&rating=G&lang=en" + searchTerm + "&api-key=NDDGg93an2SN1k7cICHE2VEWVhPV62X9";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        for (var j = 0; j < results.gifs; i++) {
            var gifDiv = $("<div>");
        var gifDisplay = response.gif;
        }
    })


    $("#.btn-search").on("click", function () {
        $("#gif-display").empty();
        var searchTerm = $('submit').val();
    })
}

function renderButton() {
    $("#buttons-view").empty();
    for (var i = 0; i < gifs.length; i++) {
        var newGif = $("<button>");
        newGif.addClass("gif-btn");
        newGif.attr("data-gif", gifs[i]);
        newGif.text(gifs[i]);
        newGif.addClass("btn");
        $("#buttons-view").append(newGif);
        console.log(newGif);
    }
}

// $("#add-gif").on("click", function (event) {
//     event.preventDefault();
//     var input = $("#user-input").val().trim();
//     gifs.push(input);
//     renderButton();
// })

renderButton();
});
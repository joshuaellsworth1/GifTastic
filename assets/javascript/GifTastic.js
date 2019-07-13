$(document).ready(function () {
    var gifs = ["family guy", "the office", "parks and rec"];

    function renderButton() {
        $("#buttons-view").empty();
        for (var i = 0; i < gifs.length; i++) {
            var newGif = $("<button>");
            newGif.addClass("gif-btn");
            newGif.attr("data-info", gifs[i]);
            newGif.text(gifs[i]);
            newGif.addClass("btn");
            $("#buttons-view").append(newGif);
            console.log(newGif);
        }
    }

    $("#add-gif").on("click", function (event) {
        console.log(event);
        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        gifs.push(gif);
        renderButton();
    });

    renderButton();
    //Can't get the gifs to generate based on the value of the buttons.
    $(document).on("click", "button", function () {
        var gif = $(this).attr("buttons-view")
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api-key=NDDGg93an2SN1k7cICHE2VEWVhPV62X9&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;
            for (var j = 0; j < results.length; j++) {
                var gifsDiv = $("<div>");
                var rating = results[j].rating;
                var p = $("<p>").text("Rating:" + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[j].images.fixed_height.url);
                console.log(gifImage);

                var gifName = ["first gif", "second gif", "first gif", "second gif"]
                gifImage.addClass(gifName[j]);
                console.log(gifName)

                gifsDiv.prepend(p);
                gifsDiv.prepend(gifImage);
                $("#gifs-appear-here").prepend(gifsDiv);
            }
        })
    });
})
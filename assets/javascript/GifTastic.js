$(document).ready(function () {
    var gifs = ["family guy", "the office", "Parks and Rec"];

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
    $(document).on("click", "button", function () {
        var gif = $(this).attr("data-info")
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NDDGg93an2SN1k7cICHE2VEWVhPV62X9&q=&limit=25&offset=0&rating=G&lang=en" + gif + "&api-key=NDDGg93an2SN1k7cICHE2VEWVhPV62X9&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var results = response.data;
            for (var j = 0; j < results.length; j++) {
                var gifsDiv = $("<div>");
                var rating = results[j].rating;
                var p = $("<p>").text("Rating" + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[j].images.fixed_height.url);

                var gifName = ["gif1", "gif2",]
                gifImage.addClass(gifName[j]);

                gifsDiv.prepend(p);
                gifsDiv.prepend(gifImage);
                $("#gifs-appear-here").prepend(gifsDiv);
            }
        })
    });
})
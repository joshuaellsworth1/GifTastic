$(document).ready(function () {
    var gifs = ["family guy", "the office", "Parks and Rec"];

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

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var gif = $("#gif-input").val().trim();
        gifs.push(gif);
    })
    renderButton();


    $(document).on("click", "button", function() {
        var gif = $(this).attr("data-gif")
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=NDDGg93an2SN1k7cICHE2VEWVhPV62X9&q=&limit=25&offset=0&rating=G&lang=en" + searchTerm + "&api-key=NDDGg93an2SN1k7cICHE2VEWVhPV62X9";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var gifDisplay = response.data;
            for (var j = 0; j < gifs.length; i++) {
                var gifsDiv = $("<div>");
                var p = $("<p>").text("gifsDiv" + gifsDiv);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);
                
                var newGif = ["gif1", "gif2"]
                gifImage.addClass(newGif[i]);

                gifsDiv.prepend(p);
                gifsDiv.prepend(gifImage);
                $("#gifs-appear-here").prepend(gifsDiv)l

            }
        })


});
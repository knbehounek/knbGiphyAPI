$( document ).ready(function() {
//Array of topics, allow new topcs to be pushed into this array
var topics = ['Dragons', 'Games', 'Eating' ]

// Create a function that displays all gif buttons
function displayGifButtons(){
    $("#gifButton").empty(); 
    for (var i = 0; i < topics.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("topic");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", topics[i]);
        gifButton.text(topics[i]);
        $("#gifButton").append(gifButton);
    }
}

// Create a function to add a new topic button

function newButton () {
    $("#addGif").on("click", function(){
        var topic = $("#topic-input").val().trim();
    if (topic == ""){
        return false;
    }
    topics.push(topic);

    displayGifButtons();
    return false;
    });
    }
// Create a function to Remake topic buttons
// Create a function that displays all of the gifs
function displayGif(){
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=NH1i7GZqCBF337lj1ljpGN4BzKCNmzX8=10";
    console.log(queryURL); 
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response){
        $("#gifsview").empty();
        var results = response.data
        if (results == "") {
            alert("There is not gif for button")
        }
    for ( var i = 0; i<results.length; i++){
        
        var gifDiv = $("<div>");
        gifDiv.addClass("gifDiv");
        var gifRating =$("<p>").text("Rating: " + results[i].rating)
        gifDiv.append(gifRating);
        var gifImg = $("<img>")
        gifImg.attr("src", results[i].images.fixed_height_small_still.url); 
        gifImg.attr("data-still",results[i].images.fixed_height_small_still.url); 
        gifImg.attr("data-animate",results[i].images.fixed_height_small.url); 
        gifImg.attr("data-state", "still"); 
        gifImg.addClass("image");
        gifDiv.append(gifImg);
        $("#gifsView").prepend(gifDiv);
    }
    })
}
// Call the functions & Methods 

displayGifButtons();
newButton();
displayGif();
}) 
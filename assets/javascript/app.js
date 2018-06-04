$( document ).ready(function() {
//Array of topics, allow new topcs to be pushed into this array
var topic = ['Dragons', 'Games', 'Eating' ]
// Create a function that displays all gif buttons
function displayGifButtons(){
    $("#gifView").empty(); 
    for (var i = 0; i < topic.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("topic");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", topic[i]);
        gifButton.text(topic[i]);
        $("#gifView").append(gifButton);
    }
}

// Create a function to add a new topic button
// Create a function to remove last topic button
// Create a function that displays all of the gif
// Call the functions & Methods 

// first i need the container where the blocks will go
var containerDiv = $(".container");

// i will need to create 9 divs for each our from 9am to 5pm
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
for (var i=0; i<workHours.length; i++) {
    containerDiv.append($("<div>").text(workHours[i]));
}
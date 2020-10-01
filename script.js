// first i need the container where the blocks will go
var containerDiv = $(".container");

//this code will set the date at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//I also need to know the current hour
var currentTime = moment().format("ha");


//i will need to create 9 divs for each hour from 9am to 5pm
var workHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

//this will let us know what index the time is in the array
var currentIndex = workHours.indexOf(currentTime);
console.log(currentIndex);

//this code will create the base layout of the page
for (var i=0; i<workHours.length; i++) {
    var hourRow = $("<div>").attr("class","row");
    containerDiv.append(hourRow);
    var hourBlock = $("<div>").text(workHours[i]).attr("class", "col-1 hour time-block");
    hourRow.append(hourBlock);

    if (currentIndex==-1 && currentTime[1]=="a") {
        var textBlock = $("<textarea>").attr("class", "col-10 future");
    } else if  (currentIndex==-1 && currentTime[1]=="p") {
        var textBlock = $("<textarea>").attr("class", "col-10 past");
    } else {
        var textBlock = $("<textarea>").attr("class", "col-10 present");
    }
    
    hourRow.append(textBlock);
    var saveBlock = $("<div>").attr("class", "col-1 btn btn-block saveBtn");
    hourRow.append(saveBlock);
    var saveButton = $("<i>").attr("class", "fas fa-save fa-2x").attr("id", "saved");
    saveBlock.append(saveButton);
}
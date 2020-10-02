// first i need the container where the blocks will go
var containerDiv = $(".container");

//this code will set the date at the top of the page
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//I also need to know the current hour
// var currentTime = moment().format("ha");
var currentTime = "1pm";

//i will need to create 9 div blocks for each hour from 9am to 5pm
var workHours = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];

//this will let us know what index the time is in the array
var currentIndex = workHours.indexOf(currentTime);
console.log(currentIndex);

//this code will create the base layout of the page
$(document).ready(function() {
  for (var i = 0; i < workHours.length; i++) {

    var hourRow = $("<div>").attr("class", "row");
    containerDiv.append(hourRow);
    var hourBlock = $("<div>")
      .text(workHours[i])
      .attr("class", "col-1 hour time-block");
    hourRow.append(hourBlock);

    //this code will create a text box and set the background color of the text area field
    //depending on the current time
    if (currentIndex == -1 && currentTime.includes("a") === true) {
      var textBlock = $("<textarea>")
        .attr("class", "col-10 future")
        .attr("id", i);
    } else if (currentIndex == -1 && currentTime.includes("p") === true) {
      var textBlock = $("<textarea>")
        .attr("class", "col-10 past")
        .attr("id", i);
    }

    // if the currentime is an hour before then it will display event that already happened
    else if (i < currentIndex) {
      if (i == currentIndex - 1) {
        var textBlock = $("<textarea>")
          .text("Event that already happened")
          .attr("class", "col-10 past")
          .attr("id", i);
      } else {
        var textBlock = $("<textarea>")
          .attr("class", "col-10 past")
          .attr("id", i);
      }

    //this sets the current time to present and adds some preset text
    } else if (i == currentIndex) {
      var textBlock = $("<textarea>")
        .text("Current hour")
        .attr("class", "col-10 present")
        .attr("id", i);
    //this sets the future time and adds some preset text
    } else {
      var textBlock = $("<textarea>")
        .text("Change Event")
        .attr("class", "col-10 future")
        .attr("id", i);
    }
    //this will create a button used to save
    hourRow.append(textBlock);
    var saveBlock = $("<div>").attr("class", "col-1 btn btn-block saveBtn");
    hourRow.append(saveBlock);
    var saveButton = $("<i>")
      .attr("class", "fas fa-save fa-2x saved")
      .attr("data-index", i);
    saveBlock.append(saveButton);

    // if there is already text in local storage it will change the text of the corresponding text area
    if (localStorage.getItem(i) !==null){
      var oldText = localStorage.getItem(i);
      $("textarea[id="+i+"]").text(oldText);
    }
  }

  
  // when a user clicks a save button the text in the text area will be saved in localStorage 
  $(".saved").on("click", function(event) {
      var value = $(this).attr("data-index");
      var textToSave = $("textarea[id="+value+"]").val();
      var savedText = localStorage.setItem(value, textToSave);

    });
    
});






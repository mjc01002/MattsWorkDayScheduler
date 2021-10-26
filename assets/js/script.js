
// Get Current Date
$(document).ready(function(){
    var date = moment().format("MM/DD/YYYY, h:mm a");
    $("#currentDay").append(date);
    });

// color hour based on time of day.  Gray for past, Red for present, Green for future
var hour = moment().format("H");

for( i=0; i<24; i++ ) {
    var y = "#"+ i;
    
    if (i < hour){
        $(y).addClass("past");
    } else if(i == hour) {
        $(y).addClass("present");
    } else if( i > hour){
        $(y).addClass("future");
    } else{};   
};




// get tasks from local storage
var loadTasks = function() {
    tasks7 = JSON.parse(localStorage.getItem("tasks7"));
    tasks8 = JSON.parse(localStorage.getItem("tasks8"));
  
}
// set tasks to local storage on button click
$(".saveBtn").click(function() {
    
    var tasks7 = $("#7").val();

    localStorage.setItem("tasks7", (tasks7));
    
  });

// pull from local storage

$('#7').html(localStorage.tasks7);

// set tasks to local storage on button click
$(".saveBtn").click(function() {
    
    var tasks8 = $("#8").val();

    localStorage.setItem("tasks8", (tasks8));
    
  });

// pull from local storage

$('#8').html(localStorage.tasks8);



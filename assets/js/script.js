
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

// local storage
$('#test').html("Test");
localStorage.content = $('#test').html();
$('#test').html(localStorage.content);

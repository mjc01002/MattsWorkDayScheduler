
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

// set tasks to local storage on button click

  $(".saveBtn").click(function() {
    for( i=7; i<20; i++ ) {
        var y = "#"+ i;
  
        var tasksa = "tasks" + i;
        tasksa = $(y).val();
  
    localStorage.setItem("tasks" + i, (tasksa));
    
  }});

// pull from local storage

$('#7').html(localStorage.tasks7);
$('#8').html(localStorage.tasks8);
$('#9').html(localStorage.tasks9);
$('#10').html(localStorage.tasks10);
$('#11').html(localStorage.tasks11);
$('#12').html(localStorage.tasks12);
$('#13').html(localStorage.tasks13);
$('#14').html(localStorage.tasks14);
$('#15').html(localStorage.tasks15);
$('#16').html(localStorage.tasks16);
$('#17').html(localStorage.tasks17);
$('#18').html(localStorage.tasks18);
$('#19').html(localStorage.tasks19);

// automatically refresh page
setTimeout(function() {
    location.reload();
  }, 180000);
  console.log(hour);

//clear text areas after the day is over at 10PM at night
$(document).ready(function() {
    
    if(hour == 20){
    localStorage.clear();
    setTimeout(function () {
        location.reload(true);
      }, 5000);
} else{}
});


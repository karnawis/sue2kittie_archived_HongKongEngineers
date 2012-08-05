// JavaScript Document


window.onload=function(){
	$('#show-announcements').load('announcements.html #ann');
	$('#show-event').load('events.html #ev');
	/*
	$('#show-announcements').load('announcements.html h4');
	$('#show-event').load('events.html h4');
	*/
	//$('#show-announcements').load('#current-an');
	//setInterval("show()", 10000);
	}

//function show(){}

/*
var y = document.getElementById('ann').getElementsByTagName('h4');
  var ylen = y.length, index = 0;
  y[0].setAttribute('id','current-an');
  setInterval(function() {
    y[index].setAttribute('id','none');
    index = (index + 1) % ylen;
    y[index].setAttribute('id','current-an');
	$('#show-announcements').load('announcements.html #current-an');
  }, 2000);
*/


/*
window.onload = function() {
 setInterval("show()", 10000);
}



window.onload = function() {
	//talking to the ul with the ann id, get the h4
  var y = document.getElementById('ann').getElementsByTagName('h4');
  var ylen = y.length, index = 0;
  y[0].setAttribute('id','current-an');
  setInterval(function() {
    y[index].setAttribute('id','none');
    index = (index + 1) % ylen;
    y[index].setAttribute('id','current-an');
  }, 2000);
};


//$('#show-event').load('events.html #current-an');


/*
window.onload = function() {
	//talking to the ul with the ann id, get the h4
  var y = document.getElementById('ann').getElementsByTagName('h4');
  var ylen = y.length, index = 0;
  y[0].setAttribute('id','current-an');
  setInterval(function() {
    y[index].setAttribute('id','none');
    index = (index + 1) % ylen;
    y[index].setAttribute('id','current-an');
  }, 5000);
};


//if I give an initial id to the first item it grabs just the first item
 setInterval("show()", 5000);
//$('#show-event').load('events.html #current-an');
function show(){
$('#show-announcements').load('announcements.html #current-an');

}
*/

/*	
window.onload = function() {
  var y = document.getElementById('ann').getElementsByTagName('li');
  var ylen = y.length, index = 0;
  y[0].className = 'current-an';
  setInterval(function() {
    y[index].className = '';
    index = (index + 1) % ylen;
    y[index].className = 'current-an';
  }, 5000);
};

$("#show-event h4").load($(this).attr("href")+" #description"	
, function(){
	$("#content_area").hide().fadeIn(1000);
	});*/
	
	
	//alert("works");


/*Derek
// Run this when the page is ready.
$().ready(function() {
	// Get the contents of the announcements page
	var announcement_page = $.ajax('announcements.html');
	
	// look through it, and grab all h4s\
	var h4s = $(announcement_page).find("h4");
	
	$("#show-announcements").html(announcement_page);
	
	//console.log(h4s.length);
//	console.log(announcement_page);
});

*/
//function test(){
	//alert("hello");
	//}
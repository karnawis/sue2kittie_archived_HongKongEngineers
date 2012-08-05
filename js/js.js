// JavaScript Document

//Contact Form
$('#contact_form').submit(function(){
var errors=0;
//validate the name
if($("#name").val()==""){
	errors++;
	$("#name_error").addClass("error").text("Please insert the required field");
	//$('<span>please insert the required field</span>').insertAfter("#name_error").addClass("error");
	//$("p").append("<strong>Hello</strong>");
	} else {
		$("#name_error").removeClass("error").text("");
		}
//if($('#email').val()=="" || $("#email").val().indexOf("@")<0){
if($("#email").val()==""){
	errors++;
	$("#email_error").addClass("error").text("Please insert the required field");
	} else {
		$("#email_error").removeClass("error").text("");
		}
		if($('#message').val()==""){
	errors++;
	$("#message_error").addClass("error").text("please insert the required field");
	//$('<span>please insert the required field</span>').insertAfter("#message_error").addClass("error");
	} else {
		$("#message_error").removeClass("error").text("");
		}
if (errors>0){
	return false;
	}
if (errors==0){
	$("#submit-message").text("You message is being sent...Thank you!");
	}
});

//Slideshow
//REMOVE IT
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);


/*events page*/	
$(document).ready(function () {
//$(".ev-list p").hide();
//one for div in the event list
$(".ev-list div").hide();
$(".announcement div").hide();
//home page calling current events and announcements
$("#ev div").hide();
$("#ann div").hide();
});

$(".ev-list h4").click(function(){
	//$(this).next('p').slideToggle("slow");
		$(this).next('div').slideToggle("slow");
	});

/*announcement Page */
$(".announcement h4").click(function(){
	//$(this).next('p').slideToggle("slow");
		$(this).next('div').slideToggle("slow");
	});

//home page announcements and events showing off
$("#ann h4").click(function(){
	//$(this).next('p').slideToggle("slow");
		$(this).next('div').slideToggle("slow");
	});
$("#ev h4").click(function(){
	//$(this).next('p').slideToggle("slow");
		$(this).next('div').slideToggle("slow");
	});

//Ajax
/*
$(document).ready(function () {
	$("#content_area").load($(this).attr("href")+" #description"	
, function(){
	$("#content_area").hide().fadeIn(1000);
	});

	return false;
	});	*/
	
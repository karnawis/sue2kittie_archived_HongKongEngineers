<?php
//echo "<pre>";
//print_r($_POST);
//echo "</pre>";
//exit;

// Harvest all form fields
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Since "called" is a radio, it might not get submitted, so
// we'll check to see if it exists, and if not, we'll assign it a blank value.
// isset() or "is set" is testable. if it exists is what we're looking for.


// Look for required fields. If any are missing, stop processing
// and tell the user
if ($name == "" OR $email == "" OR $message =="") {
	die("You have a required field missing.");
	// die() stops the rest of the page from running.
}
//the name that shows in the received email
$from = "From: $name <$email>";

// All fields are there. We are doing an email form, so we need
// the name and email fields sanitized against newlines and returns.
if (preg_match("(\n|\r)", $from)) {
	// This can ONLY be from someone attempting to hack us.
	die("nope"); // maybe be a "success" message to confuse them :)
}
//$headers .= 'To: Sue <sue2kittie@gmail.com>, Sue <sue_kittie@hotmail.com>' . "\r\n";
//$headers .= 'From: Birthday Reminder <skarnawi@gmail.com>' . "\r\n";
//$headers .= 'Cc: sue2kittie@gmail.com' . "\r\n";
//$headers .= 'Bcc: sk@sura.me' . "\r\n";

$to = "sue2kittie@gmail.com";
$subject = "HKIE Contact Form Test";
$full_email = $message . "\r\n Phone: $phone";
mail($to, $subject, $full_email, $from);

// setup the mail now, and if mail() is 
// successful, send the user to a "thank you" page.
if (mail($to, $subject, $full_email, $from)) {
	//echo "<p>Thank you for using our mail form</p>";
	// success! Give them a thank you page.
	sleep(7);
	header("location: contact.html"); // redirects
} else {
	echo "Sorry, something went wrong when sending the email";	
}


?>
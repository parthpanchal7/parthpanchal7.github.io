<?php
if(isset($_POST["submit"])){
// Checking For Blank Fields..
if($_POST["fnm"]==""||$_POST["eml"]==""||$_POST["msg"]==""){
//echo "Fill All Fields..";
echo "<script type='text/javascript'>alert('Fill All Fields')</script>";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['eml'];
$fnm=$_POST['fnm'];
$message = $_POST['msg'];
if((preg_match("/[^0-9]/", '', $str)) && strlen($str) == 10){
	//echo "Invalid Mobile Number";
	echo "<script type='text/javascript'>alert('Invalid Mobile Number')</script>";
}
else{
$message = $_POST['msg'];
$email=$_POST['eml'];
$fnm=$_POST['fnm'];
$headers = 'From: '. $fnm; // Sender's Email
// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// Send Mail By PHP Mail Function
mail("info@freedomofart.in",$headers, $message, $email, $fnm);
//echo "Thank you" ." " . $fnm . " ". "We will Get Back to you ASAP";
echo "<script type='text/javascript'>alert('Thank you" ." " . $fnm . " ". "We will Get Back to you ASAP');</script>";
}
}
}
?>
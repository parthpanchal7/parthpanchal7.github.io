// mobile menu script
var btn=false;
function showe(){
	var elements = document.getElementsByClassName('menu_name');
	var bubbles = document.getElementsByClassName('count-bubble');
if(btn==false){
document.getElementById('sidebar').style.width = "17rem";
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "inline-block";
	}
	for(var j = 0; j < bubbles.length; j++){
		bubbles[j].style.display = "flex";	
	}
console.log(btn);
btn=true;
}
else{
	document.getElementById('sidebar').style.width = "30px";
	for(var i = 0; i < elements.length; i++){
		elements[i].style.display = "none";	
	}
	for(var j = 0; j < bubbles.length; j++){
		bubbles[j].style.display = "none";	
	}
	console.log(btn);
	btn=false;
}
}


// form validation
function namecheck(){
	var fnm = document.getElementById("full_name").value;
	var name_pattern = /^[a-zA-Z]+$/;
	var error_msg = document.getElementById("error_name");
	if(fnm.match(name_pattern)){
		error_msg.innerHTML = '';
		return true;
	}
	else{
		error_msg.innerHTML = 'Please Enter Valid Name';	
		return false;
	}
}
function emailcheck_one(){
	var email_one = document.getElementById("email_one").value;
	var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var error_msg = document.getElementById("error_mail_one");

	if(email_one.match(email_pattern)){
		error_msg.innerHTML = '';
		return true;	
	}
	else{
		error_msg.innerHTML = 'Please Enter Valid Email';	
		return false;	
	}

}

function emailcheck_two(){
	var email_two = document.getElementById("email_two").value;
	var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var error_msg = document.getElementById("error_mail_two");

	if(email_two.match(email_pattern)){
		error_msg.innerHTML = '';
		return true;	
	}
	else{
		error_msg.innerHTML = 'Please Enter Valid Email';	
		return false;	
	}

}
function optioncheck(){
	var opt = document.getElementById("type_select");
	var error_msg = document.getElementById("error_type");
	
	if(opt.selectedIndex ==""){
		error_msg.innerHTML = 'Please Select any one Option';
		return false;	
	}
	else{
		error_msg.innerHTML = '';
		return true;		
	}
}
function fullformcheck(){
var fnm = document.getElementById("full_name");
var email_one = document.getElementById("email_one");
var email_two = document.getElementById("email_two");
var opt = document.getElementById("type_select");
var error_name = document.getElementById("error_name");
var error_mail_one = document.getElementById("error_mail_one");
var error_mail_two = document.getElementById("error_mail_two");
var error_type = document.getElementById("error_type");

if(fnm.value == ""){
	error_name.innerHTML = "Name can't be empty";
	fnm.focus();
	return false;
}
else if(email_one.value == ""){
	error_mail_one.innerHTML = "Email can'be empty";
	email_one.focus();
	return false;
}
else if(email_two.value ==""){
	error_mail_two.innerHTML = "Email can'be empty";
	email_two.focus();	
	return false;
}
else if(opt.selectedIndex == ""){
	error_type.innerHTML = "Please Select any option";
	opt.focus();
	return false;
}
else if(namecheck() == false){
	error_name.innerHTML = "Entered Name is Not Valid";
	fnm.focus();
	return false;
}
else if(emailcheck_one() == false){
	error_mail_one.innerHTML = "Enter Valid Email";
	email_one.focus();
	return false;
}
else if(emailcheck_two() == false){
	error_mail_two.innerHTML = "Enter Valid Email";
	email_two.focus();
	return false;
}
else if(optioncheck() == false){
	error_type.innerHTML = "Please Select any option";
	opt.focus();
	return false;
}
else{
	alert("Sign up Successfully."); 
		return true;
    window.location.href="screen-2.html";

}
}
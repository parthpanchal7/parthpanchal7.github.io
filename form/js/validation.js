function nameCheck(){
  var fName = document.getElementById('fName');
  var fnm = document.form1.fnm.value;
  var namePattern = /^[a-zA-Z]+$/;
  var namError = document.getElementById('nameError');
  if(!fnm.match(namePattern)){
    namError.innerHTML="Please Enter Valid Name";
    document.getElementById('icon_one').style.display = "flex";
    fName.style.borderColor = "#f00";
    return false;
  }
  else{
    namError.innerHTML="";
    document.getElementById('icon_one').style.display = "none";
    fName.style.borderColor = "#ced4da";
    return true;
  }
}
function emailCheck(){
  var eMal = document.getElementById('eMail');
  var email = document.form1.eMail.value;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var mailError = document.getElementById('mailError');
  if(!email.match(emailPattern)){
    mailError.innerHTML="Should be in email format";
    document.getElementById('icon_two').style.display = "flex";
    eMal.style.borderColor = "#f00";
    return false;
  }
  else{
    mailError.innerHTML="";
    document.getElementById('icon_two').style.display = "none";
    eMal.style.borderColor = "#ced4da";
    // const nextTabLinkEl = $('.nav-tabs .active').closest('li').next('li').find('a')[0];
    return true;
  }
}
function companyCheck(){
  var company = document.getElementById('company');
  var companyVal = document.form1.companyName.value;
  var companyError = document.getElementById('companyError');

  if(companyVal == ''){
    companyError.innerHTML = "Company Name Can't be blank";
    document.getElementById('icon_three').style.display = "flex";
    company.style.borderColor = "#f00";
    return false;
  }
  else{
    mailError.innerHTML = "";
    document.getElementById('icon_three').style.display = "none";
    company.style.borderColor = "#ced4da";
    return true;
  }
}
function empCheck(){
  var emp = document.getElementById('emps');
  var empVal = document.form1.Employee.value;
  var empPattern = /^[0-9]+$/;
  var empError = document.getElementById('empError');

  if(!empVal.match(empPattern)){
    empError.innerHTML="Should be a valid value";
    document.getElementById('icon_four').style.display = "flex";
    emp.style.borderColor = "#f00";
    return false;
  }
  else{
   empError.innerHTML="";
    document.getElementById('icon_four').style.display = "none";
    emp.style.borderColor = "#ced4da";
    return true; 
  }

}
function abtCheck(){
  var about = document.getElementById('aBout');
  var aboutVal = document.form1.SelectVal.value;
  var selectError = document.getElementById('selectError');

  if(about.selectedIndex == ""){
    selectError.innerHTML="Please select any one option";
    about.style.borderColor = "#f00";
    return false;
  }
  else{
   selectError.innerHTML="";
    about.style.borderColor = "#ced4da";
    return true; 
  }

}
function tabOne(){
var fName = document.getElementById('fName');
var eMal = document.getElementById('eMail');
var company = document.getElementById('company');
var emp = document.getElementById('emps');
var about = document.getElementById('aBout');
var namError = document.getElementById('nameError');
var mailError = document.getElementById('mailError');
var companyError = document.getElementById('companyError');
var empError = document.getElementById('empError');
var selectError = document.getElementById('selectError');
if(fName.value == ""){
  namError.innerHTML="Please Provide your name";
  document.getElementById('icon_one').style.display = "flex";
  fName.style.borderColor = "#f00";
  fName.focus();
  return false;
}
else if(nameCheck() == false){
  namError.innerHTML="Please Enter Valid Name";
  document.getElementById('icon_one').style.display = "flex";
  fName.style.borderColor = "#f00";
  fName.focus();
  return false;  
}
else if(eMal.value == ""){
  mailError.innerHTML="Email Field is required";
  document.getElementById('icon_two').style.display = "flex";
  eMal.style.borderColor = "#f00";
  eMal.focus();
  return false;
}
else if(emailCheck() == false){
  mailError.innerHTML="Should be in email format";
  document.getElementById('icon_two').style.display = "flex";
  eMal.style.borderColor = "#f00";
  eMal.focus();
  return false;  
}
else{
  namError.innerHTML="";
  mailError.innerHTML="";
  const nextTabLinkEl = $('.nav-tabs .active').closest('li').next('li').find('a')[0];
  const nextTab = new bootstrap.Tab(nextTabLinkEl);
  nextTab.show();
  return true;
}
}
function tabTwo(){
var company = document.getElementById('company');
var emp = document.getElementById('emps');
var companyError = document.getElementById('companyError');
var empError = document.getElementById('empError');
if(company.value == ""){
  companyError.innerHTML="Company Name Can't be blank";
  document.getElementById('icon_three').style.display = "flex";
  company.style.borderColor = "#f00";
  company.focus();
  return false;
}
else if(companyCheck() == false){
  namError.innerHTML="Company Name Can't be blank";
  document.getElementById('icon_three').style.display = "flex";
  company.style.borderColor = "#f00";
  company.focus();
  return false;  
}
else if(emp.value == ""){
  mailError.innerHTML="This Field can't be empty";
  document.getElementById('icon_four').style.display = "flex";
  emp.style.borderColor = "#f00";
  emp.focus();
  return false;
}
else if(empCheck() == false){
  mailError.innerHTML="Should be a valid value";
  document.getElementById('icon_four').style.display = "flex";
  emp.style.borderColor = "#f00";
  emp.focus();
  return false;  
}
else{
  companyError.innerHTML="";
  empError.innerHTML="";
  const nextTabLinkEl = $('.nav-tabs .active').closest('li').next('li').find('a')[0];
  const nextTab = new bootstrap.Tab(nextTabLinkEl);
  nextTab.show();
  return true;
}
}
function tabThree(){
var about = document.getElementById('aBout');
var selectError = document.getElementById('selectError');
var termError = document.getElementById('termsError');
var term = document.getElementById('term');
if(about.value == ""){
  selectError.innerHTML="Please select any one option";
  about.style.borderColor = "#f00";
  about.focus();
  return false;
}
else if(abtCheck() == false){
  selectError.innerHTML="Please select any one option";
  about.style.borderColor = "#f00";
  about.focus();
  return false;  
}
else if(term.checked == false){
  termError.innerHTML="Please accept terms & conditions";
  document.getElementById('termError').style.color = "#f00";
  return false;
}
else{
  selectError.innerHTML="";
  termError.innerHTML="";
  alert("Submitting Form! Rock On");
  return true;
}
}
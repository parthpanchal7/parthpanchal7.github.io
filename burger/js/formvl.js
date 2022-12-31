function namecheck()
{
	var fnm = document.form11.name.value;
	var nmpat = /^[a-zA-Z]+$/;
	var sp1 = document.getElementById('fnm');
	var err1 = document.getElementById('error1');
	if(fnm.match(nmpat))
	{
		sp1.style.borderColor = "#00aa00";
		err1.innerHTML = "";
		return true;
	}
	else
	{
		sp1.style.borderColor = "#aa0000";
		err1.innerHTML = "please enter yor name";
		return false;
	}
}
function emailcheck()
{
	var eml = document.form11.email.value;
	var nmpat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var sp2 = document.getElementById('eml');
	var err2 = document.getElementById('error2');
	if(eml.match(nmpat))
	{
		sp2.style.borderColor = "#00aa00";
		err2.innerHTML = "";
		return true;
	}
	else
	{
		sp2.style.borderColor = "#aa0000";
		err2.innerHTML = "please enter your email.";
		return false;
	}
}
	var fnm = document.form11.name.value;
	var eml = document.form11.email.value;
	var datess = document.form11.dates.value;
	var timed = document.form11.timed.value;
	var ppl = document.form11.people.value;
	var fnm1 = document.getElementById('fnm');
	var eml1 = document.getElementById('eml');
	var dates1 = document.getElementById('dates');
	var timed = document.getElementById('timed');
	var ppl1 = document.getElementById('ppl');
	var err1 = document.getElementById('error1');
	var err2 = document.getElementById('error2');
	var err3 = document.getElementById('error3');
	var err4 = document.getElementById('error4');
	var err5 = document.getElementById('error5');
function formcheck()
{
	var fnm = document.form11.name.value;
	var eml = document.form11.email.value;
	var datess = document.form11.dates.value;
	var timed = document.form11.timed.value;
	var ppl = document.form11.people.value;
	var fnm1 = document.getElementById('fnm');
	var eml1 = document.getElementById('eml');
	var dates1 = document.getElementById('dates');
	var timed = document.getElementById('timed');
	var ppl1 = document.getElementById('ppl');
	var err1 = document.getElementById('error1');
	var err2 = document.getElementById('error2');
	var err3 = document.getElementById('error3');
	var err4 = document.getElementById('error4');
	var err5 = document.getElementById('error5');

	if (fnm=="")
	{
		err1.innerHTML = "please enter your name";
		fnm1.focus();
		return false;
	}
	else if(namecheck()==false)
	{
		alert("please enter valid name.");
		fnm1.focus();
		return false;
	}
	else if(eml=="")
	{
		err2.innerHTML = "please enter your email.";
		eml1.focus();
		return false();
	}
	else if(emailcheck()==false)
	{
		err2.innerHTML = "please enter correct email.";
		eml1.focus();
		return false;
	}
	else if(datess=="")
	{
		err3.innerHTML = "please enter booking date."
		dates1.focus();
		return false;
	}
	else if(timed=="")
	{
		err4.innerHTML = "please enter your booking time.";
		timed.focus();
		return false;
	}
	else if(ppl=="")
	{
		err5.innerHTML = "please enter total no of people.";
		ppl1.focus();
		return false;
	}
	else
	{
		alert("Thank you. Your table has been booked...!!!");
		return true;
	}
}
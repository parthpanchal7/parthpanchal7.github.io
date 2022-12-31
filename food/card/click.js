var btnbool = false;
function clicker()
{
	if(btnbool == false)
	{
		document.getElementById("card").style.transform = "translateX(50%)";
		document.getElementById("imgBox").style.transform = "rotateY(-180deg)";
		document.getElementById("card").style.transformStyle = "preserve-3d";
		document.getElementById("card").style.perspective = "1000px";
		document.getElementById("imgBox").style.msTransformOrigin = "left";	
		btnbool = true;
	}
	else
	{
		document.getElementById("card").style.transform = "translateX(0%)";
		document.getElementById("imgBox").style.transform = "rotateY(0deg)";
		document.getElementById("card").style.transformStyle = "preserve-3d";
		document.getElementById("imgBox").style.msTransformOrigin = "left";	
		btnbool = false;
	}
}
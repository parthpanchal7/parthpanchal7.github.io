var btnbool=false;

function opnr(){
document.getElementById("menusl").style.height='0px';

if(btnbool==false){
document.getElementById("menusl").style.height='250px';
btnbool=true;
}
else{
document.getElementById("menusl").style.height='0px';
btnbool=false;
}
}
/* Funktion zum auswerten des eingabefeldes erster Parameter muss
 die korrekte eingabe sein die zweite das dazugehörige eingabefeld
 und das dritte der paragraph indem ausgegeben wird ob die eingabe richtig oder falsch war */
function auswerten(loesung, eingabe, ausgabe){
var eingabe = document.getElementById(eingabe).value;

if (eingabe == loesung){
document.getElementById(ausgabe).innerHTML= "Das ist richtig";

document.getElementById(eingabe).style.color="green";
}
else{
document.getElementById(ausgabe).innerHTML= "Das ist leider falsch probiere es nochmal";

document.getElementById(eingabe).style.border.color="red";
}
}	
	


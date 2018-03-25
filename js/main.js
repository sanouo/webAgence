function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}




var chaine = "AgenceWeb 2.0 / Agence Web Experte";
var nb_car = chaine.length;
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i=0; i<nb_car; i++) {
texte[i] = txt+tableau[i];
var txt = texte[i];
}

actual_texte = 0;
function changeMessage()
{
document.getElementById("bloc").innerHTML = texte[actual_texte];
actual_texte++;
if(actual_texte >= texte.length)
actual_texte = nb_msg;
}
if(document.getElementById)

setInterval("changeMessage()",130); /* la vitesse de defilement (plus on a une valeur faible plus
texte s'affiche rapidement) */




function derriere() {
    document.getElementById("Id").style.display = "none";
    document.getElementById("Id1").style.display = "block";
}
function derriere1() {
    document.getElementById("Id2").style.display = "none";
    document.getElementById("Id3").style.display = "block";
}
function derriere2() {
    document.getElementById("Id4").style.display = "none";
    document.getElementById("Id5").style.display = "block";
}

function devant() {
    document.getElementById("Id").style.display = "block";
    document.getElementById("Id1").style.display = "none";
}
function devant1() {
    document.getElementById("Id2").style.display = "block";
    document.getElementById("Id3").style.display = "none";
}
function devant2() {
    document.getElementById("Id4").style.display = "block";
    document.getElementById("Id5").style.display = "none";
}

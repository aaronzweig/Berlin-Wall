var evaluate = function(d, m, y, b){
	return b*b*y + b*m + d;
}

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var base = year + 1;

var value = evaluate(day, month, year, base);
var begin = evaluate(13, 8 ,1961, base);
var end = evaluate(9, 11, 1989, base);

var num;
if (value < begin) num = 0;
else if (value > end) num = 2;
else num = 1;

var form = document.getElementById("language");
var lang = form.options[form.selectedIndex].value;
alert(lang);
var language;
switch(lang){
	case "english":
		language = 0;
		break;
	case "german":
		language = 1;
		break;
	case "french":
		language = 2;
		break;
	case "russian":
		language = 3;
		break;
}

var down = 
["The Berlin Wall is Down", "Die Berliner Mauer gefallen ist", "Le mur de Berlin est tombé", "Берлинская стена упала"];

var up =
["The Berlin Wall is Up", "Die Berliner Mauer steht noch", "La mur de Berlin est en place", "Берлинская стена стоит"];

var text;
if (num == 0 || num == 2) text = down[language];
else text = up[language];
alert(text);
document.getElementById("message").innerHTML = "<h1>" + text + "</h1>";
 

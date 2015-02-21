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
else if (value > end) text = num = 2;
else num = 1;

var language = 1;

var down = 
["The Berlin Wall is Down", "Die Berliner Mauer gefallen ist", "Le mur de Berlin est en baisse", "Берлинская стена упала"];

var up =
["The Berlin Wall is Up", "Die Berliner Mauer steht noch", "La mur de Berlin est en place", "Берлинская стена ещё является"];

var text;
if (num == 0 || num == 2) text = down[language];
else text = up[language];
document.getElementById("message").innerHTML = <h1>text</h1>;

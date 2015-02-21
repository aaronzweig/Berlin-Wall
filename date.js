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

var text;
if (value < begin) text = "The Berlin Wall is down";
else if (value > end) text = "The Berlin Wall is down";
else text = "The Berlin Wall is up";

//document.getElementById("message").innerHTML = text;

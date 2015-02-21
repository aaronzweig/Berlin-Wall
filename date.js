	var evaluate = function(d, m, y, b){
		return b*b*y + b*m + d;
	}

	var date = new Date();
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	var base = year + 1;

	var value = evaluate(day, month, year, base);
	var begin = evaluate(1961, 8, 13, base);
	var end = evaluate(1989, 11, 9, base);

	if (value < begin) alert("before");
	else if (value > end) alert("after");
	else alert("during");

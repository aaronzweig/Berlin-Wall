var refresh = function () {
    var evaluate = function (d, m, y, b) {
        return b * b * y + b * m + d;
    }

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var base = year + 1;

    var value = evaluate(day, month, year, base);
    var begin = evaluate(13, 8, 1961, base);
    var end = evaluate(9, 11, 1989, base);

    var num;
    if (value < begin) num = 0;
    else if (value > end) num = 2;
    else num = 1;
    if (num == 2) {
       $.get("http://www.npr.org/rss/rss.php?id=1004", function (data) {
        $(data).find("item").each(function () { // or "item" or whatever suits your feed
        var el = $(this);

        console.log("------------------------");
        //if (el.find("title").text().indexOf("Berlin Wall") != -1 && el.find("title").text().indexOf("Rebuilt") != -1 && el.find("title").text().indexOf("Anniversary") == -1) {
        if (el.find("title").text().indexOf("Violent") != -1) {
        	console.log("oh no rebuilt")
        	num =  1;
        }
    });
}); 
    }
    

    var form = document.getElementById("language").children[0];
    var language = form.selectedIndex;

    var down = ["The Berlin Wall is Down", "Die Berliner Mauer gefallen ist", "Le mur de Berlin est tombé", "Берлинская стена упала"];

    var up = ["The Berlin Wall is Up", "Die Berliner Mauer steht noch", "La mur de Berlin est en place", "Берлинская стена стоит"];

    var text;
    if (num == 0 || num == 2) text = down[language];
    else text = up[language];
    document.getElementById("message").innerHTML = "<h1>" + text + "</h1>";
}

var rysujChoinkę = function(rows) {
    for (var i = 0; i < rows; i++) {
        var star = ""
        for (var j = 0; j < (i * 2 + 1); j++) {
            star += '*';
        }
        console.log(star);
    }
}

rysujChoinkę(5)
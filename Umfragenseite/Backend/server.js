var http = require('http');
const { compileFunction } = require('vm');


var server = http.createServer(function (req, res) {

 if (req.method === "POST") {
    
        var body = "";
        var list = [];
        var elements= [];
        var ergebnis = 0;
        var bewertung = "";
        var decode = "";
        req.on("data", function (chunk) {
            body += chunk;
            list = body.split("&");
            for (var i = 0; i < list.length; i++){
                elements.push(list[i].split("="));
            }
            for (var i = 0; i < elements.length-1; i++){
                ergebnis += parseInt(elements[i][1])
            }
            decode += elements[elements.length-1][1];
            bewertung += decode.charAt(1);
            console.log(ergebnis);
            console.log(bewertung);
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("location('http://localhost')");
        });
    }

}).listen(3000);
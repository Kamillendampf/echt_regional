var http = require('http');
const { compileFunction } = require('vm');


var server = http.createServer(function (req, res) {

 if (req.method === "POST") {
    
        var body = "";
        var b = "";
        var list = [];
        var elements= [];
        var ergebnis = 0;
        var bewertung = "";
        var decode = "";
        req.on("data", function (chunk) {
            body += chunk;
            list = JSON.parse(body)

            console.log(list)
        });

        req.on("end", function(){
           res.writeHead(200, { "Content-Type": "text/html" });
            res.end(b);
        });
    }

}).listen(3000);

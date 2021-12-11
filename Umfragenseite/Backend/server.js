var http    = require('http');
const { rejects } = require('assert');
const { func } = require('assert-plus');
const { resolve } = require('path/posix');
const { exit, allowedNodeEnvironmentFlags } = require('process');
const sqlite3 = require('sqlite3');
const service = './database/test.db';
let db = '';
var answers = '';
const sqlINSERT = 'INSERT INTO testt VALUES(?)';
const sqlSELECTall = 'SELECT * FROM testt';



connect();
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
            insert(body);
            list = JSON.parse(body)

            console.log(getAnswers());
            
        });

        req.on("end", function(){
            
           res.writeHead(200, { "Content-Type": "text/html" });
            res.end(getAnswers());
        });
    }

}).listen(3000);


function connect() {
        
   
    console.log('function connect is called')
    db = new sqlite3.Database(service, sqlite3.OPEN_READWRITE, (err) =>{
        if(err){
            console.error(err);
            exit(1)
        }
        console.log('Connected to Database')
    });
}


function insert(body) {
    answers = body;
    db.run(sqlINSERT, answers, function(err){
        if (err){
            console.error(err);
        }
        else{
            console.log("add a new row to your Database")
        }
    })
}
function getAnswers() {
    db.all(sqlSELECTall, [], (err, rows) => {
        if(err){
            throw err;
        }else{
            var clean = [];
            rows.forEach(row => {
                clean.push(JSON.parse(row.jsonFile))
                
            });
            //console.log(clean);
            return clean;
        }
    });
}

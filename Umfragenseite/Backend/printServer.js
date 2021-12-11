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
var clean = [];
var jasFile='';
var durchAnswer0 = 0;
var durchAnswer1 = 0;
var durchAnswer2 = 0;
var durchAnswer3 = 0;
var durchAnswer4 = 0;
var durchAnswer5 = 0;
var durchAnswer6 = 0;

connect();
var server = http.createServer(function (req, res) {
    for(var i =0; i< clean.length;i++){
        jasFile = JSON.parse(clean[i]);
        durchAnswer0 = durchAnswer0 + Int16Array.parse(jasFile[antwort0]);
        durchAnswer1 = durchAnswer1 + jasFile[antwort1];
        durchAnswer2 = durchAnswer2 + jasFile[antwort2];
        durchAnswer3 = durchAnswer3 + jasFile[antwort3];
        durchAnswer4 = durchAnswer4 + jasFile[antwort4];
        durchAnswer5 = durchAnswer5 + jasFile[antwort5];
        durchAnswer6 = durchAnswer6 + jasFile[antwort6];

    }
    durchAnswer0 = durchAnswer0 / clean.length;
    durchAnswer1 = durchAnswer1 / clean.length;
    durchAnswer2 = durchAnswer2/ clean.length;
    durchAnswer3 = durchAnswer3 / clean.length;
    durchAnswer4 = durchAnswer4 / clean.length;
    durchAnswer5 = durchAnswer5 / clean.length;
    durchAnswer6 = durchAnswer6 / clean.length;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html> <body> <h1> Antwort1'+durchAnswer0+'</h1> </body> </html>');
    res.end();
    }).listen(3001);









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
function getAnswers() {
    db.all(sqlSELECTall, [], (err, rows) => {
        if(err){
            throw err;
        }else{
            
            rows.forEach(row => {
                clean.push(JSON.parse(row.jsonFile))
                
            });
            //console.log(clean);
            
        }
    });
}

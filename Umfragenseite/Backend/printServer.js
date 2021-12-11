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

var countA01 = [];
var countA02 = [];
var countA03 = [];
var countA04 = [];
var countA05 = [];
var countA06 = [];

var countA11 = [];
var countA12 = [];
var countA13 = [];
var countA14 = [];
var countA15 = [];
var countA16 = [];

var countA21 = [];
var countA22 = [];
var countA23 = [];
var countA24 = [];
var countA25 = [];
var countA26 = [];

var countA31 = [];
var countA32 = [];
var countA33 = [];
var countA34 = [];
var countA35 = [];
var countA36 = [];

var countA41 = [];
var countA42 = [];
var countA43 = [];
var countA44 = [];
var countA45 = [];
var countA46 = [];

var countA51 = [];
var countA52 = [];
var countA53 = [];
var countA54 = [];
var countA55 = [];
var countA56 = [];

var countA61 = [];
var countA62 = [];
var countA63 = [];
var countA64 = [];
var countA65 = [];
var countA66 = [];


connect();
var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    db.all(sqlSELECTall, [], (err, rows) => {
        if(err){
            throw err;
        }else{
            
            rows.forEach(row => {
                clean.push(JSON.parse(row.jsonFile))
                
            });



            for(var i =0; i <= clean.length-1;i++){
                jasFile = clean[i];
                console.log(clean[i]);
                console.log('Ausgabe der runden');
                console.log(i);
                durchAnswer0 = durchAnswer0 + parseInt(jasFile.antwort0);
                console.log('Antwort');
                durchAnswer1 = durchAnswer1 + parseInt(jasFile.antwort1);
                durchAnswer2 = durchAnswer2 + parseInt(jasFile.antwort2);
                durchAnswer3 = durchAnswer3 + parseInt(jasFile.antwort3);
                durchAnswer4 = durchAnswer4 + parseInt(jasFile.antwort4);
                durchAnswer5 = durchAnswer5 + parseInt(jasFile.antwort5);
                durchAnswer6 = durchAnswer6 + parseInt(jasFile.antwort6);

                if (parseInt(jasFile.antwort1) == 1){
                    countA01.push(1);
                }
                if(parseInt(jasFile.antwort1) == 2){
                    countA02.push(2);
                }
                if(parseInt(jasFile.antwort1)==3){
                    countA03.push(3);
                }
                if(parseInt(jasFile.antwort1)==4){
                    countA04.push(4);
                }
                if(parseInt(jasFile.antwort1)==5){
                    countA05.push(5);
                }
                if(parseInt(jasFile.antwort1)==6){
                    countA06.push(6);
                }


                if (parseInt(jasFile.antwort1) == 1){
                    countA11.push(1);
                }
                if(parseInt(jasFile.antwort1) == 2){
                    countA12.push(2);
                }
                if(parseInt(jasFile.antwort1)==3){
                    countA13.push(3);
                }
                if(parseInt(jasFile.antwort1)==4){
                    countA14.push(4);
                }
                if(parseInt(jasFile.antwort1)==5){
                    countA15.push(5);
                }
                if(parseInt(jasFile.antwort1)==6){
                    countA16.push(6);
                }

                if (parseInt(jasFile.antwort2) == 1){
                    countA21.push(1);
                }
                if(parseInt(jasFile.antwort2) == 2){
                    countA22.push(2);
                }
                if(parseInt(jasFile.antwort2)==3){
                    countA23.push(3);
                }
                if(parseInt(jasFile.antwort2)==4){
                    countA24.push(4);
                }
                if(parseInt(jasFile.antwort2)==5){
                    countA25.push(5);
                }
                if(parseInt(jasFile.antwort2)==6){
                    countA26.push(6);
                }

                if (parseInt(jasFile.antwort3) == 1){
                    countA31.push(1);
                }
                if(parseInt(jasFile.antwort3) == 2){
                    countA32.push(2);
                }
                if(parseInt(jasFile.antwort3)==3){
                    countA33.push(3);
                }
                if(parseInt(jasFile.antwort3)==4){
                    countA34.push(4);
                }
                if(parseInt(jasFile.antwort3)==5){
                    countA35.push(5);
                }
                if(parseInt(jasFile.antwort3)==6){
                    countA36.push(6);
                }

                if (parseInt(jasFile.antwort4) == 1){
                    countA41.push(1);
                }
                if(parseInt(jasFile.antwort4) == 2){
                    countA42.push(2);
                }
                if(parseInt(jasFile.antwort4)==3){
                    countA43.push(3);
                }
                if(parseInt(jasFile.antwort4)==4){
                    countA44.push(4);
                }
                if(parseInt(jasFile.antwort4)==5){
                    countA45.push(5);
                }
                if(parseInt(jasFile.antwort4)==6){
                    countA46.push(6);
                }

                if (parseInt(jasFile.antwort5) == 1){
                    countA51.push(1);
                }
                if(parseInt(jasFile.antwort5) == 2){
                    countA52.push(2);
                }
                if(parseInt(jasFile.antwort5)==3){
                    countA53.push(3);
                }
                if(parseInt(jasFile.antwort5)==4){
                    countA54.push(4);
                }
                if(parseInt(jasFile.antwort5)==5){
                    countA55.push(5);
                }
                if(parseInt(jasFile.antwort5)==6){
                    countA56.push(6);
                }

                if (parseInt(jasFile.antwort6) == 1){
                    countA61.push(1);
                }
                if(parseInt(jasFile.antwort6) == 2){
                    countA62.push(2);
                }
                if(parseInt(jasFile.antwort6)==3){
                    countA63.push(3);
                }
                if(parseInt(jasFile.antwort6)==4){
                    countA64.push(4);
                }
                if(parseInt(jasFile.antwort6)==5){
                    countA65.push(5);
                }
                if(parseInt(jasFile.antwort6)==6){
                    countA6.push(6);
                }

            }


            console.log('Antowrten');
            console.log(durchAnswer0);
            console.log(durchAnswer1);
            console.log(durchAnswer2);
            console.log(durchAnswer3);
            console.log(durchAnswer4);
            console.log(durchAnswer5);
            console.log(durchAnswer6);
            durchAnswer0 = durchAnswer0/clean.length;
            durchAnswer1 = durchAnswer1/clean.length;
            durchAnswer2 = durchAnswer2/clean.length;
            durchAnswer3 = durchAnswer3/clean.length;
            durchAnswer4 = durchAnswer4/clean.length;
            durchAnswer5 = durchAnswer5/clean.length;
            durchAnswer6 = durchAnswer6/clean.length;
            res.write("<html><header><meta http-equiv='refresh' content='5'></header> <body> <table style='width: 100% ;''><tr style='border: 2px solid black'><th style='border: 2px solid black; height: 50px;'> Kategorie</th><th style='border: 2px solid black; height: 50px;'> Durchschnitt</th><th style='border: 2px solid black; height: 50px;'> 1 </th><th style='border: 2px solid black; height: 50px;'> 2 </th><th style='border: 2px solid black; height: 50px;'> 3 </th><th style='border: 2px solid black; height: 50px;'> 4 </th><th style='border: 2px solid black; height: 50px;'> 5 </th><th style='border: 2px solid black; height: 50px;'> 6 </th></tr>"
            + "<tr style='border: 2px solid black'>"+
                 "<th style='border: 2px solid black; height: 50px;'> Frage 1</th> "+
                 "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer0+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA01.length+"</td>"+
                "<td style='border: 2px solid black; height: 50px;'>"+countA02.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA03.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA04.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA05.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA06.length+"</td>"+
             "</tr>"+
             "<tr style='border: 2px solid black'>"+
                 "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
                 "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer1+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA11.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA12.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA13.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA14.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA15.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA16.length+"</td>"+
            "</tr>"+
             "<tr style='border: 2px solid black'>"+
                 "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
                 "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer2+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA21.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA22.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA23.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA24.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA25.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA26.length+"</td>"+
             "</tr>"+
             "<tr style='border: 2px solid black'>"+
                 "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
                 "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer3+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA31.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA32.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA33.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA34.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA35.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA36.length+"</td>"+
             "</tr>"+
             "<tr style='border: 2px solid black'>"+
                 "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
                 "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer4+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA41.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA42.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA43.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA44.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA45.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA46.length+"</td>"+
             "</tr>"+
             "<tr style='border: 2px solid black'>"+
                 "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
                 "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer5+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA51.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA52.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA53.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA54.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA55.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA56.length+"</td>"+
             "</tr>"+
             "<tr style='border: 2px solid black'>"+
                 "<th style='border: 2px solid black; height: 50px;'> Frage 1</th> "+
                 "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer6+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA61.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA62.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA63.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA64.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA65.length+"</td>"+
                 "<td style='border: 2px solid black; height: 50px;'>"+countA66.length+"</td>"+
             "</tr>"+
         "</table> </body> </html> </html>'");
          
            
        }

       
    });
    
    
    

    
    //durchAnswer0= 12;
    res.write("<html><header><meta http-equiv='refresh' content='5'></header>  <body> Ausgabe  <table style='width: 100% ;''><tr style='border: 2px solid black'><th style='border: 2px solid black; height: 50px;'> Kategorie</th><th style='border: 2px solid black; height: 50px;'> Durchschnitt</th><th style='border: 2px solid black; height: 50px;'> 1 </th><th style='border: 2px solid black; height: 50px;'> 2 </th><th style='border: 2px solid black; height: 50px;'> 3 </th><th style='border: 2px solid black; height: 50px;'> 4 </th><th style='border: 2px solid black; height: 50px;'> 5 </th><th style='border: 2px solid black; height: 50px;'> 6 </th></tr>"
    + "<tr style='border: 2px solid black'>"+
         "<th style='border: 2px solid black; height: 50px;'> Frage 1</th> "+
         "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer0+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA01.length+"</td>"+
        "<td style='border: 2px solid black; height: 50px;'>"+countA02.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA03.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA04.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA05.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA06.length+"</td>"+
     "</tr>"+
     "<tr style='border: 2px solid black'>"+
         "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
         "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer1+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA11.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA12.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA13.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA14.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA15.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA16.length+"</td>"+
    "</tr>"+
     "<tr style='border: 2px solid black'>"+
         "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
         "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer2+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA21.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA22.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA23.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA24.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA25.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA26.length+"</td>"+
     "</tr>"+
     "<tr style='border: 2px solid black'>"+
         "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
         "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer3+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA31.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA32.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA33.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA34.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA35.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA36.length+"</td>"+
     "</tr>"+
     "<tr style='border: 2px solid black'>"+
         "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
         "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer4+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA41.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA42.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA43.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA44.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA45.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA46.length+"</td>"+
     "</tr>"+
     "<tr style='border: 2px solid black'>"+
         "<th style='border: 2px solid black; height: 50px;'> Frage 1</th>"+ 
         "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer5+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA51.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA52.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA53.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA54.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA55.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA56.length+"</td>"+
     "</tr>"+
     "<tr style='border: 2px solid black'>"+
         "<th style='border: 2px solid black; height: 50px;'> Frage 1</th> "+
         "<td style='border: 2px solid black; height: 50px;'>"+durchAnswer6+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA61.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA62.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA63.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA64.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA65.length+"</td>"+
         "<td style='border: 2px solid black; height: 50px;'>"+countA66.length+"</td>"+
     "</tr>"+
 "</table> </body> </html>");
    resetParas();
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


       
    

function resetParas(){
    clean = [];
    jasFile='';
    durchAnswer0 = 0;
    durchAnswer1 = 0;
    durchAnswer2 = 0;
    durchAnswer3 = 0;
    durchAnswer4 = 0;
    durchAnswer5 = 0;
    durchAnswer6 = 0;

    countA01 = [];
    countA02 = [];
    countA03 = [];
    countA04 = [];
    countA05 = [];
    countA06 = [];

    countA11 = [];
    countA12 = [];
    countA13 = [];
    countA14 = [];
    countA15 = [];
    countA16 = [];

    countA21 = [];
    countA22 = [];
    countA23 = [];
    countA24 = [];
    countA25 = [];
    countA26 = [];

    countA31 = [];
    countA32 = [];
    countA33 = [];
    countA34 = [];
    countA35 = [];
    countA36 = [];

    countA41 = [];
    countA42 = [];
    countA43 = [];
    countA44 = [];
    countA45 = [];
    countA46 = [];

    countA51 = [];
    countA52 = [];
    countA53 = [];
    countA54 = [];
    countA55 = [];
    countA56 = [];
    countA61 = [];
    countA62 = [];
    countA63 = [];
    countA64 = [];
    countA65 = [];
    countA66 = [];
    }

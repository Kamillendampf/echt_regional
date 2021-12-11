var idN = "name";
var idP = "passwort";
var idBtn = "btnLogin";
var idPrin = "print";
function login() {
    console.log("Es wird versucht sich an zu melden.")
    var permName=0
    var permPasswort = 0
    var name = '';
    var passwort ='';
    
    if (document.querySelector('#'+idP).value == ""){
        window.alert("Du musst einen Namen angeben.");
    }else{
         passwort = document.querySelector('#'+idP).value;
    }

    if (document.querySelector('#'+idN).value == ""){
        window.alert("Du muss ein Passwort eingeben.")
    }
    else{
         name  = document.querySelector('#'+idN).value;
    }
    
    if (name == "echt" && passwort == "echt123" ){
        console.log("successful login")
        permission()
        
    }
    else{
        window.alert("Zugriff verweigert! \n Bitt ueberpruefe deine Anmeldedaten.")
    }

}


function  permission() {
    console.log(idN);
    console.log(idP);
    document.getElementById(idN).style.display = "none";
    document.getElementById(idP).style.display= "none";
    document.getElementById(idBtn).style.display= "none";
    document.getElementById(idP).innerHTML = "<tabele>"
}
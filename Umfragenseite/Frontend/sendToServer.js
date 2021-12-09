function dataTransfer(){
    var jsonData;
    let xhr = new XMLHttpRequest();
    const host = "http://localhost:3000";

    //------------------------------------------------------------------0
    if ( document.querySelector('input[name="1"]:checked') != null){
        msg0 = document.querySelector('input[name="1"]:checked').value;  
   }
   else{
       window.alert("Du hast Frage eins nicht beantwortet");
       window.stop(0);
       document.location.reload();
   }
  //------------------------------------------------------------------1
   if ( document.querySelector('input[name="2"]:checked') != null){
        msg1 = document.querySelector('input[name="2"]:checked').value;  
  }
  else{
      window.alert("Du hast Frage eins nicht beantwortet");
      window.stop(0);
      document.location.reload();
  }
  //------------------------------------------------------------------2
  if ( document.querySelector('input[name="3"]:checked') != null){
        msg2 = document.querySelector('input[name="3"]:checked').value; 
   }
   else{
       window.alert("Du hast Frage eins nicht beantwortet");
       window.stop(0);
       document.location.reload();
   }
  //------------------------------------------------------------------3
   if ( document.querySelector('input[name="4"]:checked') != null){
       msg3 = document.querySelector('input[name="4"]:checked').value; 
  }
  else{
      window.alert("Du hast Frage eins nicht beantwortet");
      window.stop(0);
      document.location.reload();
  }
  //------------------------------------------------------------------4
  if ( document.querySelector('input[name="5"]:checked') != null){
       msg4 = document.querySelector('input[name="5"]:checked').value;
   }
   else{
       window.alert("Du hast Frage eins nicht beantwortet");
       window.stop(0);
       document.location.reload();
   }
  //------------------------------------------------------------------5
   if ( document.querySelector('input[name="6"]:checked') != null){
       msg5 = document.querySelector('input[name="6"]:checked').value;
   }
   else{
      window.alert("Du hast Frage eins nicht beantwortet");
       window.stop(0);
      document.location.reload();
}
  //------------------------------------------------------------------6
   if ( document.querySelector('input[name="7"]:checked') != null){
       msg6 = document.querySelector('input[name="7"]:checked').value;
   }
   else{
       window.alert("Du hast Frage eins nicht beantwortet");
       window.stop(0);
       document.location.reload();
   }
      //------------------------------------------------------------------6
    const msg7 = document.querySelector("#acht").value;
    const msg8 = document.querySelector('#neun').value;

    if (msg7 == ""){
        window.alert("Du musst ein Gemuese angeben.");
    }
    else if (msg8 == ""){
        window.alert("Du musst mir ein feedback geben.");
    }
    else{
        let msgList = {
            antwort0: msg0,
            antwort1: msg1,
            antwort2: msg2,
            antwort3: msg3,
            antwort4: msg4,
            antwort5: msg5,
            antwort6: msg6,
            antwort7: msg7,
            antwort8: msg8,
        }

        jsonData = JSON.stringify(msgList);
        console.log(jsonData);
        xhr.open('POST', host, true);
        xhr.send(jsonData);

        window.alert("Vielen Dank!");
        document.location="index.html";
    }

}
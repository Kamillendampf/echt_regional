function dataTransfer(){
    var jsonData;
    let xhr = new XMLHttpRequest();
    const host = "http://localhost:3000";
    const msg  =  document.querySelector('input[name="1"]:checked').value;
    const msg1 = document.querySelector('input[name="2"]:checked').value;
    const msg2 = document.querySelector('input[name="3"]:checked').value;
    const msg3 = document.querySelector('input[name="4"]:checked').value;
    const msg4 = document.querySelector('input[name="5"]:checked').value;
    const msg5 = document.querySelector('input[name="6"]:checked').value;
    const msg6 = document.querySelector('input[name="7"]:checked').value;
    const msg7 = document.querySelector("#acht").value;
    const msg8 = document.querySelector('#neun').value;
    if (msg7 == ""){
        window.alert("Du musst ein Gemuese angeben.");
    }
    else if (msg8 == ""){
        window.alert("Du musst mir ein feedback geben.");
    }
    else{
        console.log(msg);
        console.log(msg1);
        console.log(msg2);
        console.log(msg3);
        console.log(msg4);
        console.log(msg5);
        console.log(msg6);
        console.log(msg7);
        console.log(msg8);
        let msgList = {
            antwort: msg,
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
        xhr.open('POST', host);
        xhr.send(jsonData);
        document.location="index.html"
    }


}
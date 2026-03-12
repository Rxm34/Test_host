const button = document.getElementById('btn-test');

button.addEventListener('click', () => {
    console.log("Le bouton a été cliqué !");
    alert("Test réussi !");
});

console.log("Script chargé avec succès.");

// Original Code By Webdevtrick ( https://webdevtrick.com )
function showTime(){
 var date = new Date();
 var h = date.getHours(); 
 var m = date.getMinutes(); 
 var s = date.getSeconds(); 
 
 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s;
 
 var time = h + ":" + m + ":" + s + " " + session;
 document.getElementById("DigitalCLOCK").innerText = time;
 document.getElementById("DigitalCLOCK").textContent = time;
 
 setTimeout(showTime, 1000);
 
}
showTime();

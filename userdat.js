// JavaScript-Datei: userdat.js

// Funktion, um die aktuelle Uhrzeit anzuzeigen
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s;
  document.getElementById("clock").innerHTML = time;

  setTimeout(showTime, 1000);
}

// Funktion, um das aktuelle Datum anzuzeigen
function showDate() {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  day = (day < 10) ? "0" + day : day;
  month = (month < 10) ? "0" + month : month;

  var date = day + "/" + month + "/" + year;
  document.getElementById("date").innerHTML = date;
}

// Funktion, um die IP-Adresse des Benutzers anzuzeigen
function showIP() {
  fetch('https://api.ipify.org?format=json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("ip").innerHTML = data.ip;
    });
}

// Funktion zur Anzeige der Bildschirmauflösung
function displayScreenResolution() {
  const screenResolution = `Bildschirmauflösung: ${window.screen.width} x ${window.screen.height}`;
  document.getElementById("screenResolution").innerHTML = screenResolution;
}

// Funktion zur Anzeige des Browsertyps und -versions
function displayBrowserDetails() {
  const browserDetails = `Browser: ${navigator.userAgent}`;
  document.getElementById("browserDetails").innerHTML = browserDetails;
}

// Funktion zur Anzeige des Betriebssystems
function displayOperatingSystem() {
  const operatingSystem = `Betriebssystem: ${navigator.platform}`;
  document.getElementById("operatingSystem").innerHTML = operatingSystem;
}

// Aufruf der Funktionen bei Seitenladen
window.onload = function() {
  displayScreenResolution();
  displayBrowserDetails();
  displayOperatingSystem();
};

// Funktion, um alles zusammen auszuführen
function showAll() {
  showTime();
  showDate();
  showIP();
  displayScreenResolution();
  displayBrowserDetails();
  displayOperatingSystem();
  
}

// Aufruf der showAll()-Funktion bei Laden der Seite
window.onload = showAll;

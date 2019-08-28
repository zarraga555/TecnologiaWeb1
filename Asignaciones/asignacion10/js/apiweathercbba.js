let weatherRequest = new XMLHttpRequest ();
// URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
// APIKEY: ###################
// Identificación de Cochabamba: 3919968
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=3919968&units=metric&APPID=07670478ab762aa295348c522c136687'
weatherRequest.open ('GET', apiURLstring, true);
weatherRequest.send ();
/* Para esperar a que se cargue el objeto de solicitud, use el método onload para
encapsular
el analizador JSON y las declaraciones de salida en una función genérica O usan un
addEventListener usando el parámetro load. */
 weatherRequest.onload = function () {
 let weatherData = JSON.parse (weatherRequest.responseText);
 console.log (weatherData);
 document.getElementById ('cc-temp'). innerHTML = weatherData.main.temp;

 let icon =
"http://openweathermap.org/img/wn/"+weatherData.weather[font.icon+".png"];
 let desc = weatherData.weather [0] .description;
 document.getElementById ('cc-img'). setAttribute ('src', icono);
 document.getElementById ('cc-img'). setAttribute ('alt', desc);
 }
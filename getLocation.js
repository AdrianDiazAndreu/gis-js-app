var x = document.getElementById("demo");

var y = document.getElementById("chino") ;

var cum = document.getElementById("cum") ;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  
  var chino_good = document.createElement("a") ;
  chino_good.href = "chino.jpg" ;
  var butt = document.createElement("button") ;
  butt.innerHTML = "Click here if you like China" ;
  chino_good.appendChild(butt) ;
  y.appendChild(chino_good) ;

  var c = document.getElementById("button") ;
  c.hidden = true ;
  cum.innerHTML = "" ;
  cum.innerHTML = "El Partido Comunista Chino ahora conoce tu posicion por favor dinos si te gusta nuestro pais" ;

  var chino_bad = document.createElement("a") ;
  chino_bad.href = "chino_bad.jpeg" ;
  var butt_bad = document.createElement("button") ;
  butt_bad.innerHTML = "Click here if you don't like China" ;
  chino_bad.appendChild(butt_bad) ;
  y.appendChild(chino_bad) ;
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  var xd = "hola" ;
  return xd ;


  
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
function myFunction() {
  alert("Thank You!");
  window.open("#");
  return false;
}
/* Slideshow JS */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}


/* Google Map JS */
var map;
var marker;
function initMap()
{
  map = new google.maps.Map(document.getElementById('map'),
  {
    center: {lat: 41.881832, lng: -87.623177},
    zoom: 10,
    mapTypeId: 'roadmap',
    mapTypeControl: true,
    mapTypeControlOptions:
    {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      mapTypeIds: ['roadmap', 'satellite'],
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions:
    {
      position: google.maps.ControlPosition.TOP_LEFT
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }

  });

  var contentString =
    '<h1>International Society for Universal Dialgoue</h1>';

  var Infowindow = new google.maps.InfoWindow(
    {
      content: contentString
    });
    
  var marker = new google.maps.Marker(
  {
    map: map,
    draggable: true,
    position: {lat: 41.881832, lng: -87.623177},
    animation: google.maps.Animation.BOUNCE,
    title: 'International Society for Universal Dialgoue'
  });

  marker.addListener('click', function()
  {
    Infowindow.open(map, marker);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);



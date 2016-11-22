$(document).ready(function() {
  $("#map1").googleMap({
      zoom: 10, // Initial zoom level (optional)
      coords: [48.895651, 2.290569], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
    $("#map2").googleMap();
    $("#map2").addMarker({
      coords: [48.895651, 2.290569], // GPS coords
      url: 'http://www.tiloweb.com', // Link to redirect onclick (optional)
      id: 'marker1' // Unique ID for your marker
    });
    $("#map3").googleMap();
    $("#map3").addMarker({
      coords: [48.895651, 2.290569], // GPS coords
      title: 'Marker n°1', // Title
      text:  '<b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' // HTML content
    });
    $("#map4").googleMap();
   $("#map4").addWay({
     start: "15 avenue des champs Elysées 75008 Paris", // Postal address for the start marker (obligatory)
   end:  [48.895651, 2.290569], // Postal Address or GPS coordinates for the end marker (obligatory)
   route : 'way', // Block's ID for the route display (optional)
   langage : 'english' // language of the route detail (optional)
 });
});

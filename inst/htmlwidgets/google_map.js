HTMLWidgets.widget({

  name: 'google_map',
  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // to replicate the async callback
        setTimeout(function() {
          var mapDiv = document.getElementById(el.id);
            mapDiv.className = "googlemap";
            var map = new google.maps.Map(mapDiv, {
              center: {lat: x.lat, lng: x.lon},
              zoom: x.zoom
            });

        }, 1000);


      },
      resize: function(width, height) {
        // TODO: code to re-render the widget with a new size
      }

    };
  }
});

addMarker = function(lat, lon){
  var latlon = new google.map.LatLng(lat, lon);

  var marker = new google.maps.Marker({
    position: latlong,
    draggable: false,
    map: map
  });
};



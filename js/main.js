$(document).ready(function () {
  window.king = 2.5;
  $.get("tides/stations.json", function(stations) { window.lats = stations; });
});

function initMap() {

  var selector = document.querySelector("#kingme");

  selector.addEventListener('change', function (event) {
    var value = event.target.value;
    window.king = Number(value);
    drawCalendar();
  });


  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 25.7823072, lng: -80.3010434 },
    zoom: 12
  });
  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var elevator = new google.maps.ElevationService;
  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);
  var marker = new google.maps.Marker({
    map: map
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

  autocomplete.addListener('place_changed', drawCalendar );

  function drawCalendar () {
    infowindow.close();

    var place = autocomplete.getPlace();

    if (!place.geometry) return;

    if (place.geometry.viewport) { map.fitBounds(place.geometry.viewport); }
    else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });
    marker.setVisible(true);

    var latitude = place.geometry.location.lat();
    var longitude = place.geometry.location.lng();
    var latLng = place.geometry.location;

    displayLocationElevation(latLng, elevator, infowindow);

    var best_dist = 999999999;
    var best_stn = null;
    for (let i = 0; i < lats.length; i++) {
      var cur_stn = lats[i];
      var cur_dist = getDistanceFromLatLonInKm(cur_stn[2], cur_stn[3], latitude, longitude);

      if (Math.abs(cur_dist) < Math.abs(best_dist)) {
        best_stn = cur_stn;
        best_dist = Math.abs(cur_dist);
      }
    }
    var miles = (best_dist * 0.62137).toPrecision(5);
    document.getElementById("stationdist").innerHTML = 'Distance to station = ' + miles + ' miles.';
    if (miles > 2) {
      document.getElementById("madlib").style.display = "block";
      document.getElementById("madlib").insertAdjacentHTML('beforeEnd', 'Your distance to the tide monitoring station is ' + miles + ' miles. The farther you are from the station, the longer it will take flooding from high tides, if any, to reach you.');
    }
    else if (miles <= 2) {
      document.getElementById("madlib").style.display = "block";
      document.getElementById("madlib").insertAdjacentHTML('beforeEnd', 'Your distance to the tide monitoring station is ' + miles + ' miles. The closer you are to the station, the more likely you are to see flooding around the time of the high tides.');
    }
    var passy = "tides/" + best_stn[1] + "_annual.xml";
    loadXMLDoc(passy);

  }

}

function addToolTip () {
  $('.masterTooltip')
      .hover(
          function () {
            // Hover over code
            var title = $(this).attr('title');
            $(this).data('tipText', title).removeAttr('title');
            $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
          },
          function () {
            // Hover out code
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
          }
      )
      .mousemove(
          function(e) {
            var mouseX = e.pageX + 20; //Get X coordinates
            var mouseY = e.pageY + 10; //Get Y coordinates
            $('.tooltip').css({ top: mouseY, left: mouseX })
          }
      );
}

/**
 * This uses the ‘haversine’ formula to calculate the great-circle distance
 * between two points – that is, the shortest distance over the
 * earth’s surface – giving an ‘as-the-crow-flies’ distance between
 * the points (ignoring any hills they fly over, of course!).
 *
 * @param {number} lat1 - Latitude of the first coordinate
 * @param {number} lon1 - Longitude of the first coordinate
 * @param {number} lat2 - Latitude of the second coordinate
 * @param {number} lon2 - Longitude of the second coordinate
 */
function getDistanceFromLatLonInKm (lat1, lon1, lat2, lon2) {
  const RADIUS_OF_EARTH = 6371;

  let degrees2radians = function (degrees) { return degrees * (Math.PI / 180) }; // Degrees to Radians

  let firstLatRadians  = degrees2radians(lat1);
  let secondLatRadians = degrees2radians(lat2);
  let halfLatRadians   = degrees2radians(lat2 - lat1) / 2;  // Latitude to Radians Divided by 2
  let halfLonRadians   = degrees2radians(lon2 - lon1) / 2;  // Longitude to Radians Divided by 2

  // The square of half the chord length between the points
  let lengthSquared = Math.sin(halfLatRadians)  * Math.sin(halfLatRadians) +
                      Math.cos(firstLatRadians) * Math.cos(secondLatRadians) *
                      Math.sin(halfLonRadians)  * Math.sin(halfLonRadians);

  // The angular distance in radians
  let angular_distance_in_radians = 2 * Math.atan2(Math.sqrt(lengthSquared), Math.sqrt(1-lengthSquared));

  return (RADIUS_OF_EARTH * angular_distance_in_radians); // Distance in KM
}

/**
 * Generates the elavation info madlib.
 *
 * @param {number} theElevation - The elevation in a location
 */

function madElevate (theElevation) {
  let lowElevation     = theElevation < 3;
  let averageElevation = theElevation < 8;
  let highElevation    = theElevation >= 8;

  function elevationLevel () {
    if ( lowElevation )     return 'low';
    if ( averageElevation ) return 'normal';
    if ( highElevation )    return 'high for south Florida';
    return 'unknown'
  }

  function floodLevel () {
    if ( lowElevation )     return 'increased';
    if ( averageElevation ) return 'average';
    if ( highElevation )    return 'decreased';
    return 'unknown'
  }

  return 'Your elevation of ' + theElevation  + ' is ' + elevationLevel() + '.'
       + ' The likelihood that you will see flooding during the high tides is '
       + floodLevel() + '.';
}

function loadXMLDoc(mystation) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadArray(this);
    }
  };
  xmlhttp.open("GET", mystation, true);
  xmlhttp.send();
}

function displayLocationElevation(location, elevator, infowindow) {
  // Initiate the location request
  elevator.getElevationForLocations(
      {'locations': [location]},
      function(results, status) {
        infowindow.setPosition(location);
        if (status === 'OK') {
          // Retrieve the first result
          if (results[0]) {
            // Open the info window indicating the elevation at the clicked position.
            var elevateme = (3.28084*(results[0].elevation)).toPrecision(2);

            document.getElementById("elevate").innerHTML = 'Your elevation is  ' + elevateme + ' feet.';

            document.querySelector("#madlib").insertAdjacentHTML('beforeEnd', madElevate(elevateme));
          }
        }
      }
  );
}

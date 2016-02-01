Polymer({
  is: 'locations-page',
  clickItem: function(event) {
    var ph = document.getElementById("pinehillsmarker");
    var am = document.getElementById("americanamarker");
    var ec = document.getElementById("eastcolonialmarker");
    ph.open = false;
    am.open = false;
    ec.open = false;
    
    var markerName = event.currentTarget.attributes.marker.value;
    var marker = document.getElementById(markerName);
    var dest = event.currentTarget.attributes.address;
    var destination = document.getElementById("destinationAddressInput");
    destination.value = dest.value;
    marker.open = true;
  },
  clickDirections: function(event) {
    var start = document.getElementById("startAddressInput");
    var end = document.getElementById("destinationAddressInput");
    var directions = document.getElementById("mapdirections");
    
    directions.startAddress=start.value;
    directions.endAddress=end.value;
  }
})
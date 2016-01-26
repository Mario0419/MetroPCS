Polymer({
  is: 'locations-page',
  clickItem: function(event) {
    var markerName = event.currentTarget.attributes.marker.value;
    var marker = document.getElementById(markerName);
    marker.open = !marker.open;
  }
})
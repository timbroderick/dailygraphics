
var CartoDB = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});

var map = L.map('graphic');

$.getJSON("js/topgolf.geojson", function(data) {

    geojson = L.geoJson(data, {

            style: function (feature) {
                return {
                  fillColor: 'blue',
                  weight: 1,
                  opacity: 0.4,
                  color: 'white',
                  dashArray: '',
                  fillOpacity: 0.4
                };
              },

      onEachFeature: function (feature, layer) {
        layer.bindPopup(
        '<h5><strong>Proposed development site</strong></h5>', {maxWidth: 210} );
      }

    });


  var popup = L.popup()
      .setLatLng([42.2038, -87.893104])
      .setContent("<h5><strong>Proposed development site</strong></h5>")
      .openOn(map);

  map.setView(new L.LatLng(42.2015, -87.893104),15);
  map.addLayer(CartoDB);
  geojson.addTo(map);

  });

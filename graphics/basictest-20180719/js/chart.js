
var CartoDB = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  maxZoom: 19
});

  var map = L.map('graphic');
  var marker = L.marker([42.105352, -87.894049]).addTo(map)

  var popup = L.popup()
      .setLatLng([42.105352, -87.894049])
      .setContent("<h5><strong>Site of fire</strong></h5>")
      .openOn(map);

  marker.bindPopup("<h5><strong>Site of fire</strong></h5>")
  map.setView(new L.LatLng(42.105352, -87.894049),15);
  map.addLayer(CartoDB);

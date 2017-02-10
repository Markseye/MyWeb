/*curl "https://api.mapbox.com/v4/mmarkseye.ciywe2vmw001u38rq4kwyfjr5-39xk0/1/0/0.png?access_token=ypk.eyJ1IjoibWFya3NleWUiLCJhIjoiY2l4ejFya3dtMDAzNzMzcGl4MjltMWdqaCJ9.MJaFNOAydWNwEP7VQszPFQ"*/
mapboxgl.accessToken = 'pk.eyJ1IjoibWFya3NleWUiLCJhIjoiY2l4ejFya3dtMDAzNzMzcGl4MjltMWdqaCJ9.MJaFNOAydWNwEP7VQszPFQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/markseye/cixz4p447003g2soz16b8n4kr', //stylesheet location
    center: [-73.992084, 40.739431], // starting position
    zoom: 15 // starting zoom
});

//disable map zoom when scrolling
map.scrollZoom.disable();



/*var map = L.mapbox.map('map', 'markseye.2lf18h6c')
    .setView([-73.992084, 40.739431], 15);*/

/*var marker = new mapboxgl.Marker()
  .setLngLat([-73.992055, 40.738822])
  .addTo(map);*/



/*L.tileLayer('https://api.mapbox.com/v4/markseye.ciywe2vmw001u38rq4kwyfjr5-39xk0/1/0/0.png?access_token=ypk.eyJ1IjoibWFya3NleWUiLCJhIjoiY2l4ejFya3dtMDAzNzMzcGl4MjltMWdqaCJ9.MJaFNOAydWNwEP7VQszPFQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    subdomains: ['a','b','c','d'],
    mapId: 'markseye.ciywe2vmw001u38rq4kwyfjr5-39xk0',
    token: 'pk.eyJ1IjoibWFya3NleWUiLCJhIjoiY2l4ejFya3dtMDAzNzMzcGl4MjltMWdqaCJ9.MJaFNOAydWNwEP7VQszPFQ'
}).addTo(map);*/
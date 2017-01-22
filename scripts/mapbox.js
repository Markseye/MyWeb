mapboxgl.accessToken = 'pk.eyJ1IjoibWFya3NleWUiLCJhIjoiY2l4ejFya3dtMDAzNzMzcGl4MjltMWdqaCJ9.MJaFNOAydWNwEP7VQszPFQ';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [-73.992084, 40.739431], // starting position
    zoom: 15 // starting zoom
});


/*var map = L.mapbox.map('map', 'markseye.2lf18h6c')
    .setView([-73.992084, 40.739431], 15);
    */
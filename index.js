mapboxgl.accessToken = 'pk.eyJ1IjoiamJkMTk5MyIsImEiOiJjazUzbHVnMXMwOXF4M2x0N3kxbHZkbjh5In0.dj2oaeZIh4gRCkjn9x5CRA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});

let marker;

const followMe = (pos) => {
    const lng = pos.coords.longitude;
    const lat = pos.coords.latitude;

    map.flyTo({
        center: [lng, lat],
        zoom: 18
    });

    marker = new mapboxgl.Marker();
    marker.setLngLat([lng, lat]);
    marker.addTo(map);
}

navigator.geolocation.watchPosition(followMe);
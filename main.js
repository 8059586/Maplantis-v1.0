let latitude = 28.4089123, longitude = 77.3177894
mapboxgl.accessToken = "pk.eyJ1IjoiZGllZ293bWIiLCJhIjoiY2wxNzNvYXJ4MDBoZDNpa2t3djNwMG44OSJ9.S73TUZRU8Hvx8gP7xLDCxQ"

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    "top-left"
);

    const map = L.map('map').setView([listing.geometry.coordinates[1], listing.geometry.coordinates[0]], 9);
    const key = mapToken;

    L.tileLayer(
    `https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${key}`,
    {
        attribution: '&copy; MapTiler'
    }
    ).addTo(map);

   const redIcon = L.icon({
    iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',

    shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.marker(
 [listing.geometry.coordinates[1], listing.geometry.coordinates[0]],
 { icon: redIcon }
)
.addTo(map)
.bindPopup(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`);



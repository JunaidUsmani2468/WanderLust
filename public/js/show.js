// Rating Stars:
let stars = document.querySelectorAll('.rating-star');
let inputField = document.getElementById('rating-value');

if (stars.length > 0) {
  updateFilledStars(3);

  stars.forEach((star) => {
    star.addEventListener('click', () => {
      let ratingValue = star.getAttribute('data-value');

      if (inputField) {
        inputField.value = ratingValue;
      }

      updateFilledStars(ratingValue);
    });
  });
}

function updateFilledStars(value) {
  stars.forEach((star) => {
    let starValue = star.getAttribute('data-value');

    if (starValue <= value) {
      star.classList.remove('fa-regular');
      star.classList.add('fa-solid');

    } else {
      star.classList.remove('fa-solid');
      star.classList.add('fa-regular');
    }
  });
}

// Map Logic
let coordinates = listing.geometry.coordinates;

// SWAP GeoJSON from [Lng, Lat] to [Lat, Lng] thsi is what Leaflet needs.
let mapCoordinates = [coordinates[1], coordinates[0]];

// Icon design
const icon = L.icon({
    iconUrl: '/assets/compass.svg',

    iconSize:     [40, 40],
    iconAnchor:   [20, 20],
    popupAnchor:  [0, -20],
});

const map = L.map('map').setView(mapCoordinates, 10);

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

console.log('geojson:', coordinates);
console.log('leaflet:', mapCoordinates);

L.marker(mapCoordinates, {icon: icon})
    .addTo(map)
    .bindPopup(`
        <div style="text-align: center;">
            <h4 style="color: #fe424d; margin: 0;">${listing.title}</h4>
            <p style="margin: 5px 0;">Exact location provided after booking.</p>
            <p style="font-weight: bold; font-size: 1.1rem;">₹ ${listing.price.toLocaleString("en-IN")}/night</p>
        </div>
    `)
    .openPopup();
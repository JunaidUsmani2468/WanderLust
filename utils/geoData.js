async function getGeoData(location, country) {
    let query = `${location},${country}`;
    let nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
    let response = await fetch(nominatimUrl);
    let data = await response.json();

    if (data.length === 0) return null;

    return geometry = {
        type: 'Point',
        coordinates: [parseFloat(data[0].lon), parseFloat(data[0].lat)],
    };
}

module.exports = getGeoData;
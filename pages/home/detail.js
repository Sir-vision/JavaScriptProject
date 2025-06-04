// Get ID from URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

// Fetch the JSON data (assuming db.json is at root level)
fetch('../../db.json')
  .then(res => res.json())
  .then(data => {
    const housingLocation = data.location.find(loc => loc.id === id);

    if (!housingLocation) {
      document.body.innerHTML = '<h1>Listing not found</h1>';
      return;
    }

    // Populate DOM
    document.getElementById('detailName').textContent = housingLocation.name;
    document.getElementById('detailLocation').textContent = `${housingLocation.city}, ${housingLocation.state}`;
    document.getElementById('units').textContent = `Units available: ${housingLocation.availableUnits}`;
    document.getElementById('wifi').textContent = `Has wifi: ${housingLocation.wifi ? 'Yes' : 'No'}`;
    document.getElementById('laundry').textContent = `Has laundry: ${housingLocation.laundry ? 'Yes' : 'No'}`;
    document.getElementById('detailPhoto').src = `../../${housingLocation.photo}`;
    document.getElementById('detailPhoto').alt = housingLocation.name;
  });

// Handle form submission
document.getElementById('applyForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Application submitted!");
});

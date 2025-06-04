class HousingService {
  async getAllHousingLocations() {
    try {
      const response = await fetch('/db.json'); // Fetch from the root
      const data = await response.json();       // Convert response to JS object
      return data.location;                     // Return the array of locations
    } catch (error) {
      console.error('Error fetching housing locations:', error);
      return []; // Return empty array if something goes wrong
    }
  }
}

class HomeComponent {
  constructor(housingService) {
    this.housingService = housingService;
    this.housingLocationList = [];
    this.filteredLocationList = [];

    this.init();
  }

  async init() {
    this.housingLocationList = await this.housingService.getAllHousingLocations();
    this.filteredLocationList = [...this.housingLocationList];
    this.render();
  }

  filterResults(text) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    } else {
      this.filteredLocationList = this.housingLocationList.filter((location) =>
        location.city.toLowerCase().includes(text.toLowerCase())
      );
    }
    this.render();
  }

  render() {
    const container = document.getElementById('listingContainer');
    container.innerHTML = '';

    this.filteredLocationList.forEach(location => {
      const section = document.createElement('section');
      section.className = 'listing';

      section.innerHTML = `
        <img class="listing-photo" src="../../${location.photo}" alt="${location.name}">
        <h2 class="listing-heading">${location.name}</h2>
        <p class="listing-location">${location.city}, ${location.state}</p>
        <p class="listing-units">Available Units: ${location.availableUnits}</p>
        <p class="listing-amenities">
          Wifi: ${location.wifi ? 'Yes' : 'No'} | Laundry: ${location.laundry ? 'Yes' : 'No'}
        </p>
        <a href="../../pages/home/detail.html?id=${location.id}">Learn More</a>
      `;
      container.appendChild(section);
    });
  }
}

// Initialize app
const service = new HousingService();
const homeComponent = new HomeComponent(service);

// Hook up search input
document.getElementById('search-box').addEventListener('input', (event) => {
  homeComponent.filterResults(event.target.value);
});

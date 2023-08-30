const itinerarySection = document.getElementById('itinerary');

const itineraryData = [
    {
        day: 'Day 1',
        destination: 'Bhalukpong, Arunachal Pradesh',
        activities: ['Sightseeing along  the Brahmaputra River', 'Sessa Orchid Sanctuary', 'Eaglenest Wildlife Sanctuary', 'Dinner at local restaurant']
    },
    {
        day: 'Day 2',
        destination: 'Dirang, Arunachal Pradesh',
        activities: ['Dirang Fort', 'National Research Centre On Yak', 'Dinner at Local Restaurant']
    },
     {
        day: 'Day 3',
        destination: 'Scenic Drive to Tawang',
        activities: ['Sela Pass', 'Paradise Lake', 'Jaswant Garh War Memorial']
    },
     {
        day: 'Day 4',
        destination: 'Tawang Sightseeing',
        activities: ['Bum La Pass', 'Madhuri Lake', 'Pankang Teng Tso Lake']
    },
     {
        day: 'Day 5',
        destination: 'Tawang',
        activities: ['Buddhist Monastery', 'Exploring markets','Tawang War Memorial']
    },
     {
        day: 'Day 6',
        destination: 'Scenic Drive to Tezpur',
        activities: ['Mahabhairab Temple', 'Bura-Chapori Wildlife Sanctuary']
    },
     {
        day: 'Day 7',
        destination: 'Goodbye Guwahati',
        activities: ['scenic attractions along the way to Guwahati', 'Guwahati Airport/Railway station']
    },
    // Add more days and activities as needed
];

function createItineraryItem(day, destination, activities) {
    const item = document.createElement('div');
    item.classList.add('itinerary-item');
    
    const dayHeading = document.createElement('h2');
    dayHeading.textContent = day;
    
    const destinationPara = document.createElement('p');
    destinationPara.textContent = `Destination: ${destination}`;
    
    const activitiesList = document.createElement('ul');
    activities.forEach(activity => {
        const activityItem = document.createElement('li');
        activityItem.textContent = activity;
        activitiesList.appendChild(activityItem);
    });
    
    item.appendChild(dayHeading);
    item.appendChild(destinationPara);
    item.appendChild(activitiesList);
    
    return item;
}

itineraryData.forEach(data => {
    const itineraryItem = createItineraryItem(data.day, data.destination, data.activities);
    itinerarySection.appendChild(itineraryItem);
});

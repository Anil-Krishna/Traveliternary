const itinerarySection = document.getElementById('itinerary');

const itineraryData = [
    {
        day: 'Day 1',
        destination: 'City A',
        activities: ['Sightseeing', 'Museum visit', 'Dinner at local restaurant']
    },
    {
        day: 'Day 2',
        destination: 'City B',
        activities: ['Hiking', 'Exploring markets']
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

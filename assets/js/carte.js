// Initialisation de la carte
const map = L.map('map').setView([48.8566, 2.3522], 5); // Centrée sur l'Europe
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Icônes personnalisées
const battleIcon = L.icon({
    iconUrl: 'assets/icons/red-marker.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const resistanceIcon = L.icon({
    iconUrl: 'assets/icons/blue-marker.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

const capitulationIcon = L.icon({
    iconUrl: 'assets/icons/green-marker.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34]
});

// Ajouter des marqueurs avec des icônes
const locations = [
    { lat: 48.8566, lon: 2.3522, text: "Paris : Occupation et Résistance", icon: resistanceIcon },
    { lat: 50.8503, lon: 4.3517, text: "Bruxelles : Les réseaux de Résistance", icon: resistanceIcon },
    { lat: 49.4333, lon: 1.0833, text: "Débarquement en Normandie : 1944", icon: battleIcon },
    { lat: 52.5200, lon: 13.4050, text: "Berlin : Capitulation en 1945", icon: capitulationIcon }
];

locations.forEach(location => {
    L.marker([location.lat, location.lon], { icon: location.icon }).addTo(map)
        .bindPopup(location.text);
});

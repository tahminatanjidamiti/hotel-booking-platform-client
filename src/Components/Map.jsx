import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const Map = () => {
    const hotels = [
        {
            id: "63e0c3425f70f5bdbb8a1f03",
            name: "Hotel Deluxe",
            location: "Singapore",
            lat: 1.3521,
            lng: 103.8198,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f02",
            name: "Hotel Paradise",
            location: "Kuala Lumpur, Malaysia",
            lat: 3.139,
            lng: 101.6869,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f04",
            name: "Hotel Rajavumi",
            location: "Kathmandu, Nepal",
            lat: 27.7172,
            lng: 85.3240,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f06",
            name: "Zefi Resort and Spa",
            location: "Long Island, USA",
            lat: 40.7891,
            lng: -73.1350,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f10",
            name: "Tropical Retreat",
            location: "Maldives",
            lat: 3.2028,
            lng: 73.2207,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f01",
            name: "Kantua Hotel",
            location: "Bangkok, Thailand",
            lat: 13.7563,
            lng: 100.5018,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f07",
            name: "Manila Resort",
            location: "Manila, Philippines",
            lat: 14.5995,
            lng: 120.9842,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f08",
            name: "Santorini Seaview",
            location: "Santorini, Greece",
            lat: 36.3932,
            lng: 25.4615,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f12",
            name: "Swiss Alpine Lodge",
            location: "Zermatt, Switzerland",
            lat: 46.0207,
            lng: 7.7491,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f14",
            name: "Istanbul City Palace",
            location: "Istanbul, Turkey",
            lat: 41.0082,
            lng: 28.9784,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f11",
            name: "Amalfi Coast Villa",
            location: "Amalfi Coast, Italy",
            lat: 40.6333,
            lng: 14.6029,
        },
        {
            id: "63e0c3425f70f5bdbb8a1f13",
            name: "Beachfront Apartment",
            location: "Barcelona, Spain",
            lat: 41.3851,
            lng: 2.1734,
        },
    ];
    return (
        <div>
            <h2 className="text-3xl font-extrabold mb-8 flex justify-center items-center mx-auto">Map</h2>
            <div className='relative'>
            <div className="absolute inset-0 animate-neon-glow-purple -z-10"></div>
            <MapContainer
            center={[1.3521, 103.8198]} // Default center (Singapore)
            zoom={5}
            style={{ height: "500px", width: "100%", zIndex: 1, position: 'relative' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {hotels.map((hotel) => (
                <Marker key={hotel.id} position={[hotel.lat, hotel.lng]}>
                    <Popup>
                        <strong>{hotel.name}</strong>
                        <br />
                        {hotel.location}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
            </div>
        </div>
        
    );
};

export default Map;
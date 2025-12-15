import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon missing in Leaflet + React
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to handle map view updates
const MapUpdater = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(
        locations.map((loc) => [loc.latitude, loc.longitude])
      );
      map.flyToBounds(bounds, {
        padding: [100, 100],
        duration: 2,
      });
    }
  }, [locations, map]);

  return null;
};

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("/locations.json")
      .then((res) => res.json())
      .then((data) => setLocations(data))
      .catch((err) => console.error("Error loading locations:", err));
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(inputValue);
    }
  };

  const filteredLocations = locations.filter(
    (loc) =>
      loc.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Default center (Dhaka)
  const position = [23.8103, 90.4125];

  return (
    <div className="relative h-full w-full">
      <div className="absolute top-4 right-4 w-64" style={{ zIndex: 1000 }}>
        <input
          type="text"
          placeholder="Search district..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleSearch}
          className="w-full px-4 py-2 rounded-lg shadow-lg border-2 border-green-600 focus:outline-none focus:border-green-800 bg-white/90 backdrop-blur-sm"
        />
      </div>

      <MapContainer
        center={position}
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        <MapUpdater locations={filteredLocations} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((loc, index) => (
          <Marker key={index} position={[loc.latitude, loc.longitude]}>
            <Popup>
              <div className="text-center">
                <strong className="text-lg text-green-700">
                  {loc.district}
                </strong>
                <p className="text-sm text-gray-600 m-0">{loc.city}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Region: {loc.region}
                </p>
                {loc.covered_area && (
                  <p className="text-xs text-gray-500 mt-1">
                    Areas: {loc.covered_area.slice(0, 3).join(", ")}
                    {loc.covered_area.length > 3 && "..."}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;

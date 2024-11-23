import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Search, MapPin, Users, Globe2, Navigation, Building2, ArrowRight } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface CityData {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  population: number;
  is_capital: boolean;
}

export default function CitySearch() {
  const [cityName, setCityName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: cityData, isLoading, error } = useQuery({
    queryKey: ['city', searchTerm],
    queryFn: async () => {
      if (!searchTerm) return null;
      const response = await axios.get(`https://api.api-ninjas.com/v1/city?name=${searchTerm}`, {
        headers: {
          'X-Api-Key': 's3CynE1HEUn2t/hQmheOjg==wKRejbtFq0DIfrFV'
        }
      });
      return response.data[0] as CityData;
    },
    enabled: !!searchTerm
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(cityName);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              placeholder="Enter city name..."
              className="w-full h-14 px-6 rounded-xl text-lg focus:ring-2 focus:ring-blue-400 border-none bg-white shadow-lg text-gray-900 placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="h-14 px-8 rounded-xl font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </form>

      {isLoading && (
        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Searching for city data...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-600">
          <p>Error fetching city data. Please try again.</p>
        </div>
      )}

      {cityData && (
        <div className="space-y-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={`https://flagcdn.com/${cityData.country.toLowerCase()}.svg`}
                      alt={`${cityData.country} flag`}
                      className="w-12 h-8 object-cover rounded-md shadow-sm"
                    />
                    <h3 className="text-3xl font-bold text-gray-900">{cityData.name}</h3>
                  </div>
                  {cityData.is_capital && (
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                      Capital City
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Globe2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Country</p>
                        <p className="text-lg font-semibold text-gray-900">{cityData.country}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Population</p>
                        <p className="text-lg font-semibold text-gray-900">{cityData.population.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Latitude</p>
                        <p className="text-lg font-semibold text-gray-900">{cityData.latitude}°</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Navigation className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Longitude</p>
                        <p className="text-lg font-semibold text-gray-900">{cityData.longitude}°</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden h-[400px]">
              <MapContainer
                center={[cityData.latitude, cityData.longitude]}
                zoom={11}
                className="w-full h-full"
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle
                  center={[cityData.latitude, cityData.longitude]}
                  radius={5000}
                  pathOptions={{
                    fillColor: '#3b82f6',
                    fillOpacity: 0.1,
                    color: '#2563eb',
                    weight: 2
                  }}
                />
                <Marker 
                  position={[cityData.latitude, cityData.longitude]} 
                  icon={customIcon}
                >
                  <Popup className="rounded-lg">
                    <div className="text-center p-2">
                      <h3 className="font-bold text-gray-900 mb-1">{cityData.name}</h3>
                      <p className="text-sm text-gray-600">Population: {cityData.population.toLocaleString()}</p>
                      {cityData.is_capital && (
                        <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                          Capital City
                        </span>
                      )}
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Related Tools Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Related Tools</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/"
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Globe2 className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Country Statistics</h4>
                    <p className="text-sm text-gray-500">Explore detailed country-level data</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </Link>

              <a
                href={`https://www.openstreetmap.org/#map=12/${cityData.latitude}/${cityData.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Building2 className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">OpenStreetMap</h4>
                    <p className="text-sm text-gray-500">View detailed city map</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
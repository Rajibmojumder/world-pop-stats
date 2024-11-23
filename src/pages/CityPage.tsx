import { Building2, Globe2, Search } from 'lucide-react';
import CitySearch from '../components/CitySearch';
import CityContent from '../components/CityContent';

export default function CityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6 space-x-4">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
                <Search className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-white mb-6">
              City Population Explorer
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12">
              Discover detailed population statistics and geographic information for cities worldwide. 
              Get accurate location data, population figures, and more.
            </p>

            <CitySearch />
          </div>
        </div>
      </section>

      <CityContent />
    </div>
  );
}
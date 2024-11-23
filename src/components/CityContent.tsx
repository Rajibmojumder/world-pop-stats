import { 
  Building2, Globe2, MapPin, Users, Navigation, 
  Search, HelpCircle, Map, Database, BarChart3
} from 'lucide-react';

export default function CityContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive City Analytics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Database</h3>
              <p className="text-gray-600">Access population data for cities worldwide, from major metropolises to regional centers.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Maps</h3>
              <p className="text-gray-600">Visualize city locations with precise coordinates and detailed OpenStreetMap integration.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Detailed Statistics</h3>
              <p className="text-gray-600">Get comprehensive population figures, capital city status, and geographic coordinates.</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Search City</h3>
              <p className="text-gray-600">Enter any city name to access its demographic data</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. View Location</h3>
              <p className="text-gray-600">Explore the city's exact location on an interactive map</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Analyze Data</h3>
              <p className="text-gray-600">Access detailed population statistics and city information</p>
            </div>
          </div>
        </div>

        {/* Available Data */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Available Data Points</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Geographic Data</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Precise latitude and longitude</li>
                <li>• Country information</li>
                <li>• Capital city status</li>
                <li>• Interactive map location</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold">Population Statistics</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Total population</li>
                <li>• Population ranking</li>
                <li>• Urban/Rural distribution</li>
                <li>• Historical trends</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold">City Information</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Administrative status</li>
                <li>• Regional importance</li>
                <li>• Capital designation</li>
                <li>• City classification</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                How accurate is the population data?
              </h3>
              <p className="text-gray-600">Our population data is sourced from official government censuses and regularly updated international databases, ensuring high accuracy.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Which cities are included in the database?
              </h3>
              <p className="text-gray-600">Our database covers major cities worldwide, including capitals, metropolitan areas, and significant urban centers across all continents.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                How often is the data updated?
              </h3>
              <p className="text-gray-600">Population statistics are updated annually, while geographic and administrative information is updated as changes occur.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Can I use the map for navigation?
              </h3>
              <p className="text-gray-600">Yes, our interactive maps are powered by OpenStreetMap and can be used for basic navigation and location reference.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
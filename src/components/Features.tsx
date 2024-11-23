import { Users, TrendingUp, Globe } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Population Data</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <Users className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Historical Data</h3>
            <p className="text-gray-600">Track population changes from 1955 with detailed yearly statistics</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <Globe className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600">Comprehensive data for all countries and territories worldwide</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Future Projections</h3>
            <p className="text-gray-600">Population forecasts and trends until 2050</p>
          </div>
        </div>
      </div>
    </section>
  );
}
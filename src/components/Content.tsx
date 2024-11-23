import { 
  Globe2, Users2, TrendingUp, BarChart, Database, 
  BarChart3, History, Timer, Map, Search, 
  HelpCircle, BookOpen, LineChart, Building2, DollarSign,
  Heart, TreePine, Factory, Building, Sprout, Baby,
  Briefcase, Thermometer, Users
} from 'lucide-react';

export default function Content() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Key Features section remains the same */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Population Analytics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Extensive Data Coverage</h3>
              <p className="text-gray-600">Access comprehensive population statistics from 1955 to 2024, with future projections until 2050.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">Analyze population trends, growth rates, demographics, and socio-economic indicators.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Coverage</h3>
              <p className="text-gray-600">Detailed statistics for every country, including demographics, economics, and social metrics.</p>
            </div>
          </div>
        </div>

        {/* Updated Available Statistics section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Available Statistics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-4 text-blue-800 text-lg">General Information</h3>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-blue-500" />
                  Region & Capital
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-500" />
                  Surface Area
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  Population Density
                </li>
                <li className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-blue-500" />
                  Currency Information
                </li>
                <li className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-blue-500" />
                  Internet Usage
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-4 text-purple-800 text-lg">Population Statistics</h3>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-purple-500" />
                  Total Population
                </li>
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-purple-500" />
                  Urban Population
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                  Growth Rates
                </li>
                <li className="flex items-center gap-2">
                  <Baby className="h-4 w-4 text-purple-500" />
                  Fertility Rate
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  Demographics
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-semibold mb-4 text-emerald-800 text-lg">Economic Indicators</h3>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-emerald-500" />
                  GDP & Growth
                </li>
                <li className="flex items-center gap-2">
                  <BarChart className="h-4 w-4 text-emerald-500" />
                  Imports/Exports
                </li>
                <li className="flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-emerald-500" />
                  Tourism Data
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-emerald-500" />
                  Unemployment
                </li>
                <li className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  Economic Growth
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl shadow-lg border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Factory className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-4 text-orange-800 text-lg">Employment by Sector</h3>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-center gap-2">
                  <Factory className="h-4 w-4 text-orange-500" />
                  Industry
                </li>
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-orange-500" />
                  Services
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-orange-500" />
                  Agriculture
                </li>
                <li className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-orange-500" />
                  Employment Rates
                </li>
                <li className="flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-orange-500" />
                  Labor Force
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-white p-6 rounded-xl shadow-lg border border-rose-100">
              <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="font-semibold mb-4 text-rose-800 text-lg">Health & Social</h3>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-rose-500" />
                  Life Expectancy
                </li>
                <li className="flex items-center gap-2">
                  <Baby className="h-4 w-4 text-rose-500" />
                  Infant Mortality
                </li>
                <li className="flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-rose-500" />
                  Healthcare Access
                </li>
                <li className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-rose-500" />
                  Education Rates
                </li>
                <li className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-rose-500" />
                  Social Metrics
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TreePine className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-4 text-green-800 text-lg">Environment</h3>
              <ul className="space-y-2.5 text-gray-600">
                <li className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-green-500" />
                  Forested Area
                </li>
                <li className="flex items-center gap-2">
                  <Factory className="h-4 w-4 text-green-500" />
                  CO2 Emissions
                </li>
                <li className="flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-green-500" />
                  Threatened Species
                </li>
                <li className="flex items-center gap-2">
                  <Map className="h-4 w-4 text-green-500" />
                  Land Usage
                </li>
                <li className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4 text-green-500" />
                  Climate Data
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rest of the content remains the same */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Search className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Select Country</h3>
              <p className="text-gray-600">Choose any country from our comprehensive database</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <LineChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. View Analytics</h3>
              <p className="text-gray-600">Access detailed population statistics and trends</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Compare Data</h3>
              <p className="text-gray-600">Analyze historical trends and future projections</p>
            </div>
          </div>
        </div>

        {/* FAQs section remains the same */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                How often is the data updated?
              </h3>
              <p className="text-gray-600">Our population statistics are updated monthly, while economic and social indicators are refreshed quarterly.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                What are the data sources?
              </h3>
              <p className="text-gray-600">We aggregate data from reliable sources including UN Population Division, World Bank, and national statistical offices.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                How accurate are future projections?
              </h3>
              <p className="text-gray-600">Projections are based on current trends, fertility rates, and demographic patterns, with regular adjustments for accuracy.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Can I download the data?
              </h3>
              <p className="text-gray-600">Currently, data is available for viewing on our platform. Download functionality will be added in future updates.</p>
            </div>
          </div>
        </div>

        {/* Data Sources section remains the same */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Data Sources & Methodology</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Our platform aggregates population statistics and related data from multiple authoritative sources:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• United Nations Population Division</li>
                <li>• World Bank Open Data</li>
                <li>• National Statistical Offices</li>
                <li>• World Health Organization</li>
                <li>• International Monetary Fund</li>
              </ul>
              <p className="text-gray-600">
                All data undergoes rigorous verification and standardization processes to ensure accuracy and consistency across our platform.
                Our methodology follows international statistical standards and best practices for demographic analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
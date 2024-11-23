import { 
  Users2, TrendingUp, Baby, Building2, Globe2, Medal, Landmark, Heart, Wifi, TreePine, Factory, 
  GraduationCap, Plane, Ship, Coins, School, Sprout, Skull, Thermometer, Users, Building, 
  GanttChartSquare, Briefcase, DollarSign, Scale, Percent, Globe, BookOpen
} from 'lucide-react';
import type { CountryData } from '../types';

interface Props {
  data: CountryData;
}

export default function StatsTable({ data }: Props) {
  const currentYear = new Date().getFullYear();
  const currentData = data.historical_population.find(d => d.year === currentYear) || data.historical_population[0];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <img src={data.flag} alt={data.country_name} className="w-12 h-8 object-cover rounded shadow" />
          <div>
            <h3 className="text-2xl font-bold">{data.country_name} Statistics ({currentData.year})</h3>
            {data.countryStats && (
              <p className="text-gray-500">
                Capital: {data.countryStats.capital} | Region: {data.countryStats.region}
              </p>
            )}
          </div>
        </div>

        {/* General Information */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-blue-800 border-b pb-2">General Information</h4>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="h-4 w-4 text-blue-600" />
                <p className="text-xs text-gray-600">Region</p>
              </div>
              <p className="text-sm font-bold text-blue-900">{data.countryStats?.region}</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <Building2 className="h-4 w-4 text-blue-600" />
                <p className="text-xs text-gray-600">Surface Area</p>
              </div>
              <p className="text-sm font-bold text-blue-900">{Number(data.countryStats?.surface_area).toLocaleString()} km²</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <Users className="h-4 w-4 text-blue-600" />
                <p className="text-xs text-gray-600">Population Density</p>
              </div>
              <p className="text-sm font-bold text-blue-900">{data.countryStats?.pop_density} per km²</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <Coins className="h-4 w-4 text-blue-600" />
                <p className="text-xs text-gray-600">Currency</p>
              </div>
              <p className="text-sm font-bold text-blue-900">{data.countryStats?.currency?.code}</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-1">
                <Wifi className="h-4 w-4 text-blue-600" />
                <p className="text-xs text-gray-600">Internet Users</p>
              </div>
              <p className="text-sm font-bold text-blue-900">{data.countryStats?.internet_users}%</p>
            </div>
          </div>
        </div>

        {/* Population Statistics */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-purple-800 border-b pb-2">Population Statistics</h4>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <Users2 className="h-4 w-4 text-purple-600" />
                <p className="text-xs text-gray-600">Total Population</p>
              </div>
              <p className="text-sm font-bold text-purple-900">{currentData.population.toLocaleString()}</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <Building className="h-4 w-4 text-purple-600" />
                <p className="text-xs text-gray-600">Urban Population</p>
              </div>
              <p className="text-sm font-bold text-purple-900">{data.countryStats?.urban_population}%</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <p className="text-xs text-gray-600">Urban Pop. Growth</p>
              </div>
              <p className="text-sm font-bold text-purple-900">{data.countryStats?.urban_population_growth}%</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-purple-600" />
                <p className="text-xs text-gray-600">Population Growth</p>
              </div>
              <p className="text-sm font-bold text-purple-900">{data.countryStats?.pop_growth}%</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-1">
                <Baby className="h-4 w-4 text-purple-600" />
                <p className="text-xs text-gray-600">Fertility Rate</p>
              </div>
              <p className="text-sm font-bold text-purple-900">{data.countryStats?.fertility}</p>
            </div>
          </div>
        </div>

        {/* Economic Indicators */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-emerald-800 border-b pb-2">Economic Indicators</h4>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-4 w-4 text-emerald-600" />
                <p className="text-xs text-gray-600">GDP</p>
              </div>
              <p className="text-sm font-bold text-emerald-900">${Number(data.countryStats?.gdp).toLocaleString()}M</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <Ship className="h-4 w-4 text-emerald-600" />
                <p className="text-xs text-gray-600">Imports</p>
              </div>
              <p className="text-sm font-bold text-emerald-900">${Number(data.countryStats?.imports).toLocaleString()}M</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <Plane className="h-4 w-4 text-emerald-600" />
                <p className="text-xs text-gray-600">Exports</p>
              </div>
              <p className="text-sm font-bold text-emerald-900">${Number(data.countryStats?.exports).toLocaleString()}M</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <Plane className="h-4 w-4 text-emerald-600" />
                <p className="text-xs text-gray-600">Tourists</p>
              </div>
              <p className="text-sm font-bold text-emerald-900">{Number(data.countryStats?.tourists).toLocaleString()}K</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 mb-1">
                <Briefcase className="h-4 w-4 text-emerald-600" />
                <p className="text-xs text-gray-600">Unemployment</p>
              </div>
              <p className="text-sm font-bold text-emerald-900">{data.countryStats?.unemployment}%</p>
            </div>
          </div>
        </div>

        {/* Employment Sectors */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-orange-800 border-b pb-2">Employment by Sector</h4>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-1">
                <Factory className="h-4 w-4 text-orange-600" />
                <p className="text-xs text-gray-600">Industry</p>
              </div>
              <p className="text-sm font-bold text-orange-900">{data.countryStats?.employment_industry}%</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-1">
                <Building className="h-4 w-4 text-orange-600" />
                <p className="text-xs text-gray-600">Services</p>
              </div>
              <p className="text-sm font-bold text-orange-900">{data.countryStats?.employment_services}%</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <div className="flex items-center gap-2 mb-1">
                <Sprout className="h-4 w-4 text-orange-600" />
                <p className="text-xs text-gray-600">Agriculture</p>
              </div>
              <p className="text-sm font-bold text-orange-900">{data.countryStats?.employment_agriculture}%</p>
            </div>
          </div>
        </div>

        {/* Health & Social */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-rose-800 border-b pb-2">Health & Social</h4>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <div className="p-3 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg border border-rose-200">
              <div className="flex items-center gap-2 mb-1">
                <Heart className="h-4 w-4 text-rose-600" />
                <p className="text-xs text-gray-600">Life Expectancy</p>
              </div>
              <div className="space-y-0.5">
                <p className="text-xs text-rose-900">M: {data.countryStats?.life_expectancy_male} yrs</p>
                <p className="text-xs text-rose-900">F: {data.countryStats?.life_expectancy_female} yrs</p>
              </div>
            </div>

            <div className="p-3 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg border border-rose-200">
              <div className="flex items-center gap-2 mb-1">
                <Baby className="h-4 w-4 text-rose-600" />
                <p className="text-xs text-gray-600">Infant Mortality</p>
              </div>
              <p className="text-sm font-bold text-rose-900">{data.countryStats?.infant_mortality} per 1K</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg border border-rose-200">
              <div className="flex items-center gap-2 mb-1">
                <Skull className="h-4 w-4 text-rose-600" />
                <p className="text-xs text-gray-600">Homicide Rate</p>
              </div>
              <p className="text-sm font-bold text-rose-900">{data.countryStats?.homicide_rate} per 100K</p>
            </div>
          </div>
        </div>

        {/* Environment */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-green-800 border-b pb-2">Environment</h4>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <TreePine className="h-4 w-4 text-green-600" />
                <p className="text-xs text-gray-600">Forested Area</p>
              </div>
              <p className="text-sm font-bold text-green-900">{data.countryStats?.forested_area}%</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <Factory className="h-4 w-4 text-green-600" />
                <p className="text-xs text-gray-600">CO2 Emissions</p>
              </div>
              <p className="text-sm font-bold text-green-900">{data.countryStats?.co2_emissions} MT</p>
            </div>

            <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-1">
                <Sprout className="h-4 w-4 text-green-600" />
                <p className="text-xs text-gray-600">Threatened Species</p>
              </div>
              <p className="text-sm font-bold text-green-900">{data.countryStats?.threatened_species}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
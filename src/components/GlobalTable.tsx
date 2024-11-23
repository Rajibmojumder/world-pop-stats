import { useState } from 'react';
import { Globe2, ArrowUpDown } from 'lucide-react';
import { globalPopulationData } from '../data/populationData';

export default function GlobalTable() {
  const [sortField, setSortField] = useState<'population' | 'growth'>('population');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedData = [...globalPopulationData].sort((a, b) => {
    const aData = a.historical_population[0];
    const bData = b.historical_population[0];

    if (sortField === 'population') {
      return sortDirection === 'asc' 
        ? aData.population - bData.population 
        : bData.population - aData.population;
    } else {
      return sortDirection === 'asc'
        ? aData.yearly_change_percentage - bData.yearly_change_percentage
        : bData.yearly_change_percentage - aData.yearly_change_percentage;
    }
  });

  const toggleSort = (field: 'population' | 'growth') => {
    if (sortField === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  return (
    <section className="py-2 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <Globe2 className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Top 20 Most Populous Countries</h2>
          </div>
          <p className="text-sm text-gray-500 mt-2">Last updated: November 2024</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Country</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 cursor-pointer" onClick={() => toggleSort('population')}>
                    <div className="flex items-center justify-end gap-2">
                      Population (2024)
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 cursor-pointer" onClick={() => toggleSort('growth')}>
                    <div className="flex items-center justify-end gap-2">
                      Yearly Change
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">World Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedData.map((country, index) => {
                  const data = country.historical_population[0];
                  return (
                    <tr key={country.country_name} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={country.flag} 
                            alt={`${country.country_name} flag`}
                            className="w-6 h-4 object-cover rounded shadow-sm"
                          />
                          <span className="text-sm font-medium text-gray-900">{country.country_name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-900">
                        {data.population.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right text-sm">
                        <span className={`font-medium ${data.yearly_change_percentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {data.yearly_change_percentage > 0 ? '+' : ''}{data.yearly_change_percentage}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-gray-900">
                        {data.percentage_of_world_population}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
import type { CountryData } from '../types';

interface Props {
  data: CountryData;
}

export default function HistoricalData({ data }: Props) {
  const sortedData = [...data.historical_population].sort((a, b) => b.year - a.year);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">Historical Data</h3>
      <div className="overflow-auto max-h-[500px]">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-right">Population</th>
              <th className="px-4 py-2 text-right">Growth</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedData.map((item) => (
              <tr key={item.year} className="hover:bg-gray-50">
                <td className="px-4 py-2">{item.year}</td>
                <td className="px-4 py-2 text-right">{item.population.toLocaleString()}</td>
                <td className="px-4 py-2 text-right">{item.yearly_change_percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
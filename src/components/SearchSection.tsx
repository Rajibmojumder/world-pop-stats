import { useSearch } from '../context/SearchContext';
import PopulationChart from './PopulationChart';
import StatsTable from './StatsTable';
import HistoricalData from './HistoricalData';
import FutureData from './FutureData';

export default function SearchSection() {
  const { searchData: data } = useSearch();

  return (
    <section id="search-results" className="py-16">
      {data && (
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{data.country_name}</h3>
                <PopulationChart data={data} />
              </div>
              <StatsTable data={data} />
              <div className="grid md:grid-cols-2 gap-8">
                <HistoricalData data={data} />
                <FutureData data={data} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
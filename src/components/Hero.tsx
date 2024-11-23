import { Search, Globe2, BarChart3, Database } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { useSearch } from '../context/SearchContext';
import Select from 'react-select';
import { countries, Country } from '../data/countries';

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const { setSearchData } = useSearch();
  const [selected, setSelected] = useState<Country | null>(
    countries.find(c => c.name === "United States") || null
  );

  const customStyles = {
    control: (base: any) => ({
      ...base,
      minHeight: '48px',
      borderRadius: '0.75rem',
      borderColor: '#e2e8f0',
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
      '&:hover': {
        borderColor: '#cbd5e1'
      }
    }),
    option: (provided: any, state: { isSelected: boolean }) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 16px',
      backgroundColor: state.isSelected ? '#2563eb' : 'white',
      '&:hover': {
        backgroundColor: state.isSelected ? '#2563eb' : '#f8fafc',
      }
    }),
    singleValue: (provided: any) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '1rem',
    }),
    placeholder: (base: any) => ({
      ...base,
      fontSize: '1rem',
      color: '#94a3b8'
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: '0.75rem',
      overflow: 'hidden',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    })
  };

  const handleSearch = async () => {
    if (!selected) return;
    setLoading(true);
    try {
      const [populationRes, countryRes] = await Promise.all([
        axios.get(`https://api.api-ninjas.com/v1/population?country=${selected.name}`, {
          headers: { 'X-Api-Key': 's3CynE1HEUn2t/hQmheOjg==wKRejbtFq0DIfrFV' }
        }),
        axios.get(`https://api.api-ninjas.com/v1/country?name=${selected.name}`, {
          headers: { 'X-Api-Key': 's3CynE1HEUn2t/hQmheOjg==wKRejbtFq0DIfrFV' }
        })
      ]);

      setSearchData({
        ...populationRes.data,
        flag: selected.flag,
        countryStats: countryRes.data[0]
      });
      
      document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      setSearchData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 space-x-4">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
              <Globe2 className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center">
              <Database className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Global Country Statistics Explorer
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Access comprehensive data including demographics, economics, health metrics, and environmental statistics for countries worldwide
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Select
                  className="text-gray-900"
                  options={countries}
                  value={selected}
                  getOptionLabel={(option: Country) => (
                    <div className="flex items-center gap-2">
                      <img src={option.flag} alt={option.name} className="w-6 h-4 object-cover rounded" />
                      {option.name}
                    </div>
                  )}
                  getOptionValue={(option: Country) => option.code}
                  onChange={(selected) => setSelected(selected)}
                  isLoading={loading}
                  placeholder="Select a country..."
                  styles={customStyles}
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={!selected || loading}
                className="h-12 px-8 rounded-xl font-semibold bg-white text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
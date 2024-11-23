import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { CountryData } from '../types';

interface Props {
  data: CountryData;
}

export default function PopulationChart({ data }: Props) {
  const chartData = [...data.historical_population, ...data.population_forecast]
    .sort((a, b) => a.year - b.year)
    .map(item => ({
      year: item.year,
      population: item.population / 1000000, // Convert to millions
    }));

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis label={{ value: 'Population (Millions)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="population"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
            name="Population"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
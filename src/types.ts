export interface PopulationData {
  year: number;
  population: number;
  yearly_change_percentage: number;
  yearly_change: number;
  migrants: number | string;
  median_age: number;
  fertility_rate: number;
  density: number;
  urban_population_pct: number;
  urban_population: number;
  percentage_of_world_population: number;
  rank: number;
}

export interface CountryData {
  historical_population: PopulationData[];
  population_forecast: PopulationData[];
  country_name: string;
  flag?: string;
  countryStats?: CountryStats;
}

export interface Currency {
  code: string;
  name: string;
}

export interface CountryStats {
  gdp: string;
  gdp_per_capita: string;
  gdp_growth: string;
  life_expectancy_male: string;
  life_expectancy_female: string;
  unemployment: string;
  urban_population: string;
  internet_users: string;
  co2_emissions: string;
  forested_area: string;
  capital: string;
  region: string;
  currency: Currency;
}
import { createContext, useContext, useState, ReactNode } from 'react';
import type { CountryData } from '../types';

interface SearchContextType {
  searchData: CountryData | null;
  setSearchData: (data: CountryData | null) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchData, setSearchData] = useState<CountryData | null>(null);

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
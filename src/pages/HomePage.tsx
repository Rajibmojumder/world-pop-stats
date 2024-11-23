import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import GlobalTable from '../components/GlobalTable';
import Content from '../components/Content';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchSection />
      <GlobalTable />
      <Content />
    </>
  );
}
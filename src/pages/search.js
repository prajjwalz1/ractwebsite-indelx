import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchResults from '../../components/SearchResults';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch('https://www.getfromnepal.com/productapi');
      const data = await response.json();
      
      const filteredResults = data.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };

  return (
    <div className='container'>
      <SearchResults results={searchResults} />
    </div>
  );
};

export default SearchPage;

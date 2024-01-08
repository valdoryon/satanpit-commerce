import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleOnChange = (e: React.ChangeEvent) => {
    setQuery((e.target as HTMLInputElement).value);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query) {
      window.location.href = `/search/todos?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className='search-bar'>
      <span className='search-bar__icon'>
        <FiSearch size={20} />
      </span>
      <form onSubmit={handleOnSubmit}>
        <input
          value={query}
          onChange={handleOnChange}
          className='search-bar__input'
          type='text'
          placeholder='Buscar...'
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;

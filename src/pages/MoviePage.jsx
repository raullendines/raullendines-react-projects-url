import { useEffect, useState, useRef, useCallback } from 'react';
import debounce from "just-debounce-it";
import { Link, useParams } from 'react-router-dom';

import '../css/App.css';

import { Movies } from '../components/Movies.jsx';
import { useMovies } from '../hooks/useMovies.js';

import useLanguage, { moviePage } from '../js/services/languages.js';

function useSearch(i18n) {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === '';
      return;
    }

    if (search === '') {
      setError(i18n.nullErrText);
      return;
    }

    if (search.match(/^\d+$/)) {
      setError(i18n.numberErrText);
      return;
    }

    if (search.length < 3) {
      setError(i18n.lengthErrText);
      return;
    }

    setError(null);
  }, [search, i18n]);

  // This useEffect clears the search results when the input becomes empty
  useEffect(() => {
    if (search === '') {
      setError(null);
      updateSearch('');
    }
  }, [search]);

  return { search, updateSearch, error };
}

function MoviePage() {
  const { lang } = useParams();
  const i18n = useLanguage(lang ?? 'es', moviePage);

  const [sort, setSort] = useState(false);
  const [checkBoxChecked, setCheckBoxChecked] = useState(false);

  const { search, updateSearch, error } = useSearch(i18n);
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  useEffect(() => {
    if (search === '') {
      setSort(false); // Reset sort to default when the input is empty
    }
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = () => {
    if (movies && movies.length > 0) {
      setSort(!sort);
    } else {
      setSort(false);
      setCheckBoxChecked(false); 
    }
  };

  
  return (
    <div>
      <header>
        <h1 className='title'>{i18n.title}</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' type='text' value={search} placeholder={i18n.placeholder} />
          <input type='checkbox' onClick={handleSort}></input>
          <button type='submit'>{i18n.submitBtn}</button>
        </form>
        {error && <p className="error-text">{error}</p>}
      </header>

      <main>
        {loading ? <p>{i18n.loading}</p> : movies && movies.length > 0 ? <Movies movies={movies} /> : <p>No se encontraron películas.</p>}
      </main>
    </div>
  );
}

export default MoviePage;

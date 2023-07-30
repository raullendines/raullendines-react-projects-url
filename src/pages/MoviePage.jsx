/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, useCallback } from 'react';
import debounce from "just-debounce-it"

import '../css/App.css';

import { Movies } from '../components/Movies.jsx'
import { useMovies } from '../hooks/useMovies.js'

 function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if(search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }
  
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un número')
      return
    }
  
    if (search.length < 3) {
      setError('La busqueda debe tener almenos 3 caracteres')
      return
    }
  
    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function MoviePage() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, loading, getMovies} = useMovies({ search, sort })

  const deboundedGetMovies = useCallback(
      debounce(search => {
        getMovies({search})
    }, 300), [getMovies]
  )
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies({search})  
}

  const handleChange = (event) =>{
    const newSearch = event.target.value
    updateSearch(newSearch)
    deboundedGetMovies(newSearch)  
  }

  const handleSort = () => {
    setSort(!sort)
  }



return (
    <div>
      <header>
        <h1 className='title'>Buscador de peliculas</h1>
        <form className= 'form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name="query" type='text' value={search} placeholder='Avengers, Kingsman...' />
          <input type='checkbox' onClick={handleSort}></input>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p className="error-text">{error}</p>}
      </header>

        <main>
            {loading ? <p>Cargando...</p> : movies && movies.length > 0 ? <Movies movies={movies} /> : <p>No se encontraron películas.</p>}
        </main>

    </div>
  );
}

export default MoviePage;

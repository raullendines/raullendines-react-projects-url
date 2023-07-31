export const homePage = {
    es: {
        title: 'Pagina principal',
        description: 'Esta es la pagina principal',
        button: 'Ir al sobre mi'
    },
    en: {
        title: 'Homepage',
        description: 'This is the main page',
        button: 'Go to the about page'
    },
    ca: {
        title: 'Pàgina principal',
        description: 'Aquesta és la pàgina principal',
        button: 'Anar al sobre mi'
    }
}

// aboutPageData.js
export const aboutPage = {
    es: {
      title: 'Página de Sobre mi',
      description: 'Esta es la página de sobre mi',
      button: 'Ir a la página de inicio',
    },
    en: {
      title: 'About Page',
      description: 'This is the About page',
      button: 'Go to the homepage',
    },
    ca: {
      title: 'Pàgina d\'Informació',
      description: 'Aquesta és la pàgina d\'Informació',
      button: 'Anar a la pàgina d\'inici',
    },
  };

// moviePageData.js
export const moviePage = {
    es: {
      title: 'Página de Películas',
      description: 'Esta es la página de películas',
      placeholderTextBoxSearch: 'Los vengadores, Kingsman...',
      submitBtn: 'Buscar',
      loading: 'Cargando...',
      nullErrText: 'No se puede buscar una película vacía',
      numberErrText: 'No se puede buscar una película con un número',
      lengthErrText: 'La búsqueda debe tener al menos 3 caracteres',
    },
    en: {
      title: 'Movie Page',
      description: 'This is the movie page',
      placeholderTextBoxSearch: 'The Avengers, Kingsman...',
      submitBtn: 'Search',
      loading: 'Loading...',
      nullErrText: 'Cannot search for an empty movie',
      numberErrText: 'Cannot search for a movie with a number',
      lengthErrText: 'Search query must be at least 3 characters long',
    },
    ca: {
      title: 'Pàgina de Pel·lícules',
      description: 'Aquesta és la pàgina de pel·lícules',
      placeholderTextBoxSearch: 'Els Vengadors, Kingsman...',
      submitBtn: 'Cercar',
      loading: 'Carregant...',
      nullErrText: 'No es pot buscar una pel·lícula buida',
      numberErrText: 'No es pot buscar una pel·lícula amb un número',
      lengthErrText: 'La cerca ha de tenir almenys 3 caràcters',
    },
  };
  
  
  

export default function useLanguage(lang, jsonData) {
    return jsonData[lang] || jsonData.en;
  }
  

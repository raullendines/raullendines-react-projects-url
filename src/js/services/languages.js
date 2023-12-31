export const homePage = {
  es: {
    title: `Hola, soy Raül`,
    typewriter: ["Actualmente soy estudiante de Informática", "Aprendiz", "Dedicado"],
    paragraph: `Soy un Desarrollador Full Stack que busca diversas formas de mejorar mis habilidades a través de la resolución de problemas y la creación de varios proyectos. ¡Haz clic aquí para conocer más sobre mí!`
  },
  en: {
    title: `Hey, I'm Raül`,
    typewriter: ["A Computer Science Student", "Learner", "Dedicated"],
    paragraph: `I'm currently a Full Stack Developer seeking different ways of improving my skills through problem-solving and the creation of various projects! Click here to learn more about me.`
  },
  ca: {
    title: `Hola, em dic Raül`,
    typewriter: ["Actualment sóc estudiant d'Informàtica", "Aprenent", "Dedicat"],
    paragraph: `Sóc un Desenvolupador Full Stack que busca diverses formes de millorar les meves habilitats mitjançant la resolució de problemes i la creació de diversos projectes. Fes clic aquí per conèixer més sobre mi.`
  }
};

const navBar = {
  es: [
    {
      text: 'Home',
    },
    {
      text: 'Acerca de',
    },
    {
      text: 'Proyectos',
    },
  ],
  en: [
    {
      text: 'Home',
    },
    {
      text: 'About',
    },
    {
      text: 'Projects',
    },
  ],
  ca: [
    {
      text: 'Inici',
    },
    {
      text: 'Sobre nosaltres',
    },
    {
      text: 'Projectes',
    },
  ],
};

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
  
  
  // notFoundPage.js
export const  notFoundPage = {
  es: {
    errorText: '404 - Página no encontrada',
    paragraphText: 'Lo sentimos, la página que estás buscando no existe.',
    returnText: 'Volver la la pagina principal'
  },
  en: {
    errorText: '404 - Page not found',
    paragraphText: "We are sorry, the page you are searching for doesn't exist.",
    returnText: 'Return to main page'
  },
  ca: {
    errorText: '404 - Pàgina no trobada',
    paragraphText: 'Ho sentim, la pàgina que estàs buscant no existeix.',
    returnText: 'Tornar a la pàgina principal'
  },
};
  

export default function useLanguage(lang, jsonData) {
    return jsonData[lang] || jsonData.en;
  }
  
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

export default function useLanguage(lang, jsonData) {
    return jsonData[lang] || jsonData.en;
  }
  

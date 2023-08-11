import React from 'react';

export const LanguageDropdown = ({ selectedLanguage, languages, handleLanguageChange }) => (
  <div>
    <select
      className="text-white"
      value={selectedLanguage}
      onChange={(e) => {
        const selectedLang = e.target.value;
        handleLanguageChange(selectedLang);
      }}
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  </div>
);
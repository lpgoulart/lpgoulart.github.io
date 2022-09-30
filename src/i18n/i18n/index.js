import React from 'react';
import { useTranslation } from 'react-i18next';

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  const selectedLanguage = i18n.language
  return (
    <div>
      <button
        onClick={() => handleChangeLanguage('pt_BR')}
      >br</button>
      <button
        onClick={() => handleChangeLanguage('en_US')}
      >en</button>
    </div>
  )
}

export default I18n
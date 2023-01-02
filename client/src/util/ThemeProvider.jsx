import React, { createContext, useEffect, useState } from 'react';
import { themes } from './Themes';
import PropTypes from 'prop-types';

const DarkThemeContext = createContext();

function setColor(varName, newColor) {
  document.documentElement.style.setProperty(varName, newColor);
}

function ThemeProvider({ children }) {
  const [DarkTheme, setDarkTheme] = useState(false);

  const setDarkThemeStatus = (status) => {
    setDarkTheme(status);
    localStorage.setItem('dark-mode', status);
    for (let color of Object.keys(themes)) {
      if (status === false) {
        setColor(color, themes[color][0]);
      } else {
        setColor(color, themes[color][1]);
      }
    }
  };

  useEffect(() => {
    const isDarkTheme = localStorage.getItem('dark-mode');
    if (isDarkTheme === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('dark-mode', true);
        setDarkThemeStatus(true);
      } else {
        localStorage.setItem('dark-mode', false);
        setDarkThemeStatus(false);
      }
    } else {
      setDarkThemeStatus(JSON.parse(isDarkTheme));
    }
  }, []);

  return (
    <DarkThemeContext.Provider value={{ DarkTheme, setDarkThemeStatus }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

export { DarkThemeContext, ThemeProvider };

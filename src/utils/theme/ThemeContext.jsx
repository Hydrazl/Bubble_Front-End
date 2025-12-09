// src/utils/theme/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Recupera o tema salvo ou usa 'light' como padrão
    const savedTheme = localStorage.getItem('bubble-theme');
    return savedTheme || 'light';
  });

  const isDark = theme === 'dark';

  useEffect(() => {
    // Aplica o atributo 'data-theme' no elemento html (root)
    document.documentElement.setAttribute('data-theme', theme);

    // Mantém compatibilidade com classes se necessário (opcional, mas bom pra garantir)
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }

    // Salva no localStorage
    localStorage.setItem('bubble-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');

  const value = {
    theme,
    isDark,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    currentTheme: theme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  }

  return context;
}
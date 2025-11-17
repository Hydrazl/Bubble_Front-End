// src/pages/Settings/Settings.jsx
import React from 'react';
import { useTheme } from '../../utils/theme/ThemeContext';
import './Colors.css';

const Colors = () => {
  const { theme, currentTheme, toggleTheme, isDark } = useTheme();

  return (
    <div className="settings-container">
      <h1>Configurações</h1>
      
      <div className="settings-section">
        <h2>Aparência</h2>
        
        <div className="theme-toggle-card">
          <div className="theme-info">
            <h3>Tema</h3>
            <p>Escolha entre tema claro ou escuro</p>
          </div>
          
          <div className="theme-selector">
            <button 
              className={`theme-option ${!isDark ? 'active' : ''}`}
              onClick={() => !isDark ? null : toggleTheme()}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="5" fill="currentColor"/>
                <path d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Claro</span>
            </button>
            
            <button 
              className={`theme-option ${isDark ? 'active' : ''}`}
              onClick={() => isDark ? null : toggleTheme()}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" 
                      fill="currentColor"/>
              </svg>
              <span>Escuro</span>
            </button>
          </div>
        </div>

        {/* Toggle Switch alternativo */}
        <div className="theme-toggle-switch">
          <span>Modo Escuro</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={isDark}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* Outras configurações podem ir aqui */}
      <div className="settings-section">
        <h2>Outras Configurações</h2>
        <p>Mais opções virão aqui...</p>
      </div>
    </div>
  );
};

export default Colors;
import { useTheme } from '../../../utils/theme/ThemeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faPalette, faDesktop } from "@fortawesome/free-solid-svg-icons";
import "./ThemeSettings.css";

export default function ThemeSettings() {
    const { theme, toggleTheme, isDark, setLightTheme, setDarkTheme } = useTheme();

    const themes = [
        {
            id: 'light',
            name: 'Claro',
            icon: faSun,
            description: 'Tema claro para ambientes bem iluminados',
            active: !isDark
        },
        {
            id: 'dark',
            name: 'Escuro',
            icon: faMoon,
            description: 'Tema escuro para reduzir cansaço visual',
            active: isDark
        }
    ];

    return (
        <div className="containerSettings">
            <div className="settingsHeader">
                <h1>Personalizar Aparência</h1>
                <p>Escolha o tema que melhor se adapta ao seu estilo</p>
            </div>

            {/* Theme Selection Card */}
            <div className="settingsCard">
                <div className="cardHeader">
                    <div className="cardTitle">
                        <FontAwesomeIcon icon={faPalette} />
                        <h2>Tema de Cores</h2>
                    </div>
                    <span className="cardDescription">Personalize a aparência da interface</span>
                </div>

                <div className="themeGrid">
                    {themes.map((themeOption) => (
                        <div
                            key={themeOption.id}
                            className={`themeCard ${themeOption.active ? 'active' : ''}`}
                            onClick={() => {
                                if (themeOption.id === 'light') {
                                    setLightTheme();
                                } else {
                                    setDarkTheme();
                                }
                            }}
                        >
                            <div className="themeIcon">
                                <FontAwesomeIcon icon={themeOption.icon} />
                            </div>

                            <div className="themeContent">
                                <h3>{themeOption.name}</h3>
                                <p>{themeOption.description}</p>
                            </div>

                            {themeOption.active && (
                                <div className="activeIndicator">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}

                            <div className="themePreview">
                                <div className={`previewBox ${themeOption.id}`}>
                                    <div className="previewHeader"></div>
                                    <div className="previewBody">
                                        <div className="previewLine"></div>
                                        <div className="previewLine short"></div>
                                        <div className="previewLine"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Toggle */}
            <div className="settingsCard">
                <div className="cardHeader">
                    <div className="cardTitle">
                        <FontAwesomeIcon icon={faDesktop} />
                        <h2>Alternância Rápida</h2>
                    </div>
                </div>

                <div className="quickToggle">
                    <div className="toggleInfo">
                        <h3>Modo Escuro</h3>
                        <p>Ative ou desative rapidamente o modo escuro</p>
                    </div>

                    <label className="toggleSwitch">
                        <input
                            type="checkbox"
                            checked={isDark}
                            onChange={toggleTheme}
                        />
                        <span className="toggleSlider">
                            <FontAwesomeIcon icon={isDark ? faMoon : faSun} className="toggleIcon" />
                        </span>
                    </label>
                </div>
            </div>

            {/* Theme Info */}
            <div className="settingsCard themeInfo">
                <div className="infoGrid">
                    <div className="infoItem">
                        <div className="infoIcon light">
                            <FontAwesomeIcon icon={faSun} />
                        </div>
                        <div>
                            <h4>Tema Claro</h4>
                            <p>Ideal para uso durante o dia</p>
                        </div>
                    </div>

                    <div className="infoItem">
                        <div className="infoIcon dark">
                            <FontAwesomeIcon icon={faMoon} />
                        </div>
                        <div>
                            <h4>Tema Escuro</h4>
                            <p>Confortável para ambientes escuros</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import './configNav.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faHeart,
    faBan,
    faLock,
    faPalette,
    faBell,
    faRss,
    faFilter,
    faVolumeHigh,
    faUniversalAccess,
    faStar,
    faCheckCircle,
    faKey,
    faDesktop,
    faTrash,
    faShield,
    faFileContract,
    faCircleQuestion,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

export default function ConfigNav() {
    const location = useLocation();

    const navSections = [
        {
            title: "Configuração do perfil",
            items: [
                { icon: faUser, text: "Editar perfil", path: "/settings/editprofile" },
                { icon: faHeart, text: "Histórico e likes", path: "#" },
                { icon: faBan, text: "Bloqueados", path: "#" },
                { icon: faLock, text: "Privacidade", path: "#" }
            ]
        },
        {
            title: "Configuração Geral",
            items: [
                { icon: faPalette, text: "Personalizar", path: "/settings/persoprofile" },
                { icon: faBell, text: "Notificações", path: "#" },
                { icon: faRss, text: "Recomendações e Feed", path: "#" },
                { icon: faFilter, text: "Filtro de conteúdo", path: "#" },
                { icon: faVolumeHigh, text: "Voz e áudio", path: "#" },
                { icon: faUniversalAccess, text: "Acessibilidade", path: "#" }
            ]
        },
        {
            title: "Configuração For Creators",
            items: [
                { icon: faStar, text: "Bubble for creators", path: "#" },
                { icon: faCheckCircle, text: "Verificação oficial", path: "#" }
            ]
        },
        {
            title: "Segurança e conta",
            items: [
                { icon: faKey, text: "Senha e Verificação", path: "/settings/security" },
                { icon: faDesktop, text: "Gerenciar Dispositivos", path: "#" },
                { icon: faTrash, text: "Excluir Conta", path: "/settings/deleteprofile" }
            ]
        },
        {
            title: "Suporte e Políticas",
            items: [
                { icon: faShield, text: "Segurança e privacidade", path: "#" },
                { icon: faFileContract, text: "Termos de Uso", path: "#" },
                { icon: faCircleQuestion, text: "Central de Ajuda", path: "#" }
            ]
        }
    ];

    return (
        <div className="configNavWrapper">
            <aside className="configNavSidebar">
                <div className="navHeader">
                    <Link to="/home" className="backButton">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                    <h1>Configurações</h1>
                </div>

                <nav className="navContent">
                    {navSections.map((section, idx) => (
                        <div key={idx} className="navSection">
                            <h2 className="sectionTitle">{section.title}</h2>
                            <ul className="navList">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                        <Link
                                            to={item.path}
                                            className={`navItem ${location.pathname === item.path ? 'active' : ''}`}
                                        >
                                            <FontAwesomeIcon icon={item.icon} className="navIcon" />
                                            <span>{item.text}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button 
                        className="logout-btn"
                        onClick={() => {
                            localStorage.removeItem("token");
                            window.location.href = "/";
                        }}
                    >
                        Sair da Conta
                    </button>
                </nav>

                <div className="navFooter">
                    <p>© Bubble - 2025</p>
                </div>
            </aside>
        </div>
    );
}
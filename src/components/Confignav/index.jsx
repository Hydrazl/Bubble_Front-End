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
                { icon: faHeart, text: "Histórico e likes", path: "/history" },
                { icon: faBan, text: "Bloqueados", path: "/blocked" },
                { icon: faLock, text: "Privacidade", path: "/privacy" }
            ]
        },
        {
            title: "Configuração Geral",
            items: [
                { icon: faPalette, text: "Personalizar", path: "/settings/persoprofile" },
                { icon: faBell, text: "Notificações", path: "/notifications" },
                { icon: faRss, text: "Recomendações e Feed", path: "/feed" },
                { icon: faFilter, text: "Filtro de conteúdo", path: "/blockprofile" },
                { icon: faVolumeHigh, text: "Voz e áudio", path: "/audio" },
                { icon: faUniversalAccess, text: "Acessibilidade", path: "/acessebilidade" }
            ]
        },
        {
            title: "Configuração For Creators",
            items: [
                { icon: faStar, text: "Bubble for creators", path: "/forcreators" },
                { icon: faCheckCircle, text: "Verificação oficial", path: "/verification" }
            ]
        },
        {
            title: "Segurança e conta",
            items: [
                { icon: faKey, text: "Senha e Verificação", path: "/security" },
                { icon: faDesktop, text: "Gerenciar Dispositivos", path: "/devices" },
                { icon: faTrash, text: "Excluir Conta", path: "/deleteprofile" }
            ]
        },
        {
            title: "Suporte e Políticas",
            items: [
                { icon: faShield, text: "Segurança e privacidade", path: "/securyandpriva" },
                { icon: faFileContract, text: "Termos de Uso", path: "/termos" },
                { icon: faCircleQuestion, text: "Central de Ajuda", path: "/help" }
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
                </nav>

                <div className="navFooter">
                    <p>© Bubble - 2025</p>
                </div>
            </aside>
        </div>
    );
}
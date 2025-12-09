import './Header.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHouse, faCompass, faGear, faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import whiteBubbling from '../../assets/white_icon_bubbling.png';
import { useEffect, useState } from 'react';
import { getUnreadNotificationsCount } from '../../services/api';

export default function Header() {
    const { user } = useAuth();
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        loadUnreadCount();
        const interval = setInterval(() => {
            loadUnreadCount();
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    const loadUnreadCount = async () => {
        try {
            const data = await getUnreadNotificationsCount();
            setUnreadCount(data.count || 0);
        } catch (error) {
            console.error('Erro ao carregar contagem de notificações:', error);
        }
    };

    useEffect(() => {
        window.updateNotificationCount = loadUnreadCount;
        return () => {
            delete window.updateNotificationCount;
        };
    }, []);

    return (
        <header>
            <div className='content'>
                <div className='logo_content'>
                    <Link to='/home' className='flex flex-row gap-2 items'>
                        <img src='../newBubbleIcon.png' alt="logo" className='header-logo' />
                        <p className="teste">BUBBLE</p>
                    </Link>
                </div>

                <nav>
                    <ul className='nav' id='pages_nav'>
                        <Link to='/home' className='header-link'>
                            <li><FontAwesomeIcon icon={faHouse} /> Início</li>
                        </Link>

                        <Link to='/trending' className='borbulhando header-link'>
                            <li><img src={whiteBubbling} alt="Borbulhando" /> Borbulhando</li>
                        </Link>

                        <Link to='/newpost' className='header-link new-post-link'>
                            <li><FontAwesomeIcon icon={faPlus} /> Novo Post</li>
                        </Link>

                        <Link to='/notifications' className='mt-20 lg:mt-40 xl:mt-106 mb-5 header-link notification-link'>
                            <li>
                                <FontAwesomeIcon icon={faBell} /> Flops
                                {unreadCount > 0 && (
                                    <span className="notification-badge">{unreadCount > 99 ? '99+' : unreadCount}</span>
                                )}
                            </li>
                        </Link>
                    </ul>

                    <ul className='nav' id='person_nav'>
                        <Link to={`/profile/${user.id}`} className='header-link'>
                            <li><FontAwesomeIcon icon={faUser} /> Seu Perfil</li>
                        </Link>

                        <Link to='/settings' className='header-link'>
                            <li><FontAwesomeIcon icon={faGear} /> Configurações</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

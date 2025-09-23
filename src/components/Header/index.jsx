import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHouse, faCompass, faComments } from "@fortawesome/free-solid-svg-icons";
import whiteBubbling from '../../assets/white_icon_bubbling.png'
import blackBubbling from '../../assets/black_icon_bubbling.png'

export default function Header() {
    return (
        <header>
            <div className='content'>
                <div className='logo_content'>
                    <img src='white-logo.png' alt="logo" />
                    <p className="teste">BUBBLE</p>
                </div>
                <nav>
                    <ul className='nav' id='pages_nav'>
                        <li><Link to='/'><FontAwesomeIcon icon={faHouse} className='text-[#E5E5E5] '/> Início</Link></li>
                        <li><Link to='/trending'><img src={whiteBubbling} alt="Borbulhando" /> Borbulhando</Link></li>
                        <li><Link to='/explorer'><FontAwesomeIcon icon={faCompass} className='text-[#E5E5E5] '/> Explorar</Link></li>
                        <li><Link to='/chat'><FontAwesomeIcon icon={faComments} className='text-[#E5E5E5] '/> Bulhufas</Link></li>
                        <li className='mt-80'><Link to='/notifications'><FontAwesomeIcon icon={faBell} className='text-[#E5E5E5] '/> Flops</Link></li>
                    </ul>

                    <ul className='nav' id='person_nav'>
                        <li><Link to='/profile'><ion-icon name="person-circle" className='text-[#E5E5E5]'></ion-icon>Seu Perfil</Link></li>
                        <li><Link to='/settings'><ion-icon name="settings-outline" className='text-[#E5E5E5]'></ion-icon>Configurações</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
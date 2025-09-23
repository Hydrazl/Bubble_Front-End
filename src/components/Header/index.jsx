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
                        <li><FontAwesomeIcon icon={faHouse} className='text-[#E5E5E5] '/> Início</li>
                        <li><img src={whiteBubbling} alt="Borbulhando" /> Borbulhando</li>
                        <li><FontAwesomeIcon icon={faCompass} className='text-[#E5E5E5] '/> Explorar</li>
                        <li><FontAwesomeIcon icon={faComments} className='text-[#E5E5E5] '/> Bulhufas</li>
                        <li className='mt-80'><FontAwesomeIcon icon={faBell} className='text-[#E5E5E5] '/> Flops</li>
                    </ul>

                    <ul className='nav' id='person_nav'>
                        <li><ion-icon name="person-circle" className='text-[#E5E5E5]'></ion-icon>Seu Perfil</li>
                        <li><ion-icon name="settings-outline" className='text-[#E5E5E5]'></ion-icon>Configurações</li>
                    </ul>
                </nav>
            </div>
        </header>     
    );
}

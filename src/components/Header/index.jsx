import './Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHouse, faCompass, faComments, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
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
                <nav >
                    <ul className='nav' id='pages_nav'>
                        <li><Link to='/'><FontAwesomeIcon icon={faHouse}/> Início</Link></li>
                        <li><Link to='/trending' className='borbulhando'><img src={whiteBubbling} alt="Borbulhando" /> Borbulhando</Link></li>
                        <li><Link to='/explorer'><FontAwesomeIcon icon={faCompass}/> Explorar</Link></li>
                        <li><Link to='/chat'><FontAwesomeIcon icon={faComments}/> Bulhufas</Link></li>
                        <li className='mt-64 mb-5'><Link to='/notifications'><FontAwesomeIcon icon={faBell}/> Flops</Link></li>
                    </ul>

                    <ul className='nav' id='person_nav'>
                        <li><Link to='/profile' ><FontAwesomeIcon icon={faUser} />Seu Perfil</Link></li>
                        <li><Link to='/settings' ><FontAwesomeIcon icon={faGear} />Configurações</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
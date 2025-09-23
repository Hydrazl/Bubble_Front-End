import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHouse, faCompass, faComments } from "@fortawesome/free-solid-svg-icons";
// import whiteBubbling from '../../assets/white_icon_bubbling.png' Deixei em comentarios para não ficar vermelho o arquivo toda hr
import blackBubbling from '../../assets/black_icon_bubbling.png'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <img src='black-logo.png' alt="logo" />
                <p>BUBBLE</p>
            </div>

            <nav className='container'>
                <ul>
                    <li><Link to='/'><FontAwesomeIcon icon={faHouse} /> Início</Link></li>
                    <li><Link to='/borbulhando'><img src={blackBubbling} alt="Borbulhando" /> Borbulhando</Link></li>
                    <li><Link to='/explorer'><FontAwesomeIcon icon={faCompass} /> Explorar</Link></li>
                    <li><Link to='/bulhufas'><FontAwesomeIcon icon={faComments} /> Bulhufas</Link></li>
                    <li><Link to='/blops'><FontAwesomeIcon icon={faBell} /> Flops</Link></li>
                </ul>

                <ul>
                    <li><Link to='/profile'><ion-icon name="person-circle"></ion-icon>Seu Perfil</Link></li>
                    <li><Link to='/settings'><ion-icon name="settings-outline"></ion-icon>Configurações</Link></li>
                </ul>
            </nav>
        </header>
    );
}

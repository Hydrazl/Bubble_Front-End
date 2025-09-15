import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHouse, faCompass, faComments } from "@fortawesome/free-solid-svg-icons";
import whiteBubbling from '../../assets/white_icon_bubbling.png'
import blackBubbling from '../../assets/black_icon_bubbling.png'

import './Header.css'

export default function Header() {
    return (
        <header>
            <div>
                <img src='black-logo.png' alt="logo" />
                <p className="teste">BUBBLE</p>
            </div>
            <nav>
                <ul>
                    <li><FontAwesomeIcon icon={faHouse} /> Início</li>
                    <li><img src={blackBubbling} alt="Borbulhando" /> Borbulhando</li>
                    <li><FontAwesomeIcon icon={faCompass} /> Explorar</li>
                    <li><FontAwesomeIcon icon={faComments} /> Bulhufas</li>
                    <li><FontAwesomeIcon icon={faBell} /> Flops</li>
                </ul>

                <ul>
                    <li><ion-icon name="person-circle"></ion-icon>Seu Perfil</li>
                </ul>
            </nav>
        </header>
    );
}

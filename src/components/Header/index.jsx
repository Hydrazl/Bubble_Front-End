import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHouse, faCompass, faComments } from "@fortawesome/free-solid-svg-icons";

// Import seguro das imagens no Vite
const whiteLogo = new URL('../../assets/white-logo.png', import.meta.url).href;
const whiteBubbling = new URL('../../assets/white_icon_bubbling.png', import.meta.url).href;

export default function Header() {
    return (
        <header>
            <img src={whiteLogo} alt="logo" />
            <nav>
                <ul>
                    <li><FontAwesomeIcon icon={faHouse} /> Início</li>
                    <li><img src={whiteBubbling} alt="Borbulhando" /> Borbulhando</li>
                    <li><FontAwesomeIcon icon={faCompass} /> Explorar</li>
                    <li><FontAwesomeIcon icon={faComments} /> Bulhufas</li>
                    <li><FontAwesomeIcon icon={faBell} /> Flops</li>
                </ul>
            </nav>
        </header>
    );
}

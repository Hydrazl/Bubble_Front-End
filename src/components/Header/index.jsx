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
                    <Link to='/' className='flex flex-row gap-2 items'>
                        <img src='white-logo.png' alt="logo" />
                        <p className="teste">BUBBLE</p>
                    </Link>
                </div>
                <nav>
                    <ul className='nav' id='pages_nav'>
                        <Link to='/' className='header-link'><li><FontAwesomeIcon icon={faHouse}/> Início</li></Link>
                        <Link to='/trending' className='borbulhando header-link'><li><img src={whiteBubbling} alt="Borbulhando" /> Borbulhando</li></Link>
                        <Link to='/explorer' className='header-link'><li><FontAwesomeIcon icon={faCompass}/> Explorar</li></Link>
                        <Link to='/bulhufas' className='header-link'><li><FontAwesomeIcon icon={faComments}/> Bulhufas</li></Link>
                        <Link to='/notifications' className='mt-20 lg:mt-40 xl:mt-75 mb-5 header-link'><li><FontAwesomeIcon icon={faBell}/> Flops</li></Link>
                    </ul>

                    <ul className='nav' id='person_nav'>
                        <Link to='/profile' className='header-link'><li><FontAwesomeIcon icon={faUser} />Seu Perfil</li></Link>
                        <Link to='/settings' className='header-link'><li><FontAwesomeIcon icon={faGear} />Configurações</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
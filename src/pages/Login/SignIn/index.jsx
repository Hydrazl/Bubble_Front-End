import '../Login.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import bg from '../../../assets/login-bg.png'

export default function Login() {
    return (
        <main>
            <img src={bg} className='body-login'/>
            <div className='login-main'>
                <div className='login-container'>
                    <div className="container">
                        <div className='circle-icon'>
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="logo-content">
                            <img src="white-logo.png" alt="" className='bubble_img'/><p>Bubble</p>
                        </div>

                        <form className='login-form'>
                            <h1>LOGIN</h1>
                            <input type="email" name="email" id="" placeholder='Insera o seu E-mail'/>
                            <input type="password" name="password" id="" placeholder='Senha'/>

                            <div className='login-checkbox'>
                                <div>
                                    <input type="checkbox" /><p>mantennha me conectado</p>
                                </div>
                                <div></div>
                                <span className=''>Esqueceu a senha?</span>
                            </div>
                            <input type="submit" value="Continuar" />
                            <p>ou Conecte com uma Rede Social</p>

                            <ul>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>
                                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                                <li><FontAwesomeIcon icon={faGoogle} /></li>
                                <li><FontAwesomeIcon icon={faFacebook} /></li>
                                <li><FontAwesomeIcon icon={faTwitter} /></li>
                            </ul>
                            <p>Não possui uma conta ainda?<span><Link to='/register'>Cadastre-se</Link></span></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
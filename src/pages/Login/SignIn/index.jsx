import './Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Login() {
    return (
        <main className='login-container'>

            <div className="container">
                <div className='circle-icon'>
                    <ion-icon name="exit"></ion-icon>
                </div>
                <div className="logo-content">
                    <img src="white-logo.png" alt="" /><p>BUBBLE</p>
                </div>

                <form action="">
                    <h1>LOGIN</h1>
                    <input type="email" name="email" id="" placeholder='Insera o seu E-mail'/>
                    <input type="password" name="password" id="" placeholder='Senha'/>

                    <div><input type="checkbox" /><p>mantennha me conectado</p><span>Esqueceu a senha?</span></div>
                    <input type="submit" value="Continuar" />
                    <p>ou Conecte com uma Rede Social</p>

                    <ul>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                        <li><FontAwesomeIcon icon={faGoogle} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                    </ul>
                    <p>Não possui uma conta ainda?<span>Cadastre-se</span></p>
                </form>
            </div>
        </main>
    )
}
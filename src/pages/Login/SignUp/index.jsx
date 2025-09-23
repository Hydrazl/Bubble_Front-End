import '../Login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Register() {
    return (
        <main className='login-container'>
            <div className="container">
                <ion-icon name="exit"></ion-icon>
                <div className="logo-content">
                    <img src="white-logo.png" alt="" /><p>BUBBLE</p>
                </div>

                <form action="">
                    <h1>CADASTRO</h1>
                    <input type="text" name="text" id="" placeholder='Nome de Usuário'/>
                    <input type="email" name="email" id="" placeholder='E-mail'/>
                    <input type="password" name="password" id="" placeholder='Senha'/>
                    <input type="password" name="confirmPassword" id="" placeholder='Confirmar senha'/>

                    <div><input type="checkbox" /><p>Concordo com os</p><span>Termos de Uso & Política de Privacidade</span></div>
                    <input type="submit" value="Continuar" />
                    <p>ou Conecte com uma Rede Social</p>

                    <ul>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                        <li><FontAwesomeIcon icon={faGoogle} /></li>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                    </ul>
                    <p>Já possui uma conta?<span>Conecte-se</span></p>
                </form>
            </div>
        </main>
    )
}  
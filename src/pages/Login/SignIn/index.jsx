import '../Login.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import bg from '../../../assets/login-bg.png'
import bg2 from '../../../assets/login-bg2.png'
import ButtonGoBack from '../../../components/ButtonGoBack';

export default function Login() {
    return (
        <main>
            <img src={bg2} className="half-image2" />
            <img src={bg2} className="half-image" />
            <div className='login-main'>
                <div className='login-container'>
                    <div className="container">
                        <ButtonGoBack />
                        <div className="logo-content">
                            <img src="../white-logo.png" alt="" className='bubble_img'/><p>Bubble</p>
                        </div>
                        <div className='form_login'>
                            <form className='login-form' action={`http://localhost:5173/`}>
                                <h1>LOGIN</h1>
                                <input type="email" name="email" id="" placeholder='Insera o seu E-mail'/>
                                <input type="password" name="password" id="" placeholder='Senha'/>

                                <div className='login-checkbox'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <input type="checkbox" id='checkbox' />
                                        <p>Mantenha-me conectado</p>
                                    </div>
                                    <div>
                                        <span className='cursor-pointer link_text'><Link to='/login/forgot'>Esqueceu a senha?</Link></span>
                                    </div>
                                    
                                </div>
                                <input type="submit" value="Continuar" className='cursor-pointer'/>
                                <p className='text-center mb-5'>Conecte com uma Rede Social</p>
                                <div className='flex justify-center'>
                                    <ul className='redes_sociais'>
                                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                                        <li><FontAwesomeIcon icon={faGoogle} /></li>
                                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                                    </ul>
                                </div>
                                
                                <div className='flex flex-row gap-3 ml-2'>
                                    <p>Não possui uma conta ainda?</p>
                                    <span ><Link to='/login/register' className='link_text'>Cadastre-se</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
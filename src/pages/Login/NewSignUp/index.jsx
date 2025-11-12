import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import ButtonGoBack from '../../../components/ButtonGoBack';
import '../Login.css'

export default function NewLogin() {
    return (
        <main className='login-page'>
            <div className="container-login">
                <div className="login-logo">
                    <img src="../newBubbleIcon.png" alt="logo" />
                    <h1 className='login-tittle'>BUBBLE</h1>
                </div>

                <h2 className="login-tittle">Seja Bem-vindo</h2>

                <h4 className="login-tittle">Cadastre-se já e <br /> venha fazer parte de <br /> nossa comunidade</h4>

                <p >Ao você continuar, você estará concordando com nossos <br /> <span>Termos de Uso</span> e <span>Política de Privacidade</span> da Bubble</p>

                <h3 className='mt-8'>Já tem uma conta?</h3>

                <button typeof="submit" className='signup-input'>Faça Login</button>
            </div>

            <div className="container-login-form">
                <div className="login-block">
                    <div className="login-return">
                        <ButtonGoBack />
                    </div>
                    <div className="parent-login-container-form">
                        <h3 className="login-tittle">Cadastro</h3>
                        <div className='child-login-container-form'>
                            <form action="#">

                                <div className="login-form">
                                    <label htmlFor="email">Nome de usuário</label>
                                    <input type="email" id="email" placeholder='Digite o seu nome de usuário' />
                                </div>

                                <div className="login-form">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder='Digite o seu Email' />
                                </div>

                                <div className="login-form">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" id='password' placeholder='Digite a sua senha' />
                                </div>

                                <div className="login-form">
                                    <label htmlFor="password">Confirme sua senha</label>
                                    <input type="password" id='password' placeholder='Digite novamente a sua senha' />
                                </div>

                                <button typeof='submit' className='login-button'>Criar sua conta</button>
                            </form>

                            <div className='separator'><p>ou continue com</p></div>

                            <div className="account-form">
                                <div className="account-input">
                                    <div className="icon-login"><FcGoogle /><p>Google</p></div>
                                </div>

                                <div className="account-input">
                                    <div className="icon"></div>
                                </div>

                                <div className="account-input">
                                    <div className="icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
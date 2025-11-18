import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ButtonGoBack from '../../../components/ButtonGoBack';
import '../Login.css'

export default function NewLogin() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const checkPasswordMatch = () => {
        if (password !== confirmPassword) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return false;
        }
    }

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

                <button typeof="submit" className='signup-input' onClick={() => {navigate('/')}}>Faça Login</button>
            </div>

            <div className="container-login-form">
                <div className="login-block">
                    <div className="login-return">
                        <ButtonGoBack />
                    </div>
                    <div className="parent-login-container-form">
                        <h3 className="login-tittle">Cadastro</h3>
                        <div className='child-login-container-form'>
                            <form action={() => {if (checkPasswordMatch()) return( navigate('/'))}}>

                                <div className="login-form">
                                    <label htmlFor="username">Nome de usuário</label>
                                    <input type="username" id="username" placeholder='Digite o seu nome de usuário' required/>
                                </div>

                                <div className="login-form">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder='Digite o seu Email' required/>
                                </div>

                                <div className="login-form">
                                    <label htmlFor="password">Senha</label>
                                    <div className="password-wrapper">
                                        <input type={showPassword ? "text" : "password"} id="password" placeholder="Digite a sua senha" value={password}
                                        onChange={(e) => setPassword(e.target.value)} required />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </button>
                                    </div>
                                </div>

                                <div className="login-form">
                                    <label htmlFor="password">Confirme sua senha</label>
                                    <div className="password-wrapper">
                                        <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" placeholder="Digite novamente a sua senha" value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} required />
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password">
                                        {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </button>
                                    </div>
                                </div>

                                <button typeof='submit' className='login-button'>Criar sua conta</button>
                            </form>

                            <div className='separator'><p>ou continue com</p></div>

                            <div className="account-form">
                                <div className="account-input">
                                    <div className="icon-register"><FcGoogle className='bg-white rounded-full p-1 px-2'/><p>Google</p></div>
                                </div>

                                <div className="account-input">
                                    <div className="icon-register"><FaFacebook className='bg-white rounded-full p-1 px-2'/><p>FaceBook</p></div>
                                </div>

                                <div className="account-input">
                                    <div className="icon-register"><FaXTwitter className='bg-white rounded-full p-1 px-2'/><p>  X  </p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
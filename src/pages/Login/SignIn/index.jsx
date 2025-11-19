import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import ButtonGoBack from "../../../components/ButtonGoBack";
import { loginUser } from "../../../services/api";
import { useAuth } from "../../../context/AuthContext";
import "../Login.css";

export default function NewLogin() {
  const navigate = useNavigate();
  const { setLogged, setUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userData = await loginUser(email, password);
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData.user));
      console.log("Usuário logado:", userData);
      setLogged(true);
      setUser(userData.user);
      navigate("/home"); // redireciona após login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="login-page">
      <div className="container-login">
        <div className="login-logo">
          <img src="../newBubbleIcon.png" alt="logo" />
          <h1 className="login-tittle">BUBBLE</h1>
        </div>

        <h2 className="login-tittle text-center">
          Seja Bem-vindo<br />novamente
        </h2>

        <h4 className="login-tittle">
          Cadastre-se já e <br /> venha fazer parte de <br /> nossa comunidade
        </h4>

        <p>
          Ao você continuar, você estará concordando com nossos <br />
          <span>Termos de Uso</span> e <span>Política de Privacidade</span> da Bubble
        </p>

        <h3 className='mt-8'>Não possui uma conta?</h3>

        <button type="button" className="signup-input" onClick={() => {navigate('/newregister')}}>
          Cadastre-se
        </button>
      </div>

      <div className="container-login-form">
        <div className="login-block">
          <div className="login-return">
            <ButtonGoBack />
          </div>
          <div className="parent-login-container-form">
            <h3 className="login-tittle">Login</h3>
            <div className="child-login-container-form">
              <form onSubmit={handleLogin}>
                <div className="login-form">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Digite o seu Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
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
                  <small>
                    <Link>Esqueceu a sua senha?</Link>
                  </small>
                </div>

                {error && <p className="error-text">{error}</p>}

                <button type="submit" className="login-button">
                  Acessar a conta
                </button>
              </form>

              <div className="separator">
                <p>ou continue com</p>
              </div>

              <div className="account-form">
                <div className="account-input">
                  <FcGoogle className="icon-login" />
                  <p>Continuar com uma conta Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import '../Login.css'
import ButtonGoBack from '../../../components/ButtonGoBack'

export default function Forgot() {
    return (
        <main>
            <div className='login-main'>
                <div className='login-container'>
                    <div className="container" id='forgot-main'>
                        <ButtonGoBack />
                        <div className="logo-content" id='logo-forgot'>
                            <img src="../white-logo.png" alt="" className='bubble_img'/><p>Bubble</p>
                        </div>
                        <div className='form_login'>
                            <form className='login-form' action={`http://localhost:5173/login/forgot/sent-email`}>
                                <h1>Recuperação da Senha</h1>
                                <h3>Insira seu E-mail para recuperação de sua senha!</h3>
                                <input type="email" name="email" id="" placeholder='Insera o seu E-mail'/>

                                <input type="submit" value="Continuar" className='cursor-pointer'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
import '../Login.css'
import ButtonGoBack from '../../../components/ButtonGoBack'

export default function Sent() {
    return (
        <main>
            <div className='login-main'>
                <div className='login-container' >
                    <div className="container" id='forgot-main'>
                        <ButtonGoBack />
                        <div className="logo-content" id='logo-forgot'>
                            <img src="../../white-logo.png" alt="" className='bubble_img'/><p>Bubble</p>
                        </div>
                        <div className='form_login'>
                            <form className='login-form' action={`http://localhost:5173/login`}>
                                <h1>Recuperação da Senha</h1>
                                <h3>Enviamos-te um Email, verifique sua caixa de entrada ou spam. Nele haverá informações de como você prosseguirar em sua recuperação de senha.</h3>
                                <input type="submit" value="Continuar" className='cursor-pointer'/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
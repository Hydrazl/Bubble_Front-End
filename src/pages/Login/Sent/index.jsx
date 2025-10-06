import '../Login.css'
import bg2 from '../../../assets/login-bg2.png'
import ButtonGoBack from '../../../components/ButtonGoBack'

export default function Sent() {
    return (
        <main>
            <img src={bg2} className="half-image2" />
            <img src={bg2} className="half-image" />
            <div className='login-main'>
                <div className='login-container'>
                    <div className="container">
                        <ButtonGoBack />
                        <div className="logo-content">
                            <img src="../../white-logo.png" alt="" className='bubble_img'/><p>Bubble</p>
                        </div>

                        <form className='login-form' action={`http://localhost:5173/login`}>
                            <h1>Recuperação da Senha</h1>
                            <h3>Enviamos-te um Email, verifique sua caixa de entrada ou spam. Nele haverá informações de como você prosseguirar em sua recuperação de senha.</h3>
                            <input type="submit" value="Continuar" className='cursor-pointer'/>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
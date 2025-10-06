import '../Login.css'
import bg2 from '../../../assets/login-bg2.png'
import ButtonGoBack from '../../../components/ButtonGoBack'

export default function Unfound() {
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

                        <form className='login-form' action={`http://localhost:5173/login/forgot`}>
                            <h1>Falha na localização do Email</h1>
                            <h3>Infelizmente não encontramos seu email em nosso Banco de Dados. Por favor, verifique novamente o endereço do email e tente novamente.</h3>
                            <input type="submit" value="Continuar" className='cursor-pointer'/>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
import './configNav.css'
import { Link } from 'react-router-dom'
import ButtonGoBack from '../../components/ButtonGoBack';

export default function ConfigNav(){
    return(

        <div className='flex'>
            <div className='conteinerConfigNav'>

                <h2>Configuração do perfil</h2>
                
                <div className='optionconfig'>
                        <Link to='/editprofile' className='linkConfigNav'>Editar perfil</Link>
                        <span className='linkConfigNav'>Histórico e likes</span>
                        <span className='linkConfigNav'>Bloqueados</span>
                        <span className='linkConfigNav'>Privacidade</span>
                </div>

                <h2>Configuração Geral</h2> 

                <div className='optionconfig'>
                        <Link to='/persoprofile' className='linkConfigNav'>Personalizar</Link>
                        <span className='linkConfigNav'>Notificações</span>
                        <span className='linkConfigNav'>Recomendações e Feed</span>
                        <Link to='/blockprofile' className='linkConfigNav'>Filtro de conteúdo</Link>
                        <span className='linkConfigNav'>Voz e áudio</span>
                        <Link to='/acessebilidade' className='linkConfigNav'>Acessibilidade</Link>
                </div>

                <h2>Configuração For Creators</h2>

                <div className='optionconfig'>
                        <Link to='/forcreators' className='linkConfigNav'>Bubble for creators</Link>
                        <span className='linkConfigNav'>Vericação oficial</span>
                </div>

                <h2>Segurança e conta</h2>

                <div className='optionconfig'>
                        <span className='linkConfigNav'>Senha e Verificação de duas etapas</span>
                        <span className='linkConfigNav'>Gerenciar Dispositivos</span>
                        <Link to='/deleteprofile' className='linkConfigNav'>Excluir Conta</Link>
                </div>

                <h2>Suporte e Políticas</h2>

                <div className='optionconfig'>
                        <Link to='/securyandpriva' className='linkConfigNav'>Segurança e privacidade</Link>
                        <Link to='/termos' className='linkConfigNav'>Termos de Uso e Políticas de Anúncios</Link>
                        <span className='linkConfigNav'>Central de Ajuda</span>
                </div>

                <div className='centerBubble'>
                    <p>©Bubble - 2025</p>
                </div>
            </div>

            <div>
                <ButtonGoBack/>
            </div>

        </div>
    )
}
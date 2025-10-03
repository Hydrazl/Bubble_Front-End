import './Chat.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/Header';
import Contatos from '../../components/Contatos';
import Dialogo from './../../components/Dialogo/index';

function Chat() {
  return (
    <>
    <header>
      <Header/>
    </header>
    
    <main className="container-chat"> {/* Container do chat */}
      <section> {/* Section dos contatos */}
        <div>
          <h2>BULHUFAS</h2>
          <div></div> {/* div q será a barra de baixo do txt */}
        </div>

        <div className='containier-contatos'>
          <ul> {/* lista dos contatos */}
            <li>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <li>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <li>
              <Contatos name='aaaaaaaaaaa' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='bbbbbbbbbb'/>
            </li>
            <li>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <li>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <li>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <li>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
          </ul>
        </div>
      </section>

        <div></div> {/* div q separará os contatos do chat*/}

      <section>
        {/* How fucking I´ll make this fucking chat happened? I really don´t have any idea. I hate FrontEnd! */}
        <Dialogo url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' name='Fulano de Tal'/>

        <div className="textBar">
          <input type="text" />
          <button type='submit'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </section>
    </main>
    </>
  )
}

export default Chat
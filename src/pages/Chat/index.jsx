import './Chat.css';
import Header from '../../components/Header';
import Contatos from '../../components/Contatos';
import Dialogo from '../../components/Dialogo';

function Chat() {
  return (
    <>
    <header>
      <Header/>
    </header>
    
    <main className="container-chat"> {/* Container do chat */}
      <section className='funciona'> {/* Section dos contatos */}
        <div className='title'>
          <h2>BULHUFAS</h2>
          <div className='line-bubble'></div> {/* div q será a barra de baixo do txt */}
        </div>

        <div className='container-contatos'>
          <ul> {/* lista dos contatos */}
            <li id='selected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li >
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='aaaaaaaaaaa' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='bbbbbbbbbb'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
            <li id='unselected'>
              <Contatos name='Fulano de Tal' url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' last_msg='Oi, tudo bem?'/>
            </li>
            <div className='line'></div>
          </ul>
        </div>
      </section>

        <div className='vertical-line'></div> {/* div q separará os contatos do chat*/}

      <section className='container-dialogo'>
        <Dialogo url_img_profile='https://avatars.githubusercontent.com/u/9919?s=200&v=4' name='Fulano de Tal'/>
      </section>
    </main>

    </>
  )
}

export default Chat
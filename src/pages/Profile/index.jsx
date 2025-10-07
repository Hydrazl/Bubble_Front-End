import { Link } from 'react-router-dom';
import BubbleRecommended from '../../components/BubbleRecoment';
import Header from '../../components/Header';
import BannerProfile from './../../components/BannerProfile/index';
import GridPost from './../../components/GridPost/index';
import photoProfile from '../../assets/meusegundo place.jpeg';
import banner from '../../assets/ilhaplace.jpeg';
import imgBubble from '../../assets/gitbolha.png';
import './Profile.css'

export default function Profile() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <BannerProfile  name={'Calabreso'}
                                bio={`⚡ Foco, visão e propósito
                                    📖 “Se Deus é por nós, quem será contra?” – Rm 8:31
                                    ✉️ contato@davioficial.com.br`} 
                                following={2121}
                                follows={'23K'}
                                bubbles={12}
                                nickName={'@davibritto'}
                                photoProfile={photoProfile}
                                banner={banner}
                                />
                
                <section className='menuBubbleRecommended'>

                    <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={imgBubble}
                                       />
                    
                    <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={imgBubble}
                                       />

                    <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={imgBubble}
                                       />
                  <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={imgBubble}
                                       />
                  <BubbleRecommended nameBubble={"jogo"}
                                       imgBubble={imgBubble}
                                       />

                </section>

                <section className='menuPerfil'>

                    <Link ><span className='abasProfile menuPerfilSelected'>Post</span></Link> {/* Coloca um psiduo Item ::before para fazer aquela linha embaixo da palavra  */}
                    <Link ><span className='abasProfile'>Curtidas</span></Link>
                    <Link ><span className='abasProfile'>Salvos</span></Link>
                    <Link ><span className='abasProfile'>Privados</span></Link>
                    <Link ><span className='abasProfile'>Historico</span></Link>

                </section>

                <GridPost/>
            </main>
        </>
    )
}
